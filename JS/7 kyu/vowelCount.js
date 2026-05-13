// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowel = ["a", "e", "i", "o", "u"];
  let strArray = str.split("");
  let res = strArray.filter((st) => vowel.includes(st));
  return res.length;
}
console.log(getCount("abracadabra"));
