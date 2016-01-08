/**
 * Created by jr1500 on 9/09/15.
 */

const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const Clean = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const pkg = require('./package.json');

const TARGET = process.env.npm_lifecycle_event;
const ROOT_PATH = path.resolve(__dirname);
const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
  buildDevelop: path.join(__dirname, 'build-develop'),
  test: path.join(__dirname, 'tests')
};
const APP_TITLE = 'Skills Builder Tool - Careers New Zealand';

process.env.BABEL_ENV = TARGET;

const common = {
  entry: PATHS.app,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: PATHS.app
      }
    ]
  }
};

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: '#eval-source-map',
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['react-hot', 'babel'],
          include: PATHS.app
        },
        {
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass'],
          include: PATHS.app
        },
        {
          test: /\.css$/,
          loaders: ['style', 'css'],
          include: PATHS.app
        },
        {
          test: /\.(png|jpg|gif)$/,
          loader: 'url?limit=25',
          include: PATHS.app
        },
        {
          test: /\.woff$/,
          loader: 'url?limit=1',
          include: PATHS.app
        },
        { test: /\.(ttf|eot|svg|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader',
          include: PATHS.app
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      watchOptions: {
        poll: 1000
      },
      stats: 'errors-only',
      // Parse host and port from env so this is easy to customize.
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlwebpackPlugin({
        title: APP_TITLE,
        template: './templates/index-webpackdevserver.tpl'
      }),
      new webpack.DefinePlugin({
        '__DEV__': JSON.stringify(JSON.parse('true'))
      }),
      new CopyWebpackPlugin([
        { from: './src/assets/images/favicon', to: './images/favicon' },
        { from: './src/styles/browser', to: './css/browser' },
        { from: './src/assets/ie8', to: './ie8' }
      ])
    ]
  });
}

if(TARGET === 'build') {
  module.exports = merge(common, {
    entry: {
      app: PATHS.app,
      vendor: Object.keys(pkg.dependencies)
    },
    output: {
      path: PATHS.build,
      filename: '[name].js?[chunkhash]'
    },
    devtool: '#source-map',
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['babel'],
          include: PATHS.app
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style', 'css!sass'),
          include: PATHS.app
        },
        {
          test: /\.css$/,
          loaders: ['style', 'css'],
          include: PATHS.app
        },
        {
          test: /\.(png|jpg|gif)$/,
          loaders: ['file-loader?name=images/[name].[ext]'],
          include: PATHS.app
        },
        {
          test: /\.woff$/,
          loaders: ['file-loader?name=fonts/[name].[ext]'],
          include: PATHS.app
        },
        { test: /\.(ttf|eot|svg|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader?name=fonts/[name].[ext]',
          include: PATHS.app
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
          'NODE_ENV': JSON.stringify('production')
        },
        '__DEV__': JSON.stringify(JSON.parse('false'))
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new HtmlwebpackPlugin({
        title: APP_TITLE,
        template: './templates/index-production.tpl'
      }),
      new CopyWebpackPlugin([
        { from: './src/assets/images/favicon', to: './images/favicon' },
        { from: './src/styles/browser', to: './css/browser' },
        { from: './src/assets/ie8', to: './ie8' }
      ])
    ]
  });
}

if(TARGET === 'develop') {
  module.exports = merge(common, {
    entry: {
      app: PATHS.app,
      vendor: Object.keys(pkg.dependencies)
    },
    output: {
      path: PATHS.buildDevelop,
      filename: '[name].js?[chunkhash]'
    },
    devtool: '#eval-source-map',
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['babel'],
          include: PATHS.app
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style', 'css!sass'),
          include: PATHS.app
        },
        {
          test: /\.css$/,
          loaders: ['style', 'css'],
          include: PATHS.app
        },
        {
          test: /\.(png|jpg|gif)$/,
          loaders: ['file-loader?name=images/[name].[ext]'],
          include: PATHS.app
        },
        {
          test: /\.woff$/,
          loaders: ['file-loader?name=fonts/[name].[ext]'],
          include: PATHS.app
        },
        { test: /\.(ttf|eot|svg|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader?name=fonts/[name].[ext]',
          include: PATHS.app
        }
      ]
    },
    plugins: [
      new Clean(['build-develop']),
      new ExtractTextPlugin('styles.css?[chunkhash]'),
      new webpack.optimize.CommonsChunkPlugin(
        'vendor',
        '[name].js?[chunkhash]'
      ),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        },
        '__DEV__': JSON.stringify(JSON.parse('true'))
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new HtmlwebpackPlugin({
        title: APP_TITLE,
        template: './templates/index-develop.tpl'
      }),
      new CopyWebpackPlugin([
        { from: './src/assets/images/favicon', to: './images/favicon' },
        { from: './src/styles/browser', to: './css/browser' },
        { from: './src/assets/ie8', to: './ie8' }
      ])
    ]
  });
}

if(TARGET === 'test' || TARGET === 'tdd') {
  module.exports = merge(common, {
    entry: {}, // karma will set this
    output: {}, // karma will set this
    devtool: 'inline-source-map',
    resolve: {
      alias: {
        'src': PATHS.app
      }
    },
    module: {
      preLoaders: [
        {
          test: /\.jsx?$/,
          loaders: ['isparta-instrumenter'],
          include: PATHS.app
        }
      ],
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['babel?cacheDirectory'],
          include: [PATHS.test, PATHS.app]
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({'__DEV__': JSON.stringify(JSON.parse('true'))})
    ]
  });
}