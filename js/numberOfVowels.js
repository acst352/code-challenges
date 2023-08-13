function numberOfVowels(str) {
  const vowels = /[aeiou]/gi;
  const matches = str.match(vowels);
  return matches ? matches.length : 0;
}

const aString = "Este es un ejemplo de un texto.";
document.write(numberOfVowels(aString));