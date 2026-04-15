let edad = 0;
edad = Number(prompt("Por favor ingrese la edad de la persona"));

if (edad >= 0 && edad <= 12) {
  console.log("La persona de", edad, "años es un NIÑO.");
} 
else if (edad >= 13 && edad <= 17) {
  console.log("La persona de", edad, "años es un ADOLESCENTE.");
} 
else if (edad >= 18 && edad <= 64) {
  console.log("La persona de", edad, "años es un ADULTO.");
} 
else if (edad > 64) {
  console.log("La persona de", edad, "años es un ADULTO MAYOR.");
} 
else {
  console.log("Edad no válida, ingrese una correcta.");
}