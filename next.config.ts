import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: {
    position: "bottom-right",
  },
  
  // Enable static generation for all pages
  output: "export",

  // If you have images from external domains, add them here 
  images: {
    unoptimized: true, // For static export
  }
};

export default nextConfig;
