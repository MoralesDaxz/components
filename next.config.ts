import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/**',
      },
        {
        protocol: 'https',
        hostname: 'i.ibb.co',
        pathname: '/**',
      },
    ],
  },
  reactStrictMode: true,
  transpilePackages: ["ui", "api"],
};

export default nextConfig;
