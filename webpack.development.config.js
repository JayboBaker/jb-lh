var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8080/', // Specify the local server port
    'webpack/hot/only-dev-server', // Enable hot reloading
    './src/index' // This is where Webpack will be looking for the entry index.js file
  ],
  output: {
    path: path.resolve(__dirname, 'dist'), // This is used to specify folder for producion bundle. Will not be used here, but it's a good practice to have it
    filename: 'bundle.js', // Filename for production bundle
    library: 'LH'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
