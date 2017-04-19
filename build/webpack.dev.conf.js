/* eslint-disable import/no-extraneous-dependencies, no-var, vars-on-top */

var config = require('../config');
var webpack = require('webpack');
var merge = require('webpack-merge');
var utils = require('./utils');
var baseWebpackConfig = require('./webpack.base.conf');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FriendlyErrors = require('friendly-errors-webpack-plugin');

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach((name) => {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name]);
});

// var ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
// var path = require('path');
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
 

module.exports = merge(baseWebpackConfig, {
  module: {
    loaders: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap }),
  },
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  // output: {
  //   path: path.resolve(__dirname, '../src'),
  //   // filename: '[name]-[hash].js',
  // },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env,
    }),
    // new ServiceWorkerWebpackPlugin({
    //   entry: 'src/sw.js'
    // }),
    new SWPrecacheWebpackPlugin(
      {
        cacheId: 'phonegap-todos',
        filename: 'my-service-worker.js',
        maximumFileSizeToCacheInBytes: 4194304,
        minify: true,
        runtimeCaching: [{
          handler: 'cacheFirst',
          urlPattern: /[.]mp3$/,
        }],
      }
    ),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
    }),
    new FriendlyErrors(),
  ],
});
