const OUT_DIR = 'dist';
const path = require('path');
let CopyWebpackPlugin = require('copy-webpack-plugin');

const copyOptions = [{from : "resources/assets/"}];

 module.exports = {
     entry: './src/index.js',
     output: {
         path: path.resolve(__dirname, OUT_DIR),
         filename: 'app.bundle.js',
     },
     plugins: [
       new CopyWebpackPlugin(copyOptions),
     ],
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /(node_modules|bower_components|resources)/,
             loader: 'babel-loader',
             options: {
               cacheDirectory: true,
               presets : ["env"],
               plugins : [require("babel-plugin-transform-runtime")]
             }
         }]
     }
 }
