"use client";

import { motion } from "framer-motion";

export default function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      whileHover={{ y: -3, color: "#fff" }}
      className="text-zinc-500 transition-colors"
    >
      {icon}
    </motion.a>
  );
}
