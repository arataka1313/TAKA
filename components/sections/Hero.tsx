"use client";
import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import SocialLink from "@/components/ui/SocialLink";
import { socialLinks } from "@/lib/data";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden">
      {/* 背景エフェクト */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent-blue/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent-purple/10 rounded-full blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        {/* アイコン */}
        <motion.a
          href="https://github.com/arataka1313"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="relative inline-block mb-8 group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000" />
          <img 
            src="/images/icon.webp" 
            alt="TAKA Icon"
            className="relative w-28 h-28 md:w-36 md:h-36 rounded-full border-2 border-white/10 object-cover bg-zinc-900"
          />
        </motion.a>

        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-2 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
          TAKA
        </h1>
        <p className="text-sm md:text-base font-mono text-zinc-500 mb-8 tracking-[0.3em] uppercase">
          Takashi Arai
        </p>
        
        <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          HCI Student Researcher at{" "}
          <a 
            href="https://bodysharinglab.jp/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white font-medium border-b border-accent-cyan/30 hover:border-accent-cyan hover:text-accent-cyan transition-colors"
          >
            BodySharingLab
          </a>
          .
          <br />
          Focusing on BodySharing & Underwater Robotics.
        </p>

        <div className="flex gap-8 justify-center mb-12">
          {socialLinks.map((link) => (
            <SocialLink key={link.name} href={link.url} icon={link.icon} />
          ))}
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          <Badge 
            text="EAI BodyNets 2025 (B4 First Author)" 
            color="border-accent-blue text-accent-blue shadow-[0_0_15px_rgba(34,211,238,0.4)]" 
          />
          <Badge 
            text="KOSEN ➔ Ryukyu Univ(GPA 3.92 / 4.00)" 
            color="border-yellow-500 text-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.4)]" 
          />
          <Badge text="CS Master's (Apr 2026)" color="border-accent-purple text-accent-purple" />
        </div>
      </motion.div>

      {/* スクロールインジケーター */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] font-mono text-zinc-700 tracking-[0.3em]">SCROLL</span>
        <div className="w-px h-16 bg-gradient-to-b from-zinc-800 to-transparent" />
      </motion.div>
    </section>
  );
}