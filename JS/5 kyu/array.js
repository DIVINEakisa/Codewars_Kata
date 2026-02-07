// An array is a special variable that can hold multiple values at once.
//. Each element in the array is accessed by an index, where the first element has an index of 0.
// Arrays are used to store collections of data, like numbers, strings, or even other arrays
//using Array Literals
let arrayName = [item1, item2, item3];
//ex
let color = ["red", "blue", "yellow"];
// using new Array constructor
//syntax
let array = new Array(element1, element2);
//ex with no argument
let arr = new Array(); //this create empty array
//example with single value
let singleArr = new array(5); // also this create empty array but with 5 length

//.fill()
//syntax
arr.fill(value, start, end);
//ex
let fillArray = [1, 2, 3, 4, 5];
fillArray.fill(9, 1, 4);
console.log(fillArray); // [1, 9, 9, 9, 5]

let arrFill = new array(5).fill(); // this returns [0,0,0,0,0]
