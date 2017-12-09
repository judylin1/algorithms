const printCombinations = require('../rake-tasks/testB.js');
const expect = require('chai').expect;
const assert = require('chai').assert;

describe('printCombinations', () => {
  it ('should be a function', () => {
    expect(printCombinations).to.be.a('function');
  });

  it ('should throw an error when an array is not passed in', () => {
    assert.throws(() => printCombinations({}), Error, 'Input must be an array.');
    assert.throws(() => printCombinations('hello world'), Error, 'Input must be an array.');
    assert.throws(() => printCombinations(12), Error, 'Input must be an array.');
    assert.throws(() => printCombinations(null), Error, 'Input must be an array.');
    assert.throws(() => printCombinations(undefined), Error, 'Input must be an array.');
  });

  it ('should throw an error if the sum of the array is not passed in', () => {
    assert.throws(() => printCombinations([1, 2, 3]), Error, 'Sum of array is required.');
  });

  it ('should throw an error if any of the values in the input is not a number', () => {
    assert.throws(() => printCombinations([1, null], 100), Error, 'Input can only contain numbers.');
    assert.throws(() => printCombinations([1, undefined], 100), Error, 'Input can only contain numbers.');
    assert.throws(() => printCombinations([1, []], 100), Error, 'Input can only contain numbers.');
    assert.throws(() => printCombinations([1, {}], 100), Error, 'Input can only contain numbers.');
    assert.throws(() => printCombinations([1, 'hello world'], 100), Error, 'Input can only contain numbers.');
  });

  it ('should return an empty array if the sum of the input is less than 100', () => {
    expect(printCombinations([1, 2, 3], 100)).to.deep.equal([]);
  });

  it ('should take in an array, any total value, and the length of each array', () => {
    expect(printCombinations([0, 5, 30, 95, 100, 74, 26, 10, 60, 33, 72, 50, 27, 39, 62, 4, 11, 88], 100, 5)).to.deep.equal([
      [0, 4, 10, 26, 60],
      [0, 4, 27, 30, 39],
      [0, 5, 10, 11, 74],
      [0, 5, 26, 30, 39],
      [0, 10, 27, 30, 33],
      [0, 11, 26, 30, 33],
      [4, 5, 11, 30, 50],
      [4, 10, 26, 27, 33],
    ]);
  });

  it ('should return all possible combinations so that 3 numbers combined total to 100', () => {
    expect(printCombinations([0, 5, 30, 95, 100, 74, 26, 10, 60, 33, 72, 50, 27, 39, 62, 4, 11, 88], 100, 3)).to.deep.equal([
      [0, 5, 95],
      [0, 26, 74],
      [5, 33, 62],
      [10, 30, 60],
      [11, 27, 62],
      [11, 39, 50],
    ]);
  });

  it ('should handle the last argument not being passed in resulting in all possible combinations', () => {
    expect(printCombinations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15)).to.deep.equal([
      [1, 2, 3, 4, 5],
      [1, 2, 3, 9],
      [1, 2, 4, 8],
      [1, 2, 5, 7],
      [1, 3, 4, 7],
      [1, 3, 5, 6],
      [1, 4, 10],
      [1, 5, 9],
      [1, 6, 8],
      [2, 3, 4, 6],
      [2, 3, 10],
      [2, 4, 9],
      [2, 5, 8],
      [2, 6, 7],
      [3, 4, 8],
      [3, 5, 7],
      [4, 5, 6],
      [5, 10],
      [6, 9],
      [7, 8],
    ]);
  });
});
