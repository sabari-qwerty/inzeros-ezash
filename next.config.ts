import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [new URL('https://accessts.inzeros.in/asstess/**')],
  },
};

export default nextConfig;
