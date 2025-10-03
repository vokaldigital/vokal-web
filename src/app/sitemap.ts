// src/app/sitemap.ts
import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://vokal.digital", lastModified: new Date(), priority: 1 },
  ];
}