// Create a function or callable object that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. The function should also return "Even" or "Odd" when accessing a value at an integer index.

// For example:

// evenOrOdd(2); //'Even'
// evenOrOdd[2]; //'Even'
// evenOrOdd(7); //'Odd'
// evenOrOdd[7]; //'Odd'
const fn = (n: number) => {
  if (n % 2 === 0) return "Even";
  return "Odd";
};
export const evenOrOdd = new Proxy(fn, {
  get(target, prop) {
    let num = Number(prop);
    if (num % 2 !== 0) {
      return "Odd";
    } else {
      return "Even";
    }
  },
});
console.log(evenOrOdd(12));
console.log(evenOrOdd(3));
