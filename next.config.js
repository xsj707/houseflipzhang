/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // NextJS <Image> component needs to whitelist domains for src={}
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https", 
        hostname: "pbs.twimg.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "logos-world.net",
      },
    ],
  },
  // Turbopack is enabled by default in Next.js 16
  // Empty config to use Turbopack with default settings
  turbopack: {},
};

module.exports = nextConfig;
