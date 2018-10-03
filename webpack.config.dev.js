const merge = require('webpack-merge');
const common = require('./webpack.config.js');

const webpackDevConfig = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map'
});

module.exports = webpackDevConfig;
