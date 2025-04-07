
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['img.gamezop.com', 'placekitten.com', 'static.gamezop.com'], // Add domains for images
  },
  // Enable experimental features if needed
  experimental: {
    // serverActions: true, // Enable if you need to use server actions
  }
};

module.exports = nextConfig;
