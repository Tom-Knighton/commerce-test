import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Legacy product route / regex
      {
        source: "/:slug*-p:productId(\\d+)/(.*)",
        destination: "/product/:productId/$1",
      },
      {
        source: "/:slug*-p:productId(\\d+)",
        destination: "/product/:productId",
      },
      {
        source: "/:path*",
        destination: "/category/:path*",
      },
    ];
  },
};

export default nextConfig;
