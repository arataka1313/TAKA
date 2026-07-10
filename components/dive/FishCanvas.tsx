"use client";

import { useEffect, useRef } from "react";

interface Fish {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  phase: number;
  alpha: number;
  glow: boolean;
}

/**
 * Lightweight Canvas 2D school of fish (boids).
 * - Pauses when off-screen or when the tab is hidden.
 * - Renders a single static frame under prefers-reduced-motion.
 * - No dependencies; ~40 agents, O(N²) per frame is fine at this size.
 */
export default function FishCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let raf = 0;
    let visible = true;
    let last = performance.now();
    let elapsed = 0;

    const N = 40;
    const fish: Fish[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seed = () => {
      fish.length = 0;
      const cx = width * 0.6;
      const cy = height * 0.4;
      for (let i = 0; i < N; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 40 + Math.random() * 30;
        fish.push({
          x: cx + (Math.random() - 0.5) * width * 0.5,
          y: cy + (Math.random() - 0.5) * height * 0.5,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 3.2 + Math.random() * 2.6,
          phase: Math.random() * Math.PI * 2,
          alpha: 0.22 + Math.random() * 0.26,
          glow: Math.random() < 0.12,
        });
      }
    };

    const step = (dt: number) => {
      elapsed += dt;
      // A slowly wandering target keeps the school coherent and on screen.
      const tx = width * (0.5 + 0.3 * Math.cos(elapsed * 0.07));
      const ty = height * (0.42 + 0.24 * Math.sin(elapsed * 0.053));
      const per2 = 80 * 80;
      const sep2 = 26 * 26;

      for (let i = 0; i < fish.length; i++) {
        const f = fish[i];
        let cohX = 0,
          cohY = 0,
          aliX = 0,
          aliY = 0,
          sepX = 0,
          sepY = 0,
          count = 0;

        for (let j = 0; j < fish.length; j++) {
          if (i === j) continue;
          const o = fish[j];
          const dx = o.x - f.x;
          const dy = o.y - f.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < per2) {
            cohX += o.x;
            cohY += o.y;
            aliX += o.vx;
            aliY += o.vy;
            count++;
            if (d2 < sep2 && d2 > 0.01) {
              sepX -= dx / d2;
              sepY -= dy / d2;
            }
          }
        }

        if (count > 0) {
          f.vx += ((cohX / count - f.x) * 0.5 + (aliX / count - f.vx) * 0.9) * dt;
          f.vy += ((cohY / count - f.y) * 0.5 + (aliY / count - f.vy) * 0.9) * dt;
          f.vx += sepX * 900 * dt;
          f.vy += sepY * 900 * dt;
        }

        // Drift toward the wander target.
        f.vx += (tx - f.x) * 0.12 * dt;
        f.vy += (ty - f.y) * 0.12 * dt;

        // Soft walls.
        const m = 50;
        if (f.x < m) f.vx += (m - f.x) * 1.6 * dt;
        if (f.x > width - m) f.vx -= (f.x - width + m) * 1.6 * dt;
        if (f.y < m) f.vy += (m - f.y) * 1.6 * dt;
        if (f.y > height - m) f.vy -= (f.y - height + m) * 1.6 * dt;

        // Clamp speed.
        const sp = Math.hypot(f.vx, f.vy);
        const min = 28,
          max = 85;
        if (sp > max) {
          f.vx = (f.vx / sp) * max;
          f.vy = (f.vy / sp) * max;
        } else if (sp > 0 && sp < min) {
          f.vx = (f.vx / sp) * min;
          f.vy = (f.vy / sp) * min;
        }

        f.x += f.vx * dt;
        f.y += f.vy * dt;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const f of fish) {
        const a = Math.atan2(f.vy, f.vx);
        const s = f.size;
        const wig = reduced ? 0 : Math.sin(elapsed * 6 + f.phase) * s * 0.4;
        ctx.save();
        ctx.translate(f.x, f.y);
        ctx.rotate(a);
        ctx.fillStyle = f.glow
          ? `rgba(110, 231, 216, ${f.alpha + 0.15})`
          : `rgba(150, 205, 218, ${f.alpha})`;
        // Body
        ctx.beginPath();
        ctx.moveTo(s * 1.7, 0);
        ctx.quadraticCurveTo(0, s * 0.75, -s * 1.1, wig * 0.35);
        ctx.quadraticCurveTo(0, -s * 0.75, s * 1.7, 0);
        ctx.fill();
        // Tail
        ctx.beginPath();
        ctx.moveTo(-s * 0.9, wig * 0.3);
        ctx.lineTo(-s * 1.8, wig + s * 0.6);
        ctx.lineTo(-s * 1.8, wig - s * 0.6);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    };

    const loop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (visible && !document.hidden) {
        step(dt);
        draw();
      }
      raf = requestAnimationFrame(loop);
    };

    resize();
    seed();

    if (reduced) {
      // Settle the school a little, then paint one static frame.
      for (let i = 0; i < 90; i++) step(1 / 60);
      draw();
    } else {
      raf = requestAnimationFrame(loop);
    }

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(canvas);

    const onResize = () => {
      resize();
      if (reduced) draw();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className ?? "absolute inset-0 h-full w-full"}
    />
  );
}
