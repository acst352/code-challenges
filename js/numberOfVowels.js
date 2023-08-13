const vowelsString = "This is an example aeiou.";

function numberOfVowels(str) {
  const vowels = /[aeiou]/gi;
  const matches = str.match(vowels);
  return matches ? matches.length : 0;
}
const exampleString = document.getElementById("vowelsString");
exampleString.textContent = vowelsString;

const numOfVowels = document.getElementById("numOfVowels");
numOfVowels.textContent = numberOfVowels(vowelsString);