let HtmlWebpackPLugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let webpack = require('webpack');
let path = require('path');
let isProd = process.argv.indexOf('-p') !== -1;
let cssDev = ['style-loader', 'css-loader', 'sass-loader'];
let cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader', 'sass-loader'],
  publicPath: '/app'
});
let cssConfig = isProd ? cssProd : cssDev;

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss']
  },
  module: {
    rules: [{
      test: /\.css$/,
      include: /node_modules/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          }
        ]
      })
    }, {
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    }, {
      test: /\.(js|jsx)$/,
      include: [
        path.join(__dirname, 'src')
      ],
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react'],
        plugins: ['transform-runtime', 'lodash']
      }
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    port: 8080,
    stats: 'errors-only',
    open: true
  },
  plugins: [
    new HtmlWebpackPLugin({
      title: 'Formular Project',
      minify: {
        collapseWhitespaces: true
      },
      hash: true,
      filename: './index.html',
      template: './src/index.ejs'
    }),
    new ExtractTextPlugin({
      filename: 'app.css',
      disable: !isProd,
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};
