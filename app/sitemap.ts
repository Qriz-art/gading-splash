import type { MetadataRoute } from "next";
import { siteData } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/tentang", priority: 0.8 },
    { path: "/wahana", priority: 0.9 },
    { path: "/galeri", priority: 0.7 },
    { path: "/tiket", priority: 0.9 },
    { path: "/kontak", priority: 0.8 },
  ];

  return routes.map((route) => ({
    url: `${siteData.baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
