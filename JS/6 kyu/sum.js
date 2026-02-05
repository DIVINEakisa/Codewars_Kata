// Assignment:

// Write a function named sum which performs addition in the way shown below:

// sum(4)(5)(9)(); // => 18
// sum(5)();       // => 5
// sum();          // => 0
// NOTE: Pay attention that the last brackets are left empty to indicate the end of operations.
function sum(a) {
  let total = 0;
  function add(b) {
    if (b === undefined) {
      return total;
    } else {
      total += b;
      return add;
    }
  }
  if (a === undefined) {
    return total;
  } else {
    total += a;
    return add;
  }
}
