import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/ShelloOnboarding',
  output: 'export', // Always export in production
  images: {
    unoptimized: true // Required for static exports
  }
};

export default nextConfig;