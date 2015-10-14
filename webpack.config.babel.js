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

import pkg from './package.json';

const TARGET = process.env.npm_lifecycle_event;
const ROOT_PATH = path.resolve(__dirname);
const APP_TITLE = 'Skills Transition Tool - Careers New Zealand';

const common = {
  entry: path.resolve(ROOT_PATH, 'src'),
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
        include: path.resolve(ROOT_PATH, 'src')
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
          include: path.resolve(ROOT_PATH, 'src')
        },
        {
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass'],
          include: path.resolve(ROOT_PATH, 'src')
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'url?limit=25',
          include: path.resolve(ROOT_PATH, 'src')
        },
        {
          test: /\.woff$/,
          loader: 'url?limit=1',
          include: path.resolve(ROOT_PATH, 'src')
        },
        { test: /\.(ttf|eot|svg|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader',
          include: path.resolve(ROOT_PATH, 'src')
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
        title: APP_TITLE,
        template: './templates/index-develop.tpl'
      })
    ]
  });
}

if(TARGET === 'build') {
  module.exports = merge(common, {
    entry: {
      app: path.resolve(ROOT_PATH, 'src'),
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
          include: path.resolve(ROOT_PATH, 'src')
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style', 'css!sass'),
          include: path.resolve(ROOT_PATH, 'src')
        },
        {
          test: /\.(png|jpg)$/,
          loaders: ['file-loader?name=images/[name].[ext]'],
          include: path.resolve(ROOT_PATH, 'src')
        },
        {
          test: /\.woff$/,
          loaders: ['file-loader?name=fonts/[name].[ext]'],
          include: path.resolve(ROOT_PATH, 'src')
        },
        { test: /\.(ttf|eot|svg|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader?name=fonts/[name].[ext]',
          include: path.resolve(ROOT_PATH, 'src')
        }
      ]
    },
    plugins: [
      new Clean(['build']),
      new ExtractTextPlugin('styles.css?[chunkhash]'),
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
        template: './templates/index-production.tpl'
      })
    ]
  });
}
