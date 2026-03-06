export function getMiddle(s: string) {
  let len = s.length;
  if (len % 2 === 0) {
    let char1 = Math.floor(len / 2 - 1);
    let char2 = Math.floor(len / 2);
    return s.slice(char1, char2 + 1);
  } else {
    let char = Math.floor(len / 2);
    return s[char];
  }
}
console.log(getMiddle("middle"));
