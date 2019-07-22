const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('../webpack.config');
const optimizationConfig = require('./webpack.opt.config');

const productionConfiguration = function (env) {
  return {
    devtool: 'cheap-module-source-map',
  };
}

module.exports = merge.smart(baseConfig, optimizationConfig, productionConfiguration);
