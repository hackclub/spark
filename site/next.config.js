/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/register',
        destination: 'https://forms.gle/ZvhFctVAAN5W5YaP9',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
