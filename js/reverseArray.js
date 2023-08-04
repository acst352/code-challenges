const arrayay = [0, 8, 5, 3, 9, 5, 7, 6, 9, 2, 6, 1, 8, 4, 7, 5, 6, 3, 7];

const contenedor = document.getElementById("original-array");
const originalHTML = "Original Array = " + arrayay;
contenedor.innerHTML = originalHTML;

const contenedor2 = document.getElementById("reversed-array");
const reversedArray = arrayay.slice().reverse();
const newHTML = "Reversed Array = " + reversedArray;
contenedor2.innerHTML = newHTML;