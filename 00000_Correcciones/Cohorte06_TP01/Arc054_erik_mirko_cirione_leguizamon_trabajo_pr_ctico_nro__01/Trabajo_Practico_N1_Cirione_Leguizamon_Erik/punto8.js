/*
Realizar un programa que permita ingresar la edad de una persona y determine si es niño (0 a 12 años), adolescente (13 a 17 años), adulto (18 a 64 años), adulto mayor (más de 64 años). 
*/


let edad = Number(prompt("Por favor, ingresa tu edad:"));

if (edad >= 0 && edad <= 12) {
    console.log("Categoría: Niño");
    alert("Eres un niño.");
} 
else if (edad >= 13 && edad <= 17) {
    console.log("Categoría: Adolescente");
    alert("Eres un adolescente.");
} 
else if (edad >= 18 && edad <= 64) {
    console.log("Categoría: Adulto");
    alert("Eres un adulto.");
} 
else if (edad > 64) {
    console.log("Categoría: Adulto mayor");
    alert("Eres un adulto mayor.");
} 
else {
    console.log("Edad no válida");
    alert("Por favor, ingresa un número válido.");
}