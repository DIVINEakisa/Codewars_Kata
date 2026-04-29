// In some programming languages, strings internally are implemented like an array of chars

// This allows things like this:

// function isVowel(char) {
//   return char.match(/^[aeiouAEIOU]$/) != null;
// }

// "abcefghijk".map(function(char) {
//   if (isVowel(char)) {
//     return char.toUpperCase();
//   } else {
//     return char;
//   }
// }); //AbcEfghIjk
// I mean, we can apply the array methods to strings.

// Sadly, in JavaScript, there is no a Char type, and strings do not have most of the methods of arrays.

// The objective of this kata is to add to the String.prototype the next Array.prototype methods:

// Array.prototype.map()
// Array.prototype.join()
// Array.prototype.filter()
// Array.prototype.forEach()
// Array.prototype.some()
// Array.prototype.every()
// Array.prototype.reduce()
// Array.prototype.reduceRight()
// Array.prototype.sort()
// Array.prototype.reverse()
// You probably will miss some methods. The reason is that I have only included methods that satisfy these two conditions:

// There is no already a method for String class with that name. For example indexOf() exists in Array.prototype and in String.prototype.
// Since strings are immutable in JavaScript, the method must not modify the array. For example splice() mutates the array.
// Surprisingly sort() and reverse() really mutate the array, but fortunately also return the mutated array, so there is no biggest problem at implementing them.

// We could still do something with the mutable methods in Array.prototype. Although as we have said, in JavaScript arrays are mutable but strings are not, we can do that mutable methods return the resulting string instead the value that actually are returning the equivalent methods in the array.

// For example:

// var arr = [1, 2];
// arr.push(4); // returns 3 <- array size
// //arr -> [1,2,4]; // mutated

// "Hello".push(" Peter"); // "Hello Peter" <- new string instead string size (11)

// arr.pop(); //4 <- Last element
// //arr -> [1,2] <- mutated

// "Hello".pop(); // "Hell" <- new string without the last element
// You have to implement these mutable methods too:

// Array.prototype.push()
// Array.prototype.pop()
// Array.prototype.shift()
// Array.prototype.unshift()
// Array.prototype.splice()

String.prototype.map = function (callback) {
  let result = "";
  for (let i = 0; i < this.length; i++) {
    result += callback(this[i], i, this);
  }
  return result;
};

String.prototype.forEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

String.prototype.filter = function (callback) {
  let result = "";
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result += this[i];
    }
  }
  return result;
};

String.prototype.some = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) return true;
  }
  return false;
};

String.prototype.every = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) return false;
  }
  return true;
};

String.prototype.reduce = function (callback, initial) {
  let i = 0;
  let acc = initial;

  if (acc === undefined) {
    acc = this[0];
    i = 1;
  }

  for (; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }

  return acc;
};

String.prototype.reduceRight = function (callback, initial) {
  let i = this.length - 1;
  let acc = initial;

  if (acc === undefined) {
    acc = this[i];
    i--;
  }

  for (; i >= 0; i--) {
    acc = callback(acc, this[i], i, this);
  }

  return acc;
};

String.prototype.join = function (separator = ",") {
  let result = "";
  for (let i = 0; i < this.length; i++) {
    result += this[i];
    if (i < this.length - 1) result += separator;
  }
  return result;
};

String.prototype.reverse = function () {
  let result = "";
  for (let i = this.length - 1; i >= 0; i--) {
    result += this[i];
  }
  return result;
};

String.prototype.sort = function (compareFn) {
  let arr = this.split("");
  arr.sort(compareFn);
  return arr.join("");
};

String.prototype.push = function (...items) {
  return this + items.join("");
};

String.prototype.pop = function () {
  return this.slice(0, -1);
};

String.prototype.shift = function () {
  return this.slice(1);
};

String.prototype.unshift = function (...items) {
  return items.join("") + this;
};

String.prototype.splice = function (start, deleteCount, ...items) {
  let arr = this.split("");

  if (start < 0) start = arr.length + start;

  arr.splice(start, deleteCount, ...items.join("").split(""));
  return arr.join("");
};