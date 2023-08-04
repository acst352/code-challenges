function rmSpaces() {
  const string = "Este es un ejemplo de un texto con muchos espacios.";
  let findSpaces = string.replace(/\s/g, "");
  document.write(string + " ");
  document.write(findSpaces);
}

rmSpaces();