/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
    forceSwcTransforms: true
  }
}

module.exports = nextConfig
