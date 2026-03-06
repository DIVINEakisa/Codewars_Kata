// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"
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
