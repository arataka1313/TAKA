"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/context/LanguageContext";

const copy = {
  ja: {
    title: "Outside the Lab",
    items: [
      {
        src: "/images/hobbies/ocean-view.jpg",
        caption: "沖縄の海を眺める",
      },
      {
        src: "/images/hobbies/motorcycle.jpg",
        caption: "沖縄をバイクで巡る",
      },
      {
        src: "/images/hobbies/snorkeling.jpg",
        caption: "海とシュノーケリング",
      },
      {
        src: "/images/hobbies/beatles-ashram.jpg",
        caption: "ビートルズが滞在したアシュラムにて、リシケシュ",
      },
      {
        src: "/images/hobbies/ganges-rishikesh.jpg",
        caption: "ヨガの聖地リシケシュで、ガンジス川に入る",
      },
      {
        src: "/images/hobbies/taj-mahal.jpg",
        caption: "タージ・マハルを訪れる",
      },
    ],
  },
  en: {
    title: "Outside the Lab",
    items: [
      {
        src: "/images/hobbies/ocean-view.jpg",
        caption: "Exploring Okinawa's coast",
      },
      {
        src: "/images/hobbies/motorcycle.jpg",
        caption: "Motorcycle touring in Okinawa",
      },
      {
        src: "/images/hobbies/snorkeling.jpg",
        caption: "Snorkeling and the ocean",
      },
      {
        src: "/images/hobbies/beatles-ashram.jpg",
        caption: "At the ashram where the Beatles stayed, Rishikesh",
      },
      {
        src: "/images/hobbies/ganges-rishikesh.jpg",
        caption: "Entering the Ganges in Rishikesh, a center of yoga",
      },
      {
        src: "/images/hobbies/taj-mahal.jpg",
        caption: "Visiting the Taj Mahal",
      },
    ],
  },
} as const;

export default function OutsideLab() {
  const { lang } = useLanguage();
  const text = copy[lang];

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-28">
      <SectionTitle title={text.title} />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {text.items.map((item) => (
          <PhotoCard
            key={item.src}
            src={item.src}
            alt={item.caption}
            caption={item.caption}
          />
        ))}
      </div>
    </section>
  );
}

function PhotoCard({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -4 }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-zinc-950">
        <Image
          src={src}
          alt=""
          aria-hidden="true"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="scale-110 object-cover opacity-35 blur-2xl"
        />
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain"
          quality={92}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
        <figcaption className="absolute right-5 bottom-4 left-5 text-sm leading-relaxed font-medium text-zinc-100">
          {caption}
        </figcaption>
      </div>
    </motion.figure>
  );
}
