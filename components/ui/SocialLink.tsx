"use client";
import { motion } from "framer-motion";

export default function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      whileHover={{ y: -3, color: "#fff" }}
      className="transition-colors text-zinc-500"
    >
      {icon}
    </motion.a>
  );
}