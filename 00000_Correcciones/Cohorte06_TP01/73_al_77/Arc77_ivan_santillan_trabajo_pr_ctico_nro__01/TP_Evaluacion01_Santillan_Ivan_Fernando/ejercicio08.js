const edad = Number(prompt("Ingrese la edad de la persona:"));

if (edad >= 0 && edad <= 12) {
  console.log("La persona es nino/a.");
} else if (edad >= 13 && edad <= 17) {
  console.log("La persona es adolescente.");
} else if (edad >= 18 && edad <= 64) {
  console.log("La persona es adulta.");
} else if (edad > 64) {
  console.log("La persona es adulta mayor.");
} else {
  console.log("Edad invalida.");
}
