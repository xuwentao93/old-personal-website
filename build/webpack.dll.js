const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    library: [
      'react',
      'react-dom',
      'react-router',
      'react-router-dom',
      'redux',
      'react-redux',
      'less'
    ]
  },
  output: {
    path: path.join(__dirname, '../static'),
    filename: '[name]_[chunkhash].js',
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: path.join(__dirname, '../static/[name].json')
    })
  ]
}
