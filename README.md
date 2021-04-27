client side webpack setup -
If you're upgrading from webpack 4 to webpack 5, here are a few notes:

the webpack-dev-server command is now webpack-serve
file-loader, raw-loader and url-loader are not necessary, you can use built in asset modules
Node polyfills are no longer available, so if you get an error for stream, for example, you would add the stream-browserify package as a dependency and add { stream: 'stream-browserify' } to the alias property in your webpack config.

1. const path = require('path')

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
}