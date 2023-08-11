/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/register',
        destination: 'https://docs.google.com/forms/d/e/1FAIpQLSfatAsK7zWhWRGjxoAhOddJrfd3x23r69sCx7htvBqtx5F9zw/viewform',
        permanent: false,
      },
      {
        source: "/schedule",
        destination: "https://docs.google.com/document/d/1QX3vVyNkFQQUR7vu_g6CtszUA-7RPDjHbd-tUW6tALo/edit",
        permanent: false
      }
    ]
  },
}

module.exports = nextConfig
