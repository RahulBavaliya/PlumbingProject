/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  basePath: '/PlumbingProject',
  assetPrefix: '/PlumbingProject/',
  trailingSlash: true,
};

module.exports = nextConfig;
