const webpackConfig = require('../webpack.config');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = Object.assign(webpackConfig, {

    devtool: 'source-map',
    output: {
        filename: "scripts/[name].js",
        chunkFilename: 'scripts/[name].js',
        path: path.join(__dirname, '..', '/assets'),
        publicPath: '/assets/'
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: './styles/styles.css',
        chunkFilename: './styles/[id].css'
      })
    ],
    devServer: {
        contentBase: './',
        historyApiFallback: true,
        publicPath: '/assets/'
    }
});
