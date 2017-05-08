var webpack = require("webpack");
var isProduction = process.env.NODE_ENV === 'prod';
//test
isProduction = true;

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const extractSassPlugin = new ExtractTextPlugin({
    filename: isProduction? "./public/css/[name].min.css" : "./public/css/[name].css" 
});

const uglifyPlugin = new webpack.optimize.UglifyJsPlugin({minimize: true});

var jsPlugins = [];
var cssPlugins = [extractSassPlugin];

if(isProduction){

 const optimizeCssAssetsPlugin = new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: true
});

  cssPlugins.push(uglifyPlugin, optimizeCssAssetsPlugin);

  jsPlugins.push(uglifyPlugin);
}

module.exports = 
[
{
  entry: {
    "search.script": './ts/search.ts'
  },
  output: {
    filename: isProduction?'./public/js/[name].min.js' : './public/js/[name].js'
  },
   resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devtool: isProduction? "" : "source-map",
  module: {
     rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  plugins: jsPlugins
},
{
  entry: {
    "search.style": './sass/search.scss'
  },
  output: {
    filename: isProduction? "./public/css/[name].min.css" : "./public/css/[name].css" 
  },
  devtool: isProduction? "" : "source-map",
  module: {
        rules: [
            {
            test: /\.scss$/,
            use: extractSassPlugin.extract({
                use: [{
                    loader: "css-loader",
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
        }]
    },
    plugins: cssPlugins
}
]