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
  plugins: [HWPConfig]
};
