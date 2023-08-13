function evenNumbers(n) {
  const result = [];

  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }

  return result.join(", ");
}

const printEvenNumber = document.getElementById("evenNumber");
printEvenNumber.textContent = evenNumbers(100);