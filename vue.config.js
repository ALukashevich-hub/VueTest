const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  devServer: {
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
  chainWebpack(config) {
    config.plugins.delete('prefetch');
    config.plugin('CompressionPlugin').use(CompressionPlugin);
  },
};
