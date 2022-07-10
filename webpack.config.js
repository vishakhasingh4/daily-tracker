const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const CSSModuleLoader = {
  loader: "css-loader",
  options: {
    modules: true,
    // localIdentName: "[name]_[local]_[hash:base64:5]",
    importLoaders: 2,
    // camelCase: true,
    sourceMap: false, // turned off as causes delay
  },
};
// For our normal CSS files we would like them globally scoped
const CSSLoader = {
  loader: "css-loader",
  options: {
    modules: "global",
    importLoaders: 2,
    // camelCase: true,
    sourceMap: false, // turned off as causes delay
  },
};

// Standard style loader (prod and dev covered here)
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";
const styleLoader = devMode ? "style-loader" : MiniCssExtractPlugin.loader;

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "index.tsx"),
  devtool: "inline-source-map",
  output: {
    publicPath: "/",
  },
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    port: 3001,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /\.module\.(sa|sc|c)ss$/,
        use: [styleLoader, CSSLoader],
      },
      {
        test: /\.module\.(sa|sc|c)ss$/,
        use: [styleLoader, CSSModuleLoader],
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".ts", ".js", ".tsx", ".css"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
};
