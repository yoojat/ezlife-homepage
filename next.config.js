// next.config.js
const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  cssLoaderOptions: {
    cssModules: true,
    url: false
  },
  target: "serverless"
});
