const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const result = sumArray(array);
document.write(array + " = " + result);