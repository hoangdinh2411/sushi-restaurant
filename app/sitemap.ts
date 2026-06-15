import type { MetadataRoute } from "next";
import { META_DATA } from "@/utils/constant";

const BASE_URL = META_DATA.baseUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-06-01");
  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/menu`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/lunch-menu`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
