/* jshint esnext:true */

let START_HASH_VALUE = 5381;

function reduceToHash(array) {
  return array.reduce((prev, curr) => {
    return ((prev << 5) + prev) + curr;
  }, START_HASH_VALUE);
}

function djb2(input) {
  if (input && input.constructor && input.constructor.name === 'Array'  && input.length) {
    return reduceToHash(input);
  } else if(input && typeof input === 'string'  && input.length){
    return reduceToHash( input.split('').map((str) => { return str.charCodeAt(0) }) );
  } else {
    return new Error('Empty input.' + JSON.stringify(input))
  }
}
let Core = { djb2 };

export default Core;
