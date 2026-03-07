//Map is built in JS object that stores key-value pairs, where both keys and  values can be any datatype.
//WeakMap is a special kind of Map that allows you to store key-value pairs where the keys must be objects and those keys are held weakly.
// ex;
let myMap = new Map();
myMap.set("name", "Dede");
myMap.set("age", 20);

console.log(myMap.get("name"));
console.log(myMap.has("age"));
console.log(myMap.size);
// ex
let wm = new WeakMap();
let user = { name: "Dede" };

wm.set(user, "secret-data");

console.log(wm.has(user));
console.log(wm.get(user));

wm.delete(user);
console.log(wm.has(user));
