const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Is the current build a development build
const IS_DEV = (process.env.NODE_ENV === 'dev');

const dirNode = 'node_modules';
const dirApp = path.join(__dirname, 'app');

const pluginData = [
  new webpack.DefinePlugin({
      IS_DEV: IS_DEV
  })
];


/**
 * Webpack Configuration
 */
module.exports = {
    entry: {
        app: path.join(dirApp, '/scripts/app.ts')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json','scss'],
        modules: [
            dirNode,
            dirApp
        ]
    },
    plugins: pluginData,
    watch: IS_DEV,
    module: {
      rules: [
        // TS
        {
          test: /\.(ts|tsx)$/,
          loader: 'ts-loader'
        },
        // CSS / SASS
        {
          test: /\.(scss|css)$/,
          use: [
            // 'style-loader',
            'css-hot-loader',
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: IS_DEV
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: IS_DEV,
                includePaths: [
                  dirApp
                ]
              }
            }
          ]
        }
      ]
    }
};
