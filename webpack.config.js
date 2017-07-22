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
             exclude: /node_modules/,
             loader: 'babel-loader'
         }]
     }
 }
