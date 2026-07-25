"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Eye, TriangleAlert, X } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/context/LanguageContext";
import { siteCopy } from "@/lib/data";

export default function Mission() {
  const { lang } = useLanguage();
  const sectionTitle = siteCopy[lang].sections.mission;
  const copy = siteCopy[lang].mission;
  const [isSensitiveImageOpen, setIsSensitiveImageOpen] = useState(false);

  useEffect(() => {
    if (!isSensitiveImageOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsSensitiveImageOpen(false);
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSensitiveImageOpen]);

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-28">
      <SectionTitle title={sectionTitle} />

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
        >
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/mission/turtle-swim.webp"
              alt={copy.captions.turtle}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <p className="absolute right-5 bottom-4 left-5 text-sm text-zinc-200">
              {copy.captions.turtle}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className="mb-4 font-mono text-xs tracking-[0.2em] text-accent-cyan uppercase">
            {copy.eyebrow}
          </p>
          <h2 className="mb-7 text-3xl leading-tight font-bold text-white md:text-4xl">
            {copy.title}
          </h2>
          <div className="space-y-5 text-base leading-8 text-zinc-400">
            {copy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <PhotoTile
          src="/images/mission/beach-cleanup.png"
          alt={copy.captions.cleanup}
          caption={copy.captions.cleanup}
          fit="contain"
          unoptimized
        />
        <PhotoTile
          src="/images/mission/turtle-conservation.webp"
          alt={copy.captions.conservation}
          caption={copy.captions.conservation}
          fit="contain"
        />
        <PhotoTile
          src="/images/mission/turtle-eggs.jpg"
          alt={copy.captions.eggs}
          caption={copy.captions.eggs}
          fit="contain"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mt-14 grid items-center gap-7 rounded-3xl border border-red-400/15 bg-red-950/10 p-5 md:grid-cols-[0.8fr_1.2fr] md:p-7"
      >
        <div>
          <p className="mb-3 font-mono text-xs tracking-[0.18em] text-red-300 uppercase">
            Ocean Challenge
          </p>
          <p className="leading-8 text-zinc-400">{copy.captions.issueLead}</p>
        </div>

        <div>
          <button
            type="button"
            onClick={() => setIsSensitiveImageOpen(true)}
            className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-black text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            aria-label={`${copy.captions.warningTitle}: ${copy.captions.reveal}`}
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src="/images/mission/dead-turtle.jpg"
                alt=""
                aria-hidden="true"
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="scale-110 object-cover blur-xl brightness-[0.35] grayscale transition duration-500 group-hover:scale-[1.13]"
              />
              <div className="absolute inset-0 bg-black/45" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
                <TriangleAlert className="mb-3 h-7 w-7 text-red-300" aria-hidden="true" />
                <p className="text-base font-bold text-white md:text-lg">
                  {copy.captions.warningTitle}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-300 md:text-sm">
                  {copy.captions.warningBody}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-4 py-2 text-xs font-medium text-zinc-100 transition group-hover:bg-white/10">
                  <Eye className="h-4 w-4" aria-hidden="true" />
                  {copy.captions.reveal}
                </span>
              </div>
            </div>
          </button>
          <p className="px-1 pt-3 text-xs leading-relaxed text-zinc-500">
            {copy.captions.deadTurtle}
          </p>
        </div>
      </motion.div>

      <AnimatePresence>
        {isSensitiveImageOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onMouseDown={(event: React.MouseEvent<HTMLDivElement>) => {
              if (event.target === event.currentTarget) setIsSensitiveImageOpen(false);
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="sensitive-image-title"
          >
            <motion.div
              initial={{ opacity: 0, y: 22, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-zinc-950 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setIsSensitiveImageOpen(false)}
                aria-label={siteCopy[lang].modal.close}
                className="absolute top-4 right-4 z-10 rounded-full border border-white/10 bg-black/65 p-2 text-white backdrop-blur transition hover:bg-white/15"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative aspect-[3/4] max-h-[72vh] bg-black">
                <Image
                  src="/images/mission/dead-turtle.jpg"
                  alt={copy.captions.deadTurtle}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-contain"
                  quality={95}
                />
              </div>
              <div className="border-t border-white/10 px-6 py-5 md:px-8">
                <h3 id="sensitive-image-title" className="text-lg font-bold text-white">
                  {copy.captions.warningTitle}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {copy.captions.deadTurtle}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function PhotoTile({
  src,
  alt,
  caption,
  fit = "cover",
  unoptimized = false,
}: {
  src: string;
  alt: string;
  caption: string;
  fit?: "cover" | "contain";
  unoptimized?: boolean;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-950">
        {fit === "contain" && (
          <Image
            src={src}
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="scale-110 object-cover opacity-30 blur-2xl"
            unoptimized={unoptimized}
          />
        )}
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, 33vw"
          className={fit === "contain" ? "object-contain" : "object-cover"}
          quality={92}
          unoptimized={unoptimized}
        />
      </div>
      <figcaption className="px-3 py-3 text-xs leading-relaxed text-zinc-500">
        {caption}
      </figcaption>
    </motion.figure>
  );
}
