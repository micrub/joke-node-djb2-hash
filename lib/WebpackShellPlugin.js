'use strict';

var exec = require('child_process').exec;
/*
Object.assing polyfill from:
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
*/
if (typeof Object.assign != 'function') {
  Object.assign = function (target, varArgs) { // .length of function is 2
    'use strict';
    if (target == null) { // TypeError if undefined or null
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource != null) { // Skip over if undefined or null
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  };
}

function puts(error, stdout, stderr) {
    console.log(stdout);
}

function WebpackShellPlugin(options) {
  var defaultOptions = {
    onBuildStart: [],
    onBuildEnd: []
  };

  this.options = Object.assign(defaultOptions, options);
}

WebpackShellPlugin.prototype.apply = function(compiler) {
  var options = this.options;

  compiler.plugin("compilation", function(compilation) {
    if(options.onBuildStart.length){
        console.log("Executing pre-build scripts");
        options.onBuildStart.forEach(function(script){ exec(script, puts) });
    }
  });

  compiler.plugin("emit", function(compilation, callback) {
    if(options.onBuildEnd.length){
        console.log("Executing post-build scripts");
        options.onBuildEnd.forEach(function(script){ exec(script, puts) });
    }
    callback();
  });
};

module.exports = WebpackShellPlugin;
