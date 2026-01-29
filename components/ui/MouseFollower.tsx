"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseFollower() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // バネのような動きで少し遅れてついてくる設定
  const springConfig = { damping: 25, stiffness: 500 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // カーソルの中心に合わせるために少しずらす
      mouseX.set(e.clientX - 250);
      mouseY.set(e.clientY - 250);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none z-0 mix-blend-screen"
      style={{
        x,
        y,
        background: "radial-gradient(circle, rgba(34,211,238,0.15) 0%, rgba(0,0,0,0) 70%)",
      }}
    />
  );
}