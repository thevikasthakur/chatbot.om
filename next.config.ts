import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [84],
    unoptimized: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
