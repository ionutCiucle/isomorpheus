var path = require('path');
var webpack = require('webpack');

config = {
  devtool: '#inline-source-map',
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: [
        'babel-loader'
      ]
    }, {
      test: /\.(png|jpg|svg|mp3)$/,
      loader: 'file-loader'
    }, {
      test: /\.scss$/,
      loader: 'sass-loader'
    }, {
      test: /\.(otf)$/,
      loader: 'file?limit=65000&mimetype=application/octet-stream&client/assets/fonts/[name].[ext]'
    }]
  },
  plugins: [new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('DEV')
  })]
};

module.exports = config;


