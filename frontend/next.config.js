/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost'],
  },
  i18n: {
    locales: ['en-US', 'es-ES'],
    defaultLocale: 'en-US',
  },
};

module.exports = nextConfig;
