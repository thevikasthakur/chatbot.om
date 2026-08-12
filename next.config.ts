import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [84],
    unoptimized: true,
  },
  // Every internal href is written with a trailing slash, matching the sister
  // site customercare.om. Without this each link would cost a 308 redirect.
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
