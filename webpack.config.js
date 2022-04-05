/* eslint-disable */
const path = require("path");

module.exports = {
  entry: "./src/index.jsx",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve("dist"),
    publicPath: "/",
  },
  devServer: {
    static: {
        directory: path.join(__dirname, 'public'),
      },
    hot: true,
    devMiddleware:{
        publicPath: "https://localhost:3000/dist/",
     },
    port: 3000
  },
  module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
    ], 
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
}