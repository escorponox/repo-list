const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const outputDir = 'public';

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, outputDir),
    publicPath: '/'
  },
  devtool: 'eval-source-map',
  plugins: [
    new CleanWebpackPlugin({ verbose: true }),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: './index.html'
    })
  ],
  devServer: {
    open: true,
    watchContentBase: true,
    port: 43127,
    historyApiFallback: true,
    publicPath: '/'
  }
});
