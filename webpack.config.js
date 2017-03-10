const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    // 'react-hot-loader/patch',

    'webpack-dev-server/client?http://localhost:8080',

    './index.js'
  ],
  output: {
    filename: 'bundle.js',
    // the output bundle

    path: resolve(__dirname, 'dist'),

    publicPath: '/'
    // necessary for HMR to know where to load the hot update chunks
  },

  context: resolve(__dirname, 'src'),

  devtool: 'inline-source-map',

  devServer: {
    hot: false,

    poll: true,

    contentBase: resolve(__dirname, 'dist'),

    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
      use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
              {
                  loader: 'css-loader',
                  options: {
                      root: '.',
                      modules: true,
                      localIdentName: 'bs__[local]--[hash:base64:5]'
                  }
              },
              {
                  loader: 'postcss-loader',
                  options: {
                      plugins: function () {
                          return [
                              require('precss'),
                              require('autoprefixer')
                          ];
                      }
                  }
              },
          ],
      })
      },
      {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          loader: 'url-loader',
          options: {
              limit: 10000
          }
      },
    ],
  },

  plugins: [
      new webpack.LoaderOptionsPlugin({
          options: {
              context: resolve(__dirname, 'dist'),
              postcss: [
                  // require('postcss-cssnext'),
                  require('autoprefixer')
              ]
          }
      }),
      new ExtractTextPlugin("styles.css"),
  ],
};

