/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  basePath: '/PlumbingProject',
  assetPrefix: '/PlumbingProject',
};

module.exports = nextConfig;
