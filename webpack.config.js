const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    './src/head.js',
  	'./src/head-teacher.js',
    './src/main.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}