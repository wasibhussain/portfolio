/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portfolio",
  eslint: {
    ignoreDuringBuilds: true,
},
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**/**'
      }
    ]
  }
}

module.exports = nextConfig
