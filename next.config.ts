import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  devIndicators: false,

  // Image Optimization for Modern Formats
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Custom quality levels (must include all qualities used in components)
    qualities: [75, 85, 90], // Default is [75]
    minimumCacheTTL: 60,
  },

  turbopack: {
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: "asset/resource",
    });
    return config;
  },
};

export default nextConfig;
