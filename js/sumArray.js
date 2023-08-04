const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function sumArray(numbers) {
  let sum = 0;
  // Using for...of statement is recommended as simplifies the syntax and eliminates the need for a counter varaible.
  for (const element of numbers) {
    sum += element;
  }
  return sum;
}

const result = sumArray(array);
document.write(array + " = " + result);