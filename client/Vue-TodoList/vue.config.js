const { process } = require("autoprefixer");

module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:3000",
      },
    },
  },
  publicPath: "/vue/",
};
