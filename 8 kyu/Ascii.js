// Description:
// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

// Examples:

// uniTotal("a") == 97
// uniTotal("aaa") == 291
function uniTotal(string) {
  // total up dem unicodes!
  let suma = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < string[i].length; j++) {
      let char_code = string[i].charCodeAt(j);
      suma += char_code;
    }
  }

  return suma;
}
