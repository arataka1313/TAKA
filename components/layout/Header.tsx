"use client";

import LanguageSwitch from "@/components/ui/LanguageSwitch";

const NAV = [
  { href: "#vision", label: "Vision" },
  { href: "#research", label: "Research" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-4 md:px-10 bg-gradient-to-b from-abyss/70 to-transparent">
      <a
        href="#top"
        className="font-mono text-xs font-bold tracking-[0.35em] text-foam"
      >
        TAKA
      </a>
      <div className="flex items-center gap-6">
        <nav aria-label="Sections" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-mono text-[11px] uppercase tracking-[0.25em] text-mist hover:text-glow transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <LanguageSwitch />
      </div>
    </header>
  );
}
