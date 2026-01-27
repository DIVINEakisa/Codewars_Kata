// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

function add(a, b) {
  let carry = 0;
  let result = '';

  a = a.split('').reverse();
  b = b.split('').reverse();

  const max = Math.max(a.length, b.length);

  for (let i = 0; i < max; i++) {
    const sum = (Number(a[i] || 0) + Number(b[i] || 0) + carry);
    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);
  }

  if (carry) result = carry + result;

  return result;
}
console.log(add("123", "321")); // "444"