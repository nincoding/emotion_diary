const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const configuration = {

  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: "./src/client/index",

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "..", "public", "index.html"),
    }),
    new webpack.ProvidePlugin({ React: "react" }),
    new webpack.DefinePlugin({
      'process.env.PUBLIC_URL': JSON.stringify('http://localhost:3000'),
    }),
  ],
};

module.exports = configuration;