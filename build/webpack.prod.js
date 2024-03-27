const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin');
const { merge } = require('webpack-merge');
const glob = require('glob');
const webpackBase = require('./webpack.base.js');

// 配置组件多入口.很强!
const components = glob.sync(path.join(__dirname, '../app/components/*/')).reduce((prev, curr) => ({
  [`${path.basename(curr)}`]: curr,
  ...prev
}), {});

const smp = new SpeedMeasureWebpackPlugin({ disable: true });

const webpackConfig = merge(webpackBase, smp.wrap({
  entry: {
    ...components
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: './js/[name].js'
  },
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
    new CleanWebpackPlugin()
  ]
}));

module.exports = webpackConfig;
