
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['img.gamezop.com', 'placekitten.com'], // Add domains for images
  },
}

module.exports = nextConfig
