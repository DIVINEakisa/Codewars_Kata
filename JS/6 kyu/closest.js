// Perfect powers are numbers that can be written
// m power k  , where
// m
// m and
// k
// k are both integers greater than 1.

// Your task is to write a function that returns the perfect power nearest any number.

// Notes
// When the input itself is a perfect power, return this number
// Since 4 is the smallest perfect power, for inputs < 4 (including 0, 1, and negatives) return 4
// The input can be either a floating-point number or an integer
// If there are two perfect powers equidistant from the input, return the smaller one

function closestPower(n) {
  if (n < 4) return 4;

  let powers = new Set();

  for (let base = 2; base <= Math.sqrt(n) * 2; base++) {
    let value = base * base;

    while (value <= 1e12) {
      powers.add(value);
      value *= base;
    }
  }

  let arr = Array.from(powers).sort((a, b) => a - b);

  if (powers.has(n)) return n;

  let closest = arr[0];
  let minDiff = Math.abs(n - closest);

  for (let i = 1; i < arr.length; i++) {
    let diff = Math.abs(n - arr[i]);

    if (diff < minDiff || (diff === minDiff && arr[i] < closest)) {
      minDiff = diff;
      closest = arr[i];
    }
  }

  return closest;
}
