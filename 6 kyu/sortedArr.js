// Given any number of arrays each sorted in ascending order, find the nth smallest number of all their elements.

// All the arguments except the last will be arrays, the last argument is n.

// nthSmallest([1,5], [2], [4,8,9], 4) // returns 5 because it's the 4th smallest value
const nthSmallest = (...args) => {
  let n = args.pop();
  let allNumbers = args.flat();
  allNumbers.sort((a, b) => a - b);
  return allNumbers[n - 1];
};
console.log(nthSmallest([1, 5], [2], [4, 8, 9], 4)); // returns 5 because it's the 4th smallest value
