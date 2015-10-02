/**
 * Created by jr1500 on 9/09/15.
 */

import fs from 'fs';
import React from 'react';
import path from 'path';
import webpack from 'webpack';
import HtmlwebpackPlugin from 'html-webpack-plugin';
import merge from 'webpack-merge';
import Clean from 'clean-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

//import App from './app/components/App/App.jsx';
import pkg from './package.json';

const TARGET = process.env.npm_lifecycle_event;
const ROOT_PATH = path.resolve(__dirname);
const APP_TITLE = 'Skills Transition Tool - Careers New Zealand';

const common = {
  entry: path.resolve(ROOT_PATH, 'app'),
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: path.resolve(ROOT_PATH, 'app')
      }
    ]
  }
};

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['react-hot', 'babel'],
          include: path.resolve(ROOT_PATH, 'app')
        },
        {
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass'],
          include: path.resolve(ROOT_PATH, 'app')
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'url?limit=25000',
          include: path.resolve(ROOT_PATH, 'app')
        },
        {
          test: /\.woff$/,
          loader: 'url?limit=100000',
          include: path.resolve(ROOT_PATH, 'app')
        },
        { test: /\.(ttf|eot|svg|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "file-loader",
          include: path.resolve(ROOT_PATH, 'app')
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlwebpackPlugin({
        title: APP_TITLE
      })
    ]
  });
}

if(TARGET === 'build') {
  module.exports = merge(common, {
    entry: {
      app: path.resolve(ROOT_PATH, 'app'),
      vendor: Object.keys(pkg.dependencies)
    },
    output: {
      path: path.resolve(ROOT_PATH, 'build'),
      filename: '[name].js?[chunkhash]'
    },
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['babel'],
          include: path.resolve(ROOT_PATH, 'app')
        },
        {
          test: /\.scss$/,
          //loader: ExtractTextPlugin.extract('style', 'css', 'sass'),
          loaders: ['style', 'css', 'sass'],
          include: path.resolve(ROOT_PATH, 'app')
        },
        {
          test: /\.(png|jpg|gif)$/,
          loader: ['url?limit=25000', 'file-loader?name=fonts/[name].[ext]'],
        },
        {
          test: /\.woff$/,
          loaders: ['url?limit=100000', 'file-loader?name=fonts/[name].[ext]'],
          include: path.resolve(ROOT_PATH, 'app')
        },
        { test: /\.(ttf|eot|svg|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "file-loader?name=fonts/[name].[ext]",
          include: path.resolve(ROOT_PATH, 'app')
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('styles.css?[chunkhash]'),
      new Clean(['build']),
      new webpack.optimize.CommonsChunkPlugin(
        'vendor',
        '[name].js?[chunkhash]'
      ),
      new webpack.DefinePlugin({
        'process.env': {
          //Reduce React lib size
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new HtmlwebpackPlugin({
        title: APP_TITLE,
        template: path.join(__dirname, 'templates/index.tpl')
      })
    ]
  });
}

