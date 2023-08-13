import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://next-byster.app",
      lastModified: new Date(),
    },
    {
      url: "https://next-byster.app/ru",
      lastModified: new Date(),
    },
    {
      url: "https://next-byster.app/en",
      lastModified: new Date(),
    },
    {
      url: "https://next-byster.app/ru/download",
      lastModified: new Date(),
    },
    {
      url: "https://next-byster.app/en/download",
      lastModified: new Date(),
    },
  ];
}
