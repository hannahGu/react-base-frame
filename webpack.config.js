var webpack = require('webpack');
module.exports = {
  entry: './index.js',

  output: {
    path: 'dist',
    filename: 'bundle.js',
    // publicPath: '/',
  },

  plugins:
    process.env.NODE_ENV === 'production'
      ? [
          new webpack.optimize.DedupePlugin(),
          new webpack.optimize.OccurrenceOrderPlugin(),
          new webpack.optimize.UglifyJsPlugin(),
        ]
      : [],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'less-loader',
          },
        ],
      },
    ],
  },
};
