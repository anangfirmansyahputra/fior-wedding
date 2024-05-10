/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "divanafaradila.com",
      },
    ],
  },
};

export default nextConfig;
