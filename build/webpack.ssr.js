import path from 'path';
import nodeExternals from 'webpack-node-externals';
import CleanWebpackPlugin from 'clean-webpack-plugin';

module.exports = {
  target: 'node',
  mode: 'development', // 开发模式
  entry: path.join(__dirname, '../app/main-ssr.js'), // 入口
  output: { // 打包出口
    filename: 'bundle.js', // 打包后的文件名
    path: path.resolve(__dirname, '../dist') // 存放到根目录的build文件夹
  },
  externals: [nodeExternals()], // 保持node中require的引用方式
  module: {
    rules: [{ // 打包规则
      test: /\.js?$/, // 对所有js文件进行打包
      loader: 'babel-loader', // 使用babel-loader进行打包
      exclude: /node_modules/ // 不打包node_modules中的js文件
      // options: {
      //   presets: ['react', 'stage-0', ['env', {
      //     // loader时额外的打包规则,对react,JSX，ES6进行转换
      //   }]]
      // }
    }]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
};
