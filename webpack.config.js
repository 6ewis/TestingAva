const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('style.css');
const CircularDependencyPlugin = require('circular-dependency-plugin')

const config = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        use: 'babel-loader',
        test: /\.js$/,
      },
      {
        loader: extractCSS.extract({loader: 'css-loader'}),
        test: /\.css$/
      } ]
  },
  plugins: [
   extractCSS,
   new CircularDependencyPlugin({
      // exclude detection of files based on a RegExp
      exclude: /a\.js|node_modules/,
      // add errors to webpack instead of warnings
      failOnError: true
    })
  ]
};

module.exports = config;
