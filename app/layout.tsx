import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TAKA | Takashi Arai",
  description:
    "複数水中ドローンの協調制御と低コスト機体開発に取り組む荒井隆の研究ポートフォリオ。",
  openGraph: {
    title: "TAKA | Takashi Arai",
    description:
      "Portfolio of Takashi Arai, a graduate student researching cooperative control and low-cost prototyping for multiple underwater drones.",
    type: "website",
  },
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
