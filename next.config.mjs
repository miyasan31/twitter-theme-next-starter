/**
 * @type {import('next').NextConfig}
 * */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  i18n: { locales: ["ja"], defaultLocale: "ja" },
  eslint: { dirs: ["src"] },
  pageExtensions: ["page.tsx", "page.ts"],
  images: {},
};

export default nextConfig;
