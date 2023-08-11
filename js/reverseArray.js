const arrayay = [0, 8, 5, 3, 9, 5, 7, 6, 9, 2, 6, 1, 8, 4, 7, 5, 6, 3, 7];

// Reverse array
const reversedArray = arrayay.slice().reverse();

const originalArray5 = document.getElementById("originalArray5");
originalArray5.textContent = arrayay.join(", ");

const modifiedArray5 = document.getElementById("reversedArray5");
modifiedArray5.textContent = reversedArray.join(", ");
