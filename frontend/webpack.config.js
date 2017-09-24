
module.exports = {
  // the main entry of our app
  entry: ['./src/index.js', './src/auth/index.js'],
  // output configuration
  output: {
    path: __dirname + '/build/',
    publicPath: 'build/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
    ]
  },
  babel: {
    presets: ['es2015']
  }
}
