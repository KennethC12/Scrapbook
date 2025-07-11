/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/Scrapbook',
  assetPrefix: '/Scrapbook/',
};

export default nextConfig;