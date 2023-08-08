const numbers = [42, -17, 0, 3.14, -9, 7, -23, 100, -50];

// Filter negative numbers
const filteredNumbers = numbers.filter((number) => number >= 0);

const originalArrayElement = document.getElementById("originalArray");
originalArrayElement.textContent = numbers.join(", ");

const modifiedArrayElement = document.getElementById("modifiedArray");
modifiedArrayElement.textContent = filteredNumbers.join(", ");