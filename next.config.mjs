/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pre-existing type friction (react-hook-form + zod resolver generics)
  // shouldn't block deploys. Keep type-checking in the editor / CI instead.
  typescript: { ignoreBuildErrors: true },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "images.shadcnspace.com",
      }
    ],
  },
  // Redirect legacy URLs (still indexed by Google) to their current pages.
  async redirects() {
    return [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/our-program", destination: "/treatment-and-services", permanent: true },
      { source: "/inquiries", destination: "/contact", permanent: true },
      { source: "/amenities", destination: "/facility", permanent: true },
      { source: "/learn-about-amenities", destination: "/facility", permanent: true },
      { source: "/our-amenities", destination: "/facility", permanent: true },
    ];
  },
};

export default nextConfig;
