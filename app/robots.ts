import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://leventkopuz.vercel.app/sitemap.xml",
    host: "https://leventkopuz.vercel.app",
  };
}
