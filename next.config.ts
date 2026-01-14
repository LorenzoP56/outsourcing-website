import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "outscourcing.marketingrent.it",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
