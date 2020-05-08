const path = require('path');
const webpack = require('webpack');

const { src, dist, icons } = require('./paths').main;

const WebpackAliases = require('./paths').aliases;

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const extractSass = new MiniCssExtractPlugin({
  filename: '[name].[hash:6].css'
});

const svgoPlugins = [
  { removeTitle: true },
  {
    removeDesc: {
      removeAny: true
    }
  },
  { collapseGroups: true },
  { removeStyleElement: true }
];

const launchConfig = () => ({
  entry: src,
  output: {
    publicPath: '/',
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
              localIdentName: '[hash:base64:6]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, './postcss.config.js')
              }
            }
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
      },
      {
        test: /\.svg$/,
        include: [icons],
        use: [
          'svg-sprite-loader',
          {
            loader: 'svgo-loader',
            options: {
              plugins: svgoPlugins.concat(
                {
                  convertColors: {
                    currentColor: true
                  }
                },
                {
                  cleanupIDs: {
                    remove: true,
                    minify: false
                  }
                }
              )
            }
          }
        ]
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
      PROD: JSON.stringify(true)
    })
  ]
});

module.exports = [launchConfig()];
