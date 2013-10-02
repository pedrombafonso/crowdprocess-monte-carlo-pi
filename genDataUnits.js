// use like: node genDataUnits.js <NUMBER_OF_DATA_UNITS>
var n = process.argv[2];

console.log('[');
for (var i = n - 1; i > 0; i--) {
  console.log('{},');
};
console.log('{}');
console.log(']');