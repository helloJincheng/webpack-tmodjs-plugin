// var path = require('path');

// // loader 版本
// module.exports = {
//   entry: path.resolve(__dirname, './case1/index.js'),
//   output: {
//     path: path.resolve(__dirname, './case1/dist'),
//     filename: '[name].bundle.js'
//   }
// }

// plugin 版本

var path = require('path');
var TmodPlugin = require('../src/plugin');

module.exports = {

  entry: path.resolve(__dirname, './case1/index.js'),
  output: {
    path: path.resolve(__dirname, './case1/dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new TmodPlugin({
      base: './case1',
      output: './case1/build',
      type: 'amd'
    })
  ]

}

