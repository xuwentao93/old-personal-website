const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HappyPack = require('happypack');
// const TerserPlugin = require('terser-webpack-plugin');
// const webpack = require('webpack')
// Notice me! please use image-webpack-plugin to minify images' size.

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../app/')
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
          // ['happypack/loader?id=babels']
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
    // new HardSourceWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../app/index.html'),
      filename: 'index.html',
      inject: true,
      favicon: './bighead.ico',
      // chunks: ['vendors'],
      minify: {
        html5: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyCSS: true,
        minifyJS: true,
        removeComments: false
      }
    })
    // new HappyPack({
    //   id: 'babel',
    //   loaders: ['babel-loader?cacheDirectory', 'eslint-loader']
    // })
    // new webpack.DllReferencePlugin({ // 引入这个插件, 将我们经常打包的东西引入进来, 优化项目体积和构建速度.
    //   // eslint-disable-next-line global-require
    //   manifest: require('../static/library.json')
    // })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 10000,
      // minChunks: 2,
      name: true,
      cacheGroups: {
        react: {
          test: /(react|react-dom|redux|react-router|react-router-dom|react-redux)/,
          chunks: 'all',
          priority: 1
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          priority: -20
        }
      }
    }
    // minimize: true,
    // minimizer: [new TerserPlugin({
    //   parallel: true,
    //   cache: true
    // })]
  }
};
