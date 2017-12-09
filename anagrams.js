/*
Given two strings $a and $b, both contains lowercase letters only.
Check if string $a is an anagram of $b.
$a is an anagram of $b if and only if $b can be obtained by re-arranging the characters in $a.
i.e. $b is a permutation of $a.
*/

const isString = string => {
  if (typeof string === 'string' || string instanceof String) return true;
  return false;
};

// removes punctuation, toLowerCase, sorts, and joins
const reformatString = string => {
  const removePunctuation = /[^a-z0-9]/gi;
  return string.replace(removePunctuation, '').toLowerCase().split('').sort().join('');
};

const is_anagram = (a, b) => {
  // ensure stringA and stringB are both strings
  if (!isString(a) || !isString(b)) return false;
  if (reformatString(a) === reformatString(b)) return true;
  return false;
};

function print_is_anagram(a, b) {
  if (is_anagram(a, b)) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}

print_is_anagram('miracle', 'claimer'); // Yes
print_is_anagram('abcabc', 'cbacba'); // Yes
print_is_anagram('xxyyz', 'xyyzz'); // No
print_is_anagram('apple', 'orange'); // No

module.exports = is_anagram;
