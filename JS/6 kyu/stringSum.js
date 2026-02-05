// Return the summation of the input strings with no more than 14 characters.
const x = (a, b) => {
  const num1 = +a;
  const num2 = +b;
  let sum = num1 + num2;
  let Str = sum.toString();

  return Str.length <= "14" ? sum : "result too long";
};
