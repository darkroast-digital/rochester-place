var fs = require('fs');
var gracefulFs = require('graceful-fs');
gracefulFs.gracefulify(fs);
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var WebpackNotifierPlugin = require('webpack-notifier');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var inProduction = process.env.NODE_ENV === 'production';

var config = require('./config');

module.exports = {
    entry: {
      app: [
        './src/assets/js/main.js',
        './src/assets/scss/main.scss'
      ]
    },
    output: {
        path: path.resolve(__dirname, './dist/resources/assets/'),
        filename: 'js/[name].js',
        publicPath: '../'
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.common.js'
      }
    },
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/,
            use: ExtractTextPlugin.extract({
              use: [
                {
                  loader: 'css-loader',
                  options: {
                    url: false
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    plugins: function () {
                      return [
                        require('postcss-ant'),
                        require('autoprefixer')
                      ];
                    }
                  }
                },
                {
                  loader: 'sass-loader'
                }
              ],
              fallback: 'style-loader'
            })
          },
          {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
              loaders: {
                js: 'babel-loader',
                scss: 'style-loader!css-loader!sass-loader'
              }
            }
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          },
        ]
    },
    plugins: [
      new ExtractTextPlugin('css/[name].css'),

      new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          Vue: "vue",
          anime: "animejs"
      }),

      new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        proxy: '127.0.0.1:8000',
        files: config.watch,
      }),

      new webpack.LoaderOptionsPlugin({
        minimize: inProduction
      })
    ]
};

if (inProduction) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        })  
    )
}