// In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

// "Hello!" => "Holle!"
// "Tomatoes" => "Temotaos"
// "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
// For simplicity, you can treat the letter y as a consonant, not a vowel.

function reverseVowels(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let chars = str.split("");
  let found = [];

  for (let i = 0; i < chars.length; i++) {
    if (vowels.includes(chars[i].toLowerCase())) {
      found.push(chars[i]);
    }
  }

  for (let i = 0; i < chars.length; i++) {
    if (vowels.includes(chars[i].toLowerCase())) {
      chars[i] = found.pop();
    }
  }

  return chars.join("");
}
