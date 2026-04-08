// Define a "prime prime" number to be a rational number written as one prime number over another prime number: primeA / primeB (e.g. 7/31)

// Given a whole number N / n, generate the number of "prime prime" rational numbers less than 1, using only prime numbers between 0 and N / n(non inclusive).

// Return the count of these "prime primes", and the integer part of their sum.

// Example
// N = 6

// // The "prime primes" less than 1 are:
// 2/3, 2/5, 3/5               // count: 3

// 2/3 + 2/5 + 3/5 = 1.6667    // integer part: 1

// Thus, the function should return [3, 1].

const primePrimes = (n) => {
  const primes = [];

  for (let i = 2; i < n; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(i);
    }
  }

  let count = 0;
  let sum = 0;

  for (let i = 0; i < primes.length; i++) {
    for (let j = i + 1; j < primes.length; j++) {
      count++;
      sum += primes[i] / primes[j];
    }
  }
  return [count, Math.floor(sum)];
};
