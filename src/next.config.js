/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
];


const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: false
  },
  async headers() {
    return [
      {
        //source: "/:path*",
        source: "/",
        headers: securityHeaders,
      }
    ]
  }
}

module.exports = nextConfig
