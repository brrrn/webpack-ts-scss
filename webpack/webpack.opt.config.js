
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {

  output: {
      filename: 'scripts/[name].js',
      chunkFilename: 'scripts/[name].js',
      path: path.join(__dirname, '..', '/assets'),
      publicPath: '/assets/'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          ecma: 5,
          mangle: {
            keep_fnames: true,
          },
          sourceMap: true
        },
      })
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: './styles/styles.css',
      chunkFilename: './styles/[id].css'
    })
  ],
}
