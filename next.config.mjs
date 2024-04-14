/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "a0.muscache.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "glvmmupiqwlmhicmggqp.supabase.co",
        protocol: "https",
        port: "",
      },
      {
        hostname: "d2kcmk0r62r1qk.cloudfront.net",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
