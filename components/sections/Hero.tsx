"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import SocialLink from "@/components/ui/SocialLink";
import { siteCopy, socialLinks } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

const badgeColors = [
  "border-accent-blue text-accent-blue shadow-[0_0_15px_rgba(34,211,238,0.25)]",
  "border-yellow-500 text-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.25)]",
  "border-accent-purple text-accent-purple shadow-[0_0_15px_rgba(168,85,247,0.22)]",
];

type AchievementKey = "bodynets" | "award";

const achievementCopy = {
  ja: {
    bodynets: {
      title: "EAI BodyNets 2025",
      description: "EAI BodyNets 2025での研究発表",
      alt: "EAI BodyNets 2025で肩甲骨運動認識研究を発表する荒井隆",
      image: "/images/awards/bodynets-presentation.jpg",
    },
    award: {
      title: "琉球大学 工学部長賞",
      description: "卒業時GPA：3.92 / 4.00",
      alt: "琉球大学工学部長賞、卒業証書、記念品",
      image: "/images/awards/deans-award.jpg",
    },
    close: "閉じる",
  },
  en: {
    bodynets: {
      title: "EAI BodyNets 2025",
      description: "Research presentation at EAI BodyNets 2025",
      alt: "Takashi Arai presenting scapular-motion recognition research at EAI BodyNets 2025",
      image: "/images/awards/bodynets-presentation.jpg",
    },
    award: {
      title: "Faculty of Engineering Dean's Award, University of the Ryukyus",
      description: "Graduation GPA: 3.92 / 4.00",
      alt: "Faculty of Engineering Dean's Award, graduation certificate, and commemorative gift",
      image: "/images/awards/deans-award.jpg",
    },
    close: "Close",
  },
} as const;

export default function Hero() {
  const { lang } = useLanguage();
  const copy = siteCopy[lang].hero;
  const achievementText = achievementCopy[lang];
  const [activeAchievement, setActiveAchievement] = useState<AchievementKey | null>(null);

  const activeContent = useMemo(
    () => (activeAchievement ? achievementText[activeAchievement] : null),
    [activeAchievement, achievementText],
  );

  useEffect(() => {
    if (!activeAchievement) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveAchievement(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeAchievement]);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-28">
      <div className="absolute top-1/4 -left-20 h-80 w-80 rounded-full bg-accent-blue/10 blur-[120px]" />
      <div className="absolute right-[-5rem] bottom-1/4 h-80 w-80 rounded-full bg-accent-purple/10 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-4xl text-center"
      >
        <motion.a
          href="https://github.com/arataka1313"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          className="group relative mb-8 inline-block"
          aria-label="Open Takashi Arai's GitHub profile"
        >
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue opacity-25 blur transition duration-1000 group-hover:opacity-75" />
          <Image
            src="/images/icon.webp"
            alt="TAKA icon"
            width={144}
            height={144}
            priority
            className="relative h-28 w-28 rounded-full border-2 border-white/10 bg-zinc-900 object-cover md:h-36 md:w-36"
          />
        </motion.a>

        <h1 className="mb-2 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-7xl font-black tracking-tighter text-transparent md:text-9xl">
          TAKA
        </h1>
        <p className="mb-7 font-mono text-sm tracking-[0.3em] text-zinc-500 uppercase md:text-base">
          Takashi Arai
        </p>

        <p className="mb-3 whitespace-pre-line font-mono text-xs tracking-[0.18em] text-accent-cyan uppercase md:text-sm">
          {copy.affiliation}
        </p>
        <h2 className="mb-5 text-2xl font-bold text-white md:text-4xl">{copy.role}</h2>
        <p className="mx-auto mb-9 max-w-3xl text-base leading-relaxed text-zinc-400 md:text-lg">
          {copy.description}
        </p>

        <div className="mb-12 flex justify-center gap-8">
          {socialLinks.map((link) => (
            <SocialLink key={link.name} href={link.url} icon={link.icon} label={link.name} />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {copy.badges.map((badge, index) => {
            const achievementKey: AchievementKey | null =
              index === 0 ? "bodynets" : index === 1 ? "award" : null;

            if (!achievementKey) {
              return (
                <Badge
                  key={badge}
                  text={badge}
                  color={badgeColors[index] ?? badgeColors[0]}
                />
              );
            }

            const hoverClass =
              achievementKey === "award" ? "hover:bg-yellow-500/10" : "hover:bg-accent-blue/10";
            const ringClass =
              achievementKey === "award" ? "focus-visible:ring-yellow-400" : "focus-visible:ring-accent-blue";

            return (
              <motion.button
                key={badge}
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveAchievement(achievementKey)}
                className={`cursor-pointer rounded-full focus-visible:outline-none focus-visible:ring-2 ${ringClass} focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950`}
                aria-label={`${badge}: ${lang === "ja" ? "画像を表示" : "view image"}`}
              >
                <Badge
                  text={badge}
                  color={`${badgeColors[index]} transition-colors ${hoverClass}`}
                />
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 flex flex-col items-center gap-3"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-zinc-700">SCROLL</span>
        <div className="h-16 w-px bg-gradient-to-b from-zinc-800 to-transparent" />
      </motion.div>

      <AnimatePresence>
        {activeContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            onMouseDown={(event: React.MouseEvent<HTMLDivElement>) => {
              if (event.target === event.currentTarget) setActiveAchievement(null);
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="achievement-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setActiveAchievement(null)}
                className="absolute top-4 right-4 z-10 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-sm text-zinc-200 backdrop-blur transition hover:bg-white/15"
              >
                {achievementText.close}
              </button>

              <div className="relative aspect-video bg-black">
                <Image
                  src={activeContent.image}
                  alt={activeContent.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 960px"
                  className="object-contain"
                  quality={95}
                  priority
                />
              </div>

              <div className="border-t border-white/10 px-6 py-5 md:px-8">
                <h3 id="achievement-modal-title" className="text-xl font-bold text-white md:text-2xl">
                  {activeContent.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400 md:text-base">
                  {activeContent.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
