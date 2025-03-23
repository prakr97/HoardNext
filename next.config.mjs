// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'sjc.microlink.io',
        },
        {
          protocol: 'https',
          hostname: 'm.media-amazon.com',
        },
        {
          protocol: 'https',
          hostname: 'randomuser.me',
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
      ],
      domains: ['images.unsplash.com', 'plus.unsplash.com', 'm.media-amazon.com'],
    },
    experimental: {
      appDir: true,
    },
  }
  
  export default nextConfig