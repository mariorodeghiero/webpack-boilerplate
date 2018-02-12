const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const HWPConfig = new HtmlWebpackPlugin({
  template: __dirname + "/src/index.html",
  file: "index.html",
  inject: "body"
});

module.exports = {
  entry: ["./src/main.js"],
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
    publicPath: "/"
  },
  devtool: "source-map",
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
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
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
        })
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
  plugins: [
    HWPConfig,
    new ExtractTextPlugin("css/styles.css"),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: { warnings: false },
        output: { comments: false },
        sourceMap: true
      }
    })
  ]
};
