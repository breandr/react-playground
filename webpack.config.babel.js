const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');
const TARGET = process.env.npm_lifecycle_event;
// const NODE_ENV = process.env.NODE_ENV || 'development';

let config = {
  entry: SRC_PATH,
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel?stage=0'
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass!autoprefixer?browsers=last 2 versions'
    }, {
      test: /\.(png|jpe?g|gif|svg)$/,
      loader: 'url?limit=8192'
    }, {
      test: /\.woff$/,
      loader: 'url?limit=100000'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  output: {
    path: BUILD_PATH,
    publicPath: '/',
    filename: 'app.js'
  },
  eslint: {
    emitError: true,
    failOnError: true,
    fix: true
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new HtmlwebpackPlugin({
      title: 'My App',
      template: path.resolve(SRC_PATH, 'index.html'),
      inject: 'body',
      favicon: path.resolve(SRC_PATH, 'favicon.ico'),
      googleAnalyticsId: 'XXXXXX-XX'
    })
  ]
};

switch (TARGET) {
case 'dev':
  Object.assign(config, {
    devServer: {
      contentBase: BUILD_PATH,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      colors: true
    },
    plugins: [
      ...config.plugins,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]
  });
  break;
case 'prod':
case 'stats':
default:
  Object.assign(config, {
    devtool: 'source-map',
    plugins: [
      ...config.plugins,
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  });
  break;
}

export default config;
