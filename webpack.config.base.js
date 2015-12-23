var process = require('process');
var webpack = require('webpack');
var path = require('path');

var generateBase = function generateBase(optimize) {
  if (optimize !== true) { optimize = false; }

  var config = {
    cache: true,
    entry: {
      app: ['./app/client/index.js'],
      vendor: [
        'react',
        'react-dom',
        'react-router',
        'history',
        'redux',
        'react-redux',
        'babel-polyfill',
        'immutable',
      ],
    },
    output: {
      path: path.resolve(__dirname, 'public_html'),
      filename: 'app.js',
      publicPath:"/",
    },
    resolve: {
      alias: {},
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
    ],
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          loaders: ['babel'],
        },
      ],
      noParse: [],
    },
  }

  return config;
}

module.exports = generateBase;
