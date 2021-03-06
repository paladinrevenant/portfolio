const HtmlWebpackPlugin             = require("html-webpack-plugin");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const path                          = require("path");

const baseUrl = "/";
const srcDir  = path.resolve(__dirname, "../src");
const title   = "Mike's Amazing Portfolio";

module.exports = {
  entry: path.resolve(__dirname, "../src/index.jsx"),
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [srcDir, "node_modules"],
    alias: {
      Assets: path.resolve(__dirname, "../src/assets"),
      Components: path.resolve(__dirname, "../src/components"),
      Helpers: path.resolve(__dirname, "../src/helpers"),
      Services: path.resolve(__dirname, "../src/services"),
      Source: srcDir
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          "eslint-loader"
        ]
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.less$/i,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: {
                localIdentName: "[local]_[name]"
              }
            }
          },
          "less-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[hash].[ext]",
              outputPath: "assets"
            },
          },
        ]
      },
      {
        test: /\.svg$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "svg-react-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.ejs",
      metadata: {
        title, baseUrl
      }
    }),
    new LodashModuleReplacementPlugin()
  ]
};