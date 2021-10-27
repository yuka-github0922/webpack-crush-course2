const path = require('path')

// 絶対パスを生成するメソッド
const outputPath = path.resolve(__dirname, 'dist')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: outputPath
  },
  devServer: {
    static: outputPath
  }
}