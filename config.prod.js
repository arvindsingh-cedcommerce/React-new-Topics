const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    bundle1: path.resolve(__dirname, 'src/index2.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}