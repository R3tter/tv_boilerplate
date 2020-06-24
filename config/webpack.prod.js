const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { src, dist, icons } = require('./paths').main;

const WebpackAliases = require('./paths').aliases;

const extractSass = new MiniCssExtractPlugin({
  filename: '[name].[hash:6].css'
});

module.exports = (env) => ({
  entry: src,
  output: {
    publicPath: env?.platform ? '' : '/',
    path: dist,
    filename: 'bundle.[hash:6].js'
  },
  optimization: {
    minimize: true
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|svg)$/,
        exclude: icons,
        use: {
          loader: 'url-loader',
          options: {
            limit: 20000,
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
          'css-loader'
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
      },
      {
        test: /\.svg$/,
        include: [icons],
        use: ['@svgr/webpack']
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
      // favicon: path.join(src, 'favicon.ico'),
      template: path.join(src, 'index.ejs'),
      inject: 'body',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      hash: true,
      version: require('../package.json').version
    }),
    extractSass,
    new webpack.DefinePlugin({
      DEV: JSON.stringify(false),
      PROD: JSON.stringify(true),
      VERSION: JSON.stringify(require('../package.json').version)
    }),
    ...(env?.platform
      ? [
          new CopyPlugin({
            patterns: [
              {
                from: path.join(__dirname, `./${env?.platform}`),
                to: dist
              }
            ]
          })
        ]
      : [])
  ]
});
