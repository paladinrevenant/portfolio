const merge        = require("webpack-merge");
const path         = require("path");
const commonConfig = require("./common.config");

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    hot: true
  }
});