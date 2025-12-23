import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  i18n: {
    locales: ["en", "tr"],
    defaultLocale: "en",
    localeDetection: false, // otomatik /tr veya /en yönlendirmesini kapatır
  },
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
      },
      {
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  // output: "export",
};

export default nextConfig;
