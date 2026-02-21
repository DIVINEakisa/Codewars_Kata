//The  nullish operator returns the right-hand value only if the left-hand value is null or undefined
// let result = value ?? defaultValue;
let name = null;
let displayName = name ?? "Guest";

console.log(displayName);
