const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
// const webpack = require('webpack')
// Notice me! please use image-webpack-plugin to minify images' size.

module.exports = {
  resolve: {
    alias: {
      // react: path.resolve(__dirname, '../node_modules/react/umd/react.production.min.js'),
      // 'react-dom': path.resolve(__dirname, '../node_modules/react-dom/umd/react-dom.production.min.js'),
      '@': path.resolve(__dirname, '../app')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'thread-loader',
            options: {
              workers: 3
            }
          },
          'babel-loader',
          'eslint-loader'
        ],
        exclude: path.join(__dirname, '../node_modules')
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        use: 'file-loader'
        // options: {
        //   name: 'img/[name][hash:8].[ext]'
        // }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/[name]_[contenthash:8].css'
    }),
    new FriendlyErrorsWebpackPlugin(),
    new HardSourceWebpackPlugin()
    // new webpack.DllReferencePlugin({ // 引入这个插件, 将我们经常打包的东西引入进来, 优化项目体积和构建速度.
    //   // eslint-disable-next-line global-require
    //   manifest: require('../static/library.json')
    // })
  ]
}
