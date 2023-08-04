const anArray = [42, -17, 0, 3.14, -9, 7, -23, 100, -50];

function filterNumbers() {
  let result = anArray.filter((number) => number >= 0);
  document.write(result);
}

filterNumbers();