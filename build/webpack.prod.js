const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
// const cssnano = require('cssnano');
const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin');
const merge = require('webpack-merge');
const webpackBase = require('./webpack.base.js');

const webpackConfig = merge(webpackBase, {
  entry: path.join(__dirname, '../app/main.js'),
  output: {
    path: path.join(__dirname, '../dist'),
    filename: './js/[name]_[hash:8].js'
    // filename: '/js/bundle.js'
  },
  stats: 'errors-only',
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true
      })
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new OptimizeCssAssetsWebpackPlugin({ // css 压缩导致打包报错 exit code: 1.
    //   assetNameRegExp: /\.css$/g,
    //   cssProcessor: cssnano
    // }),
    new CleanWebpackPlugin(),
    new SpeedMeasureWebpackPlugin()
  ]
});

module.exports = webpackConfig;
