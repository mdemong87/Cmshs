/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  api: {
    responseLimit: false,
  },
}


module.exports = nextConfig
