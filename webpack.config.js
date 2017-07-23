const OUT_DIR = 'dist';
const path = require('path');

 module.exports = {
     entry: './src/index.js',
     output: {
         path: path.resolve(__dirname, OUT_DIR),
         filename: 'app.bundle.js',
     },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /(node_modules|bower_components)/,
             loader: 'babel-loader',
             options: {
               cacheDirectory: true,
               presets : ["env"],
               plugins : [require("babel-plugin-transform-runtime")]
             }
         }]
     }
 }
