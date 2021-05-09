const path = require('path');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = {
  mode: process.env.NODE_ENV,

  output: {
    filename: 'js/[name].js',
    path: path.resolve('./public'),
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@constants': path.resolve(__dirname, '../src/constants'),
      '@forms': path.resolve(__dirname, '../src/forms'),
      '@helpers': path.resolve(__dirname, '../src/helpers'),
      '@hooks': path.resolve(__dirname, '../src/hooks'),
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@redux': path.resolve(__dirname, '../src/redux'),
    },
  },

  optimization: {
    minimize: !isDevMod,
    moduleIds: isDevMod ? 'named' : 'deterministic',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|svg|jpe?g|gif|ico)$/i,
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
