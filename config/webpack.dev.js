const path = require('path');
const webpack = require('webpack');

const { src, build } = require('./paths').main;

const WebpackAliases = require('./paths').aliases;

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = envs => ({
  entry: {
    src
  },
  output: {
    publicPath: '/',
    path: build,
    filename: `bundle.[hash:6].js`
  },
  devtool: 'cheap-module-source-map',
  modules: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'images/[name].[hash:6].[ext]'
          }
        }
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
        include: [pdf],
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
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', 'jpg']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'App title',
      favicon: path.join(src, 'favicon.ico'),
      template: path.join(src, 'index.html'),
      inject: 'body',
      hash: true
    }),
    new webpack.DefinePlugin({
      DEV: JSON.stringify(true),
      PROD: JSON.stringify(false),
      PUBLIC: JSON.stringify(envs.PUBLIC),
      ADMIN: JSON.stringify(envs.ADMIN)
    }),
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
})