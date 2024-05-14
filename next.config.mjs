/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "divanafaradila.com",
      },
    ],
  },
};

export default nextConfig;
