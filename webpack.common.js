const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: ['@babel/polyfill', './index.jsx'],
  devServer: {
    port: 3001,
    contentBase: path.join(__dirname, './'),
    publicPath: './',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: './',
  },
  optimization: {
    splitChunks: { chunks: 'all' },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
          'eslint-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        exclude: /fonts/,
        use: [{
          loader: 'file-loader',
          options: { name: '[path][name].[ext]' },
        }],
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/i,
        exclude: /images/,
        use: [{
          loader: 'file-loader',
          options: { name: '[path][name].[ext]' },
        }],
      },
    ],
  },
};
