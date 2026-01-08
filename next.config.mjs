/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,

  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      }
    ],
    minimumCacheTTL: 31536000 // 1 year caching
  },

  // Headers for caching static assets
  async headers() {
    return [
      {
        source: '/(.*)', // all routes
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ];
  },

  // Experimental features
  experimental: {
    optimizeCss: true,      // Critical CSS extraction & splitting
    scrollRestoration: true // Optional for faster page transitions
  }
};

export default nextConfig;