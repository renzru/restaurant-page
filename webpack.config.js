const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist'
  },
  optimization: {
    runtimeChunk: 'single'
  },
  entry: {
    index: './src/index.ts'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  module: {
    rules: [{ // CSS
      test: /\.css$/i,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
}
