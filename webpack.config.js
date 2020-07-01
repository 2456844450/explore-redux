const path = require('path')


const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: './src/test.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'test',
      filename: 'index.html',
      template: 'public/index.html'
    })
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, 
    {
      test: /\.(svg|png|jpg|gif)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[hash].[ext]",
          outputPath: "assets/begin"
        }
      }
    },
    {
      test: /\.(htm|html)$/i,
      use: ['html-loader']
    },
    {
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }]
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
  }

}