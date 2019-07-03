const merge        = require("webpack-merge");
const path         = require("path");
const commonConfig = require("./common.config");

module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "../dist")
  }
});