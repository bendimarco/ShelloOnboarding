import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  output: 'export', // Always export in production
  images: {
    unoptimized: true // Required for static exports
  }
};

export default nextConfig;