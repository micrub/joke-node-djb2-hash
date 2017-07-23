
const OUT_DIR = 'dist';
const TMP_PKG_FILE = './resources/package.json.build.tmp';

const path = require('path');
const fs = require('fs');

let CopyWebpackPlugin = require('copy-webpack-plugin');
let WebpackBeforeBuildPlugin = require('before-build-webpack');
let WebpackShellPlugin = require('./lib/WebpackShellPlugin');

let packageJson = require('./package.json');

function cleanPackageJson(pkg) {
  delete pkg.private;
  delete pkg.devDependencies;
  delete pkg.scripts;
  delete pkg.eslintConfig;
  delete pkg.babel;
  fs.writeFileSync(TMP_PKG_FILE, JSON.stringify(pkg, null, '  '), 'utf-8');
}

const copyOptions = [
  {from : "resources/assets/"},
  {from: TMP_PKG_FILE, to : "package.json"},
  {from: "yarn.lock"},
  {from: "README.md"}
];

 module.exports = {
     entry: './src/index.js',
     output: {
         path: path.resolve(__dirname, OUT_DIR),
         filename: 'index.js',
     },
     plugins: [
       new WebpackBeforeBuildPlugin(function(compiler, callback) {
         cleanPackageJson(packageJson);
         callback(); //don't call it if you do want to stop compilation
       }),
       new CopyWebpackPlugin(copyOptions),
       new WebpackShellPlugin({
         onBuildStart: ['echo "start build"'],
         onBuildEnd: ['rm ' + TMP_PKG_FILE + '&& echo "Finished"']
       }),
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
