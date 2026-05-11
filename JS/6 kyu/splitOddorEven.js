// Task
// Complete function splitOddAndEven, accept a number n(n>0), return an array that contains the continuous parts of odd or even digits.

// Please don't worry about digit 0, it won't appear ;-)

// Examples
// splitOddAndEven(123)  ===  [1,2,3]

// splitOddAndEven(223)  ===  [22,3]

// splitOddAndEven(111)  ===  [111]

// splitOddAndEven(13579)  ===  [13579]

// splitOddAndEven(135246)  ===  [135,246]

// splitOddAndEven(123456)  ===  [1,2,3,4,5,6]

function splitOddAndEven(n) {
  let num = n.toString();
  let current = num[0];
  let result = [];
  for (let i = 1; i < num.length; i++) {
    let previous = Number(num[i - 1]);
    let curr = Number(num[i]);

    if (previous % 2 === curr % 2) {
      current += num[i];
    } else {
      result.push(Number(current));
      current = num[i];
    }
  }
  result.push(Number(current));
  return result;
}
console.log(splitOddAndEven(123));
console.log(splitOddAndEven(13579));