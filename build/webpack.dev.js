const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const merge = require('webpack-merge')
const OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin')
const webpackBase = require('./webpack.base')

const webpackConfig = merge(webpackBase, {
  entry: path.join(__dirname, '../app/main.js'), // 已多次提及的唯一入口文件
  output: {
    path: path.join(__dirname, '../dist'), // 打包后的文件存放的地方
    filename: '[name]_[hash].js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: '../dist',
    port: 2222,
    hot: true,
    stats: 'errors-only'
  },
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../app/index.html'),
      filename: 'index.html',
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
    new OpenBrowserWebpackPlugin({ url: 'http://localhost:2222' })
  ]
})

module.exports = webpackConfig
