const exampleArray = [42, -17, 0, "a", 3.14, "!", "b", -9, "@", 7, "#", "c", -23];


function sortArray() {
  // Create a sorted copy of the exampleArray without modifying the original
  const sortedArray = exampleArray.slice().sort((a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
      return a - b; // Sort numbers in ascending order
    } else if (typeof a === 'string' && typeof b === 'string') {
      return a.localeCompare(b); // Sort strings alphabetically
    } else if (typeof a === 'number') {
      return -1; // Numbers before strings
    } else {
      return 1; // Strings after numbers
    }
  });

  // Display the sorted array
  document.write(sortedArray);
}

sortArray();