import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
};

export default nextConfig;