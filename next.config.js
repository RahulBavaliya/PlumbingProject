/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  basePath: process.env.VERCEL ? '/' : '/PlumbingProject/',
  assetPrefix: process.env.VERCEL ? '/' : '/PlumbingProject/',
  trailingSlash: true,
};

module.exports = nextConfig;
