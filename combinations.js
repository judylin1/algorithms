/*
Given an array of integer, each ranged from 0 to 100 without duplicates,
print all possible combinations (a, b, c) in the input array such that a + b + c = 100

The order and the format of the answer is not important, just show them in a clean way.
The comments at the bottom shows the answer in a possible format.
*/


const isNotANumber = valueToCheck => valueToCheck === undefined || valueToCheck === null || typeof valueToCheck !== 'number';

  const print_combinations = (input, sumOfArray, lengthOfEachArray) => {
    // check if the input is an array
    if (!Array.isArray(input)) {
      console.log('Error: Input must be an array.');
      throw new Error('Error: Input must be an array.');
    }

    // check if sumOfArray exists
    if (isNotANumber(sumOfArray)) {
      console.log('Error: Sum of array is required.');
      throw new Error('Error: Sum of array is required.');
    }

    // check if any of the values in the input are not numbers
    if (input.map(val => isNotANumber(val)).some(e => e)) {
      console.log('Error: Input can only contain numbers.');
      throw new Error('Error: Input can only contain numbers.');
    }

    // check if the total of the input is less than the sumOfArray (100)
    if (input.reduce((a, b) => a + b, 0) < sumOfArray) {
      console.log([]);
      return [];
    }

    const results = [];
    const generateAddedValues = (array, partial) => {
      const sortedArray = array.sort((a, b) => a - b);
      let total, integerValue, remainingIntegers;
      const temporaryTotal = partial || [];

      total = temporaryTotal.reduce((a, b) => a + b, 0);

      if (total === sumOfArray) {
        results.push(temporaryTotal);
      }

      if (total > sumOfArray) return;

      for (let i = 0; i < sortedArray.length; i++) {
        integerValue = sortedArray[i];
        remainingIntegers = sortedArray.slice(i + 1);
        generateAddedValues(remainingIntegers, temporaryTotal.concat([integerValue]));
      }
    };
    generateAddedValues(input);
    const filterForLengthOfArrays = lengthOfEachArray ? results.filter(array => array.length === lengthOfEachArray) : results;
    console.log(filterForLengthOfArrays);
    return filterForLengthOfArrays;
  };

  // const input = new Array(0, 5, 30, 95, 100, 74, 26, 10, 60, 33, 72, 50, 27, 39, 62, 4, 11, 88);

  // print_combinations(input, 100, 3);

  module.exports = print_combinations;
/*
0 + 5 + 95 = 100
0 + 26 + 74 = 100
5 + 33 + 62 = 100
10 + 30 + 60 = 100
11 + 27 + 62 = 100
11 + 39 + 50 = 100
*/
