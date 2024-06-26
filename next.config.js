/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
    ],
  },
}

module.exports = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

module.exports = nextConfig