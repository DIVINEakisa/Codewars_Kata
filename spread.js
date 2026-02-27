//  Rest Parameter allows a function to accept an indefinite number of arguments as an array.
// Syntax: function name(...args) { }


function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4)); 
//Spread Operator expands (spreads) elements of an array or object into individual elements.
//Syntax: [...array], {...object}, func(...args)
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combined = [...arr1, ...arr2];
console.log(combined); // [1,2,3,4,5,6]

function add(a, b, c) {
  return a + b + c;
}
let nums = [1, 2, 3];
console.log(add(...nums)); 

//Default Parameter allows you to set a default value for a parameter if no argument is provided (or if undefined is passed).
// Syntax: function name(param = defaultValue) { }

function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet());       
console.log(greet("Dede")); 
