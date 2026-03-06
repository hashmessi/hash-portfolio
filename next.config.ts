import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/hash-portfolio",
  images: {
    unoptimized: true,
  },
  /* config options here */
};

export default nextConfig;
