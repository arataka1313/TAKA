import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TAKA — Takashi Arai | Marine Robotics · Swarm Control · HCI",
  description:
    "Exploration log of Takashi Arai (荒井隆) — connecting ocean challenges and new experiences through marine robotics: swarm AUV research, sea turtle conservation technology, underwater acoustic rescue localization, and HCI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
