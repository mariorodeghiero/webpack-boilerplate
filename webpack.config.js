var HtmlWebpackPlugin = require("html-webpack-plugin");
var HWPConfig = new HtmlWebpackPlugin({
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
    loaders: [
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
        use: ["style-loader", "css-loader", "sass-loader"]
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
  plugins: [HWPConfig]
};
