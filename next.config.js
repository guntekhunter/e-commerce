/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    DB_RUI: "mongodb+srv://guntek:060820@next13.5jsxt0o.mongodb.net/test",
    NEXTAUTH_SECRET: "gunteknext13",
    GOOGLE_CLIENT_ID:
      "629123249260-5pvhgif13gkckah1nu15mdq803lai50u.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    SECRET:"962ccba5a239f611ac57e5a718b60918"
  },
};

module.exports = nextConfig;
