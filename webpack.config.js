var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
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
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'app.js'
  },
  eslint: {
    emitError: true,
    failOnError: true
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
