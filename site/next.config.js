/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/register',
        destination: 'https://docs.google.com/forms/d/e/1FAIpQLSfatAsK7zWhWRGjxoAhOddJrfd3x23r69sCx7htvBqtx5F9zw/viewform',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
