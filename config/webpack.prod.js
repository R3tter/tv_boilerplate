const path = require('path');
const webpack = require('webpack');

const { src, dist } = require('./paths').main;

const WebpackAliases = require('./paths').aliases;

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const extractSass = new MiniCssExtractPlugin({
  filename: '[name].[hash:6].css'
});


const launchConfig = envs => ({
  entry: src,
  output: {
    publicPath: '/',
    path: dist,
    filename: `bundle.[hash:6].js`
  },
  optimization: {
    minimize: false,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000,
            name: 'images/[name].[hash:6].[ext]'
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[hash:base64:6]',
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(eot|eot\#iefix|ttf|woff|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[hash:6].[ext]'
          }
        }
      },
      {
        test: /\.pdf$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'pdf/[name].[ext]'
          }
        }
      }
    ]
  },
  resolve: {
    alias: WebpackAliases,
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'App title',
      favicon: path.join(src, 'favicon.ico'),
      template: path.join(src, 'index.ejs'),
      inject: 'body',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      hash: true,
      version: require('../package.json').version,
    }),
    extractSass,
    new webpack.DefinePlugin({
      DEV: JSON.stringify(false),
      PROD: JSON.stringify(true)
    })
  ]
});

module.exports = [launchConfig()];
