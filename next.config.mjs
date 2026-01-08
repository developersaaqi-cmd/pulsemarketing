/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns:[
        {
          hostname:"res.cloudinary.com",
          protocol:'https'
        }
      ] 
  },
  reactStrictMode: true,
  trailingSlash: true,
};

export default nextConfig;