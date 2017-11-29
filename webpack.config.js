var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: './index.js',

  output: {
    path: 'dist',
    filename: 'index.js',
    publicPath: '/dist/',
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('index.css', { allChunks: true }),

  ],
  module: {

    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          plugins: [
            ["import", { "libraryName": "antd-mobile","style": "css" }]
          ],
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!less-loader'
        )
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader?name=images/.[name].[ext]'
      },
    ],
  },
  //source map show
  devtool: 'cheap-module-eval-source-map',
};
