var webpack = require('webpack');
var webpackBase = require('./webpack.config.base');

// Reset our config so we're not altering other versions of it.
var config = webpackBase(false);

// Don't emit assets that have errors in them.
config.plugins.push(new webpack.NoErrorsPlugin());
config.plugins.push(new webpack.DefinePlugin({
  'process.env': { 'NODE_ENV': '"production"' },
}));

module.exports = config;
