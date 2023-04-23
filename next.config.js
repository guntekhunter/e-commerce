/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    DB_RUI: 'mongodb+srv://guntek:060820@next13.5jsxt0o.mongodb.net/test',
    NEXTAUTH_SECRET: 'gunteknext13',
  }
};

module.exports = nextConfig;
