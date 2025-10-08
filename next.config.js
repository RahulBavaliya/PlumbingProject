/** @type {import('next').NextConfig} */
const isVercel = !!process.env.VERCEL;
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  basePath: isVercel ? '' : '/PlumbingProject',
  assetPrefix: isVercel ? '' : '/PlumbingProject/',
  trailingSlash: true,
};

module.exports = nextConfig;
