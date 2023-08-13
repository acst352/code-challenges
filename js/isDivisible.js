function isDivisible(number) {
  return number % 10 === 0;
}

const printAnswer = document.getElementById("isDivisible");
printAnswer.textContent = isDivisible(10);