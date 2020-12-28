// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
const nextConfig = {
  env: {
    APP_ENV: process.env.APP_ENV,
    PUBLIC_HOST: process.env.PUBLIC_HOST,
    PROJECT_ANALYTICS: process.env.PROJECT_ANALYTICS,
  },
  images: {
    domains: ["storage.googleapis.com", "firebasestorage.googleapis.com"],
  },
  poweredByHeader: false,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  webpack(config) {
    config.resolve.alias["@"] = path.join(__dirname, "src");
    return config;
  },
};

module.exports = nextConfig;
