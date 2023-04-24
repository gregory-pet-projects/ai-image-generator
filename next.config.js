/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["i.redd.it", "links.papareact.com", "linkedin.com"], // <== Domain name
  },
};

module.exports = nextConfig
