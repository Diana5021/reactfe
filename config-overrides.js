const path = require('path')

module.exports = function override(config, env) {
  config.module.rules[2].oneOf[1].options.babelrc = true
  
  config.resolve.alias = {
    'assets': path.resolve(__dirname, './src/assets'),
    'pages': path.resolve(__dirname, './src/pages'),
    'cpts': path.resolve(__dirname, './src/components'),
    'store': path.resolve(__dirname, './src/store'),
    'utils': path.resolve(__dirname, './src/utils'),
    '@': path.resolve(__dirname, './src')
  }
  config.devServer = {
    historyApiFallback: true
  }
  return config;
};