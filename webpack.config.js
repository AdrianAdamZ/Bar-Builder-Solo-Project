const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'client/dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: {
          loader: 'file-loader',
        },
      }
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './client/index.html',
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'client/dist'),
    compress: true,
    port: 8080,
    open: true,
    historyApiFallback: true,
  },
};