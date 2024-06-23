/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  // image urls
  images: {
    unoptimized: true,
    domains: [],
  },
};

module.exports = nextConfig;
