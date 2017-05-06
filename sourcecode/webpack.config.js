var webpack = require("webpack");
var isProduction = process.env.NODE_ENV === 'prod';

module.exports = {
  entry: {
    Search: './js/search.js'
  },
  output: {
    filename: isProduction?'./public/js/[name].entry.min.js' : './public/js/[name].entry.js'
  },
  devtool: isProduction? "" : "source-map",
  plugins: isProduction?[
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ] : []
}