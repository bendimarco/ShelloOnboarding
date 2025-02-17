import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', 
  images: {
    unoptimized: true 
  },
  trailingSlash: true,
  async generateStaticParams() {
    return [
      { slug: ['onboarding'] }
    ];
  }
};

export default nextConfig;