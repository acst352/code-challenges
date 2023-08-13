function kmToMi(km) {
  let mi = 0.621371;
  let result = km * mi;
  return km + " km" + " = " + result + " mi";
}

kmToMi(1);

const printResult = document.getElementById("lengthConverter");
printResult.textContent = kmToMi(1);