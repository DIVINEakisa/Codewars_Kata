// Write a JavaScript function to check if a given number is prime or not.
const primeNumber = (num) => {
  if (num <= 1) return 0;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
console.log(primeNumber(12));
console.log(primeNumber(13));
