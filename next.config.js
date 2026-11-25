/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  adapterPath: "@aws-amplifygen3/adapter-nextjs",
  images: {
    remotePatterns: [
      {
        hostname: "**.unsplash.com"
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/isr',
        headers: [
          {
            key: 'cache-control',
            value: 'max-age=10, stale-while-revalidate=10',
          },
        ],
      },
    ]
  },
}

export default nextConfig
