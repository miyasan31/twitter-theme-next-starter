/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: { locales: ["ja"], defaultLocale: "ja" },
  typescript: { ignoreDevErrors: true },
  eslint: { ignoreDuringBuilds: true },
  poweredByHeader: false,
  // pageExtensions: ["page.tsx", "page.ts"],
  images: {},
};

module.exports = nextConfig;
