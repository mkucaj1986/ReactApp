const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const detect = require("detect-port");
const portfinder = require("portfinder");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const babaelPolyfill = require("babel-polyfill");

const DEFAULT_PORT = 3000;

const config = port => ({
  devtool: "cheap-module-source-map",
  entry: {
    app: ["babel-polyfill", "./src/index"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.[hash].js",
    publicPath: "/"
  },
  devServer: {
    port,
    hot: true,
    historyApiFallback: true,
    stats: "errors-only",
    clientLogLevel: "error"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader"
      }
    ]
  }
});

module.exports = detect(DEFAULT_PORT).then(port => {
  if (port === DEFAULT_PORT) {
    return config(DEFAULT_PORT);
  }

  return portfinder.getPortPromise().then(port => config(port));
});
