/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["s3.byster.one", "api.byster.one"],
  },
  i18n: {
    locales: ["ru", "en"],
    defaultLocale: "en",
    localeDetection: true,
  },
  outputFileTracing: true,
};

module.exports = nextConfig;
