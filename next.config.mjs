/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
    minimumCacheTTL: 31536000, // 1 year cache for optimized images
  },

  // Enable SWC minification for JS/CSS
  swcMinify: true,

  // Headers for caching & performance
  async headers() {
    return [
      {
        source: '/(.*)', // all routes
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // long-term caching for static assets
          },
        ],
      },
    ];
  },

  // Experimental optimizations (Next.js 13+)
  experimental: {
    optimizeCss: true,      // Critical CSS extraction & CSS splitting
    scrollRestoration: true // Optional, faster page transitions
  },
};

export default nextConfig;