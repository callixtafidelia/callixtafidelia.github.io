/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true
  },
  // Remove basePath and assetPrefix for now - you'll need to add these back when deploying
  // basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '',
}

export default nextConfig
