// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*// PROBLEM 1
// We work for a company building a smart home thermometer. Our
// most recent task is this: "Given an aray of temperatures of one day, calculate the temperature amplitude.
// Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5],
  temperatures2 = ['error', 'error'],
  temperatures3 = ['error', 3, -2, -6, -1, 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is Temp Amplitude? Difference between minimum and maximum temperatures.
// - How to calculate the minumum and maximum temperatures?
// - What does a sensor 'error' mean? And what to do about it?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Finding max and min value in the temperatures arrays
// - Subtracting min from max temperature values and returning it

const calcTempAmplitude = function (temps) {
  let min, max;

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') {
      continue;
    } else {
      min = temps[i];
      max = temps[i];
      break;
    }
  }

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') {
      continue;
    } else {
      min = Math.min(min, temps[i]);
      max = Math.max(max, temps[i]);
    }
  }
  console.log({ maxVal: max, minVal: min });
  let tempAmp = max - min;
  return tempAmp ? tempAmp : 'error';
};

const calcTempAmplitude2 = function (temps) {
  // debugger;
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;

    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  return { maxVal: max, minVal: min };
};

console.log(calcTempAmplitude(temperatures3));

console.log(calcTempAmplitude(temperatures2));

console.log(calcTempAmplitude2(temperatures3));

// PROBLEM 2
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we impliment functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge two arrays

const temp4 = [3, -2, -6, -1, 'error', 9],
  temp5 = [13, 17, 15, 14, 9, 5];

const mergeTwoArr = (arr1, arr2) => arr1.concat(arr2);

const mergedArr = mergeTwoArr(temp4, temp5);
console.log(mergedArr);
console.log(calcTempAmplitude(mergedArr));*/

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    value: Number(prompt('Degrees celsius:')),
  };

  // B) FIND
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());

const temp4 = [3, -2, -6, -1, 'error', 9],
  temp5 = [13, 17, 15, 14, 9, 5];

const calcTempAmplitudeBug = function (temps) {
  let min, max;

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') {
      continue;
    } else {
      min = temps[i];
      max = temps[i];
      break;
    }
  }

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') {
      continue;
    } else {
      min = Math.min(min, temps[i]);
      max = Math.max(max, temps[i]);
    }
  }
  console.log({ maxVal: max, minVal: min });
  let tempAmp = max - min;
  return tempAmp ? tempAmp : 'error';
};

const mergeTwoArr = (arr1, arr2) => arr1.concat(arr2);

const mergedArrBug = mergeTwoArr(temp4, temp5);
console.log(mergedArrBug);
console.log(calcTempAmplitudeBug(mergedArrBug));
