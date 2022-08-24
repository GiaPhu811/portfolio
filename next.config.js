/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    esmExternals: true,
    removeConsole: isProd,
  },
};

module.exports = nextConfig;
