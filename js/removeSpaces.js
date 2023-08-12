const string = "This is an example of an string with spaces.";
const noSpaceString = "This is an example of an string without spaces.";

const originalString = document.getElementById("originalString");
originalString.textContent = string;

const findSpaces = noSpaceString.replace(/\s/g, "");
const modifiedString = document.getElementById("modifiedString");
modifiedString.textContent = findSpaces;
