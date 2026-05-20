// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  let originalLength = arr.length;
  for (let i = 0; i < originalLength; i++) {
    if (arr[i] === 0) {
      arr.push(arr[i]);
      arr.splice(i, 1);
      i--;
      originalLength--;
    }
  }
  return arr;
}
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
