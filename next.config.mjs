/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/rpangarego/rpangarego-portofolio/**",
      },
    ],
  },
};

export default nextConfig;
