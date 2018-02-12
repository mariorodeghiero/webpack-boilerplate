const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const HWPConfig = new HtmlWebpackPlugin({
  template: __dirname + "/src/index.html",
  file: "index.html",
  inject: "body"
});

module.exports = {
  entry: ["./src/main.js"],
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: [["es2015", { modules: false }]]
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "img/"
          }
        }
      }
    ]
  },
  plugins: [HWPConfig, new ExtractTextPlugin("css/styles.css")]
};
