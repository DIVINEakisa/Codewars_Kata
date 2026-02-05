// Given a positive integer N, return the largest integer k such that 3^k < N.

// For example,

// 3 --> 0
// 4 --> 1
// You may assume that the input to your function is always a positive integer.
function powerOf3(n) {
  let k = 0;
  let power = 1;
  while (power * 3 < n) {
    power *= 3;
    k++;
  }
  return k;
}
