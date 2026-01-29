import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// ↓ 追加
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TAKA | Takashi Arai",
  description: "HCI Researcher & Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        {/* ↓ Providerで包む */}
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}