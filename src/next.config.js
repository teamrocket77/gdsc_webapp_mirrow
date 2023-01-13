/** @type {import('next').NextConfig} */
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  style-src 'self' example.com;
`
  //font-src 'self';  
  //child-src example.com;
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
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
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
