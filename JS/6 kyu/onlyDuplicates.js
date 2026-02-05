// Given a string, remove any characters that are unique from the string.

// Example:

// input: "abccdefee"

// output: "cceee"
function onlyDuplicates(str) {
  let st = str.split("");
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let char = st[i];

    if (st.indexOf(char) !== st.lastIndexOf(char)) {
      result.push(char);
    }
  }
  return result.join("");
}
console.log(onlyDuplicates("aabceedaa"));
console.log(onlyDuplicates("colloquial"));
