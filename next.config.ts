import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "deifkwefumgah.cloudfront.net",
        pathname: "/shadcnblocks/block/ecommerce/electronics/**"
      }
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
