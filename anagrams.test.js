const is_anagram = require('../rake-tasks/testA.js');
const expect = require('chai').expect;

describe('is_anagram', () => {
  it ('should be a function', () => {
    expect(is_anagram).to.be.a('function');
  });

  it ('should handle only one argument', () => {
    expect(is_anagram('hello')).to.equal(false);
  });

  it ('should handle null values', () => {
    expect(is_anagram(null, 'hello')).to.equal(false);
    expect(is_anagram('hello', null)).to.equal(false);
  });

  it ('should handle undefined values', () => {
    expect(is_anagram(undefined, 'hello')).to.equal(false);
    expect(is_anagram('hello', undefined)).to.equal(false);
  });

  it ('should handle non-string values', () => {
    expect(is_anagram({}, 'hello')).to.equal(false);
    expect(is_anagram({}, [])).to.equal(false);
  });

  it ('should return true if two strings are anagrams', () => {
    expect(is_anagram('miracle', 'claimer')).to.equal(true);
    expect(is_anagram('abcabc', 'cbacba')).to.equal(true);
  });

  it ('should return false if two strings are not anagrams', () => {
    expect(is_anagram('xxyyz', 'xyyzz')).to.equal(false);
    expect(is_anagram('apple', 'orange')).to.equal(false);
  });

  it ('should remove punctuation and spaces in strings', () => {
    expect(is_anagram('!hello @ world     hello', 'helloworldhello')).to.equal(true);
    expect(is_anagram('123!!!hello22  ab', 'ab12223hello')).to.equal(true);
  });
});
