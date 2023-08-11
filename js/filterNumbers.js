const numbers = [42, -17, 0, 3.14, -9, 7, -23, 100, -50];

// Filter negative numbers
const filteredNumbers = numbers.filter((number) => number >= 0);

const originalArray7 = document.getElementById("originalArray7");
originalArray7.textContent = numbers.join(", ");

const modifiedArray7 = document.getElementById("modifiedArray7");
modifiedArray7.textContent = filteredNumbers.join(", ");
