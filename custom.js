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
  devServer:{
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    port:4500,
    open:true,
    hot:true,
    compress:true,
    historyApiFallback:true
  },
  module : {
    rules: [
       {
        test:/\.scss$/,
        use:['style-loader','css-loader','sass-loader']
       }
    ]
  }
}