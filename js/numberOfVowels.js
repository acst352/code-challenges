// function numberOfVowels() {
//   const aString = "aeiou.";
//   const vowels = "aeiouAEIOU";
//   let sum = 0;

//   for (let i = 0; i < aString.length; i++) {
//     if (vowels.indexOf(aString[i]) !== -1) {
//       sum++;
//     }
//   }

//   return sum;
// }

// document.write(numberOfVowels());

function numberOfVowels(str) {
    const vowels = /[aeiou]/gi;
    const matches = str.match(vowels);
    return matches ? matches.length : 0;
  }
  
  const aString = "Este es un ejemplo de un texto.";
  document.write(numberOfVowels(aString));  