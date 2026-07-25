import type { ReactNode } from "react";

export type Language = "ja" | "en";

export type ProjectImageFit = "cover" | "contain";

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string;
  tag: string;
  icon: ReactNode;
  image: string;
  imageAlt: string;
  imageFit?: ProjectImageFit;
  highlights?: string[];
};

export type TimelineItem = {
  date: string;
  title: string;
  description: string;
};
