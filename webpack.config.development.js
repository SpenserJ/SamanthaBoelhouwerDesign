var webpack = require('webpack');
var path = require('path');

var webpackBase = require('./webpack.config.base');
var node_modules = path.resolve(__dirname, 'node_modules');

// Reset our config so we're not altering other versions of it.
var config = webpackBase();

// Enable eval source maps with line and colum numbers.
config.devtool = 'eval-source-map';

// Enable React hot module replacement.
config.entry.app.unshift(
  'webpack-dev-server/client?http://0.0.0.0:3000',
  'webpack/hot/dev-server'
);
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.plugins.push(new webpack.DefinePlugin({
  'process.env': { 'NODE_ENV': '"development"' },
}));
config.module.loaders[0].loaders = ['react-hot-loader'].concat(config.module.loaders[0].loaders);

module.exports = config;
