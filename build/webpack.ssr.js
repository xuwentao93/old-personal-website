const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');
const merge = require('webpack-merge');
const webpackBase = require('./webpack.base');

module.exports = merge(webpackBase, {
  entry: path.join(__dirname, '../app/main-server.js'),
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name]-server.js',
    libraryTarget: 'umd'
  },
  devServer: {
    contentBase: '../dist',
    port: 3333
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  mode: 'production',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OptimizeCssAssetsWebpackPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssnano
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../app/index.html'),
      filename: 'index.html',
      chunks: ['main'],
      inject: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyCSS: true,
        minifyJS: true,
        removeComments: false
      }
    }),
    new CleanWebpackPlugin()
  ]
});
