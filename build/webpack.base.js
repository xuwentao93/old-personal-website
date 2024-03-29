const path = require('path');
// eslint-disable-next-line import/no-unresolved
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MyPlugin = require('../plugin');
// const HappyPack = require('happypack');
// const TerserPlugin = require('terser-webpack-plugin');

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
        // 当匹配到第一个, webpack 并不会停止遍历, 比如 js 第一个满足了,
        // 会找第二个是不是还有需要的 loader, 加上 oneOf 就不会这样.
        oneOf: [
          {
            test: /\.(js|jsx)$/,
            use: [
              'babel-loader',
              'eslint-loader'
              // ['happypack/loader?id=babels']
            ],
            exclude: path.join(__dirname, '../node_modules')
          },
          {
            // 重要!这里说明解析文件的后缀名不是完全的, 让 babel 能无视 .js 等后缀
            // 而防止 babel 报错.
            test: /\.m?js/,
            resolve: {
              fullySpecified: false
            }
          },
          {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader'
            ]
          },
          {
            test: /\.less$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'less-loader'
            ]
          },
          {
            test: /\.(jpg|png|gif|jpeg)$/,
            use: 'file-loader'
            // options: {
            // name: 'img/[name][hash:8].[ext]'
            // }
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: 'file-loader'
          },
          {
            test: /\.md$/,
            use: path.resolve(__dirname, '../loader')
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/[name]_[contenthash:8].css'
    }),
    new FriendlyErrorsWebpackPlugin(),
    // // new HardSourceWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../app/index.html'),
      filename: 'index.html',
      inject: true,
      favicon: './bighead.ico',
      // chunks: ['vendors'],
      minify: {
        html5: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: false
      }
    }),
    new MyPlugin()
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
    // splitChunks: {
    //   // 所有公共代码都打包, 默认只打包异步.
    //   chunks: 'all',
    //   // 只有大于该数值才会被提取, 默认 20000(byte).
    //   minSize: 1024,
    //   name: true,
    //   cacheGroups: {
    //     react: {
    //       test: /(react|react-dom|redux|react-router|react-router-dom|react-redux)/,
    //       chunks: 'all',
    //       // 相同条件下, 先按哪个优先级打包.
    //       priority: 1
    //     },
    //     vendors: {
    //       test: /[\\/]node_modules[\\/]/,
    //       priority: -10
    //     },
    //     default: {
    //       priority: -20
    //     }
    //   }
    // }
    // minimize: true,
    // minimizer: [new TerserPlugin({
    //   parallel: true,
    //   cache: true
    // })]
  }
};
