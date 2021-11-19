const { SITE_URL } = require("./helpers/config");

module.exports = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    domains: [SITE_URL],
  },
};
