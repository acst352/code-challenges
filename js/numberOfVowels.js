function numberOfVowels(str) {
  const vowels = /[aeiou]/gi;
  const matches = str.match(vowels);
  return matches ? matches.length : 0;
}

const aString = "This is an example aeiou.";

const vowels = document.getElementById("vowels");
vowels.textContent = numberOfVowels(aString);