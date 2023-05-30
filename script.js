// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 10;
const y = 'abcd';

const z = 'hello';

if (x === 20) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(1991));

const reverseStr = function (x) {
  let arr = '';

  for (let i = x.length - 1; i >= 0; i--) {
    arr += x[i];
  }

  return arr;
};

console.log(reverseStr(y));
console.log(reverseStr(z));

const reverseRec = function (x) {
  debugger;
  if (x === '') {
    return '';
  } else {
    return reverseRec(x.substr(1)) + x.charAt(0);
  }
};

console.log(reverseRec('hello'));

console.log('' === 'h'.substr(1));
console.log('');

console.log();
