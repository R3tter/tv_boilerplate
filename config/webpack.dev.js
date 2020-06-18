const path = require('path');
const webpack = require('webpack');

const { src, build } = require('./paths').main;

const WebpackAliases = require('./paths').aliases;

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => ({
  entry: {
    src
  },
  output: {
    publicPath: '/',
    path: build,
    filename: 'bundle.[hash:6].js'
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|svg)$/,
        exclude: WebpackAliases.icons,
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
          { loader: 'style-loader' },
          'css-loader'
        ]
      },
      {
        test: /\.(eot|eot#iefix|ttf|woff|otf)$/,
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
        include: [WebpackAliases.icons],
        use: ['@svgr/webpack']
      }
    ]
  },
  resolve: {
    alias: WebpackAliases,
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', 'jpg']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'App title',
      // favicon: path.join(src, 'favicon.ico'),
      template: path.join(src, 'index.ejs'),
      inject: 'body',
      hash: true
    }),
    new webpack.DefinePlugin({
      DEV: JSON.stringify(true),
      PROD: JSON.stringify(false),
      VERSION: JSON.stringify(require('../package.json').version)
    })
  ],
  devServer: {
    contentBase: build,
    port: 8080,
    compress: false,
    hot: true,
    stats: 'errors-only',
    open: false,
    clientLogLevel: 'none',
    historyApiFallback: {
      disableDotRule: true
    },
    disableHostCheck: true
  }
});
