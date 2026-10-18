import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/residential', destination: '/demolition', permanent: true },
      { source: '/commercial', destination: '/demolition', permanent: true },
      { source: '/kitchens', destination: '/demolition', permanent: true },
      { source: '/framing', destination: '/selective-deconstruction', permanent: true },
      { source: '/rough-in', destination: '/demolition', permanent: true },
      { source: '/renovations', destination: '/demolition', permanent: true },
    ];
  },
};

export default nextConfig;
