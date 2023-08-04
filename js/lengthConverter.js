// voy a convertir de km a mi.
// Quiero saber cuánto son 5 km en mi.
// Entonces número de km * 0.621371.
// Entonces 5 x 0.621371 = 3.1 mi.

// 1 km = 0.621371 mi.
// 1 mi = 1.609344 km.

function kmToMi(km) {
  let mi = 0.621371;
  let result = km * mi;

  document.write(km + " km" + " = " + result + " mi");
}

kmToMi(1);