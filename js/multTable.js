function printMultiplicationTable(rows, cols) {
  let tableHTML = "<table>";

  for (let i = 1; i <= rows; i++) {
    let fila = "<tr>";
    for (let j = 1; j <= cols; j++) {
      fila += "<td>" + i * j + "</td>";
    }
    fila += "</tr>";
    tableHTML += fila;
  }

  tableHTML += "</table>";
  document.getElementById("table").innerHTML = tableHTML;
}

printMultiplicationTable(10, 10);