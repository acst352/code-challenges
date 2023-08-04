const arrayay = [0, 8, 5, 3, 9, 5, 7, 6, 9, 2, 6, 1, 8, 4, 7, 5, 6, 3, 7];

function reverseArray() {
  // Reverse method mutates the original array while toReversed method referes to the original and returns an inverted copy.
  document.write(arrayay.toReversed());
}

reverseArray();