function exchangeWith(a, b) {
  let bReversed = [...b].reverse();
  let aReversed = [...a].reverse();

  a.length = 0;
  a.push(...bReversed);

  b.length = 0;
  b.push(...aReversed);
}

let my_array = ["a", "b", "c"];
let other_array = [1, 2, 3];

exchangeWith(my_array, other_array);

console.log(my_array);
console.log(other_array);
