/* jshint esnext:true */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
const ULONG = Uint32Array;
const MAGIC = 33;
const START_HASH_VALUE = 5381;

// returns ULONG
function djb2(input) {
  if (typeof input === 'string' && input.length) {
    let hash = START_HASH_VALUE;
    for (var i = 0, l = input.length; i < l; i ++) {
      var v = input[i];
      hash = ( (hash << 5) + hash ) + v;
    }
    return hash & 0xFFFFFFFF;
  } else {
    return new Error('Empty input')
  }

}
let Core = { djb2 };

export default Core;
