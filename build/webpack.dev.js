const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const webpackBase = require('./webpack.base');

const webpackConfig = merge(webpackBase, {
  entry: path.join(__dirname, '../app/main.js'), // 已多次提及的唯一入口文件
  output: {
    path: path.join(__dirname, '../dist'), // 打包后的文件存放的地方
    filename: '[name]_[hash].js',
    publicPath: '/'
  },
  devServer: {
    static: path.join(__dirname, '../dist'),
    port: 2222,
    // 是否打开热模块更新.
    hot: true,
    // 启动后自动打开页面
    open: true,
    // 解决 bowserRouter 刷新的时候出现 can't get.
    historyApiFallback: true
  },
  mode: 'development',
  plugins: [
    // 页面能够局部更新, 不需要全部刷新.
    new webpack.HotModuleReplacementPlugin(),
  ]
});

module.exports = webpackConfig;
