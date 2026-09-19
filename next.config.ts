import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      }
    ],
  },
  async redirects() {
    return [
      {
        source: '/members/:path*',
        destination: '/#contact',
        permanent: false,
      },
      {
        source: '/admin/:path*',
        destination: '/',
        permanent: false,
      },
      {
        source: '/members',
        destination: '/#contact',
        permanent: false,
      },
      {
        source: '/admin',
        destination: '/',
        permanent: false,
      },
      {
        source: '/membership',
        destination: '/#membership',
        permanent: false,
      },
      {
        source: '/leadership',
        destination: '/#leadership',
        permanent: false,
      },
      {
        source: '/events',
        destination: '/#events',
        permanent: false,
      },
      {
        source: '/gallery',
        destination: '/#gallery',
        permanent: false,
      },
      {
        source: '/about',
        destination: '/#about',
        permanent: false,
      },
      {
        source: '/contact',
        destination: '/#contact',
        permanent: false,
      },
      {
        source: '/activities',
        destination: '/#about',
        permanent: false,
      },
      {
        source: '/news',
        destination: '/#events',
        permanent: false,
      }
    ];
  },
};

export default nextConfig;
