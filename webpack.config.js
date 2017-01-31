module.exports = {
  entry: {
    index: './src/index.js',
    'reset-styles': './src/reset-styles.js'
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].js'
  }
};
