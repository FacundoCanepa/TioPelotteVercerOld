/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["loved-ducks-790a0f88b6.media.strapiapp.com"],
  },
  devIndicators: false,
  eslint: {
    ignoreDuringBuilds: true, 
  },
};

module.exports = nextConfig;
