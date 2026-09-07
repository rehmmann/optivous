import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Optivous",
    short_name: "Optivous",
    description: "Research & Introductions for B2B firms.",
    start_url: "/",
    display: "standalone",
    background_color: "#f1ece0",
    theme_color: "#f1ece0",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
