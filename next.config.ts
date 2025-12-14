import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en", "tr"],
    defaultLocale: "en",
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
