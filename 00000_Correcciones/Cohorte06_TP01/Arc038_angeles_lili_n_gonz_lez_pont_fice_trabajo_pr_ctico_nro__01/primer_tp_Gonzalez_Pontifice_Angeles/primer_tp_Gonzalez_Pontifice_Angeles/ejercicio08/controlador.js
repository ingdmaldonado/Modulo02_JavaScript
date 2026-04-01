/*
Ejercicio Nro. 08: Estructuras Condicionales (if/else)
Realizar un programa que permita ingresar la edad de una persona y determine si es niño (0 a 12 años), adolescente (13 a 17 años), adulto (18 a 64 años), adulto mayor (más de 64 años).
*/

//solicitar la edad de la persona//
let edad = 0;
edad = Number(prompt("Ingrese la edad de la persona (debe ser un número positivo):"));

//variable para guardar la categoría//
let categoria = "";

//determinar la categoría según la edad (if/else)//
if (edad >= 0 && edad <= 12) {
    categoria = "niño";
} else if (edad >= 13 && edad <= 17) {
    categoria = "adolescente";
} else if (edad >= 18 && edad <= 64) {
    categoria = "adulto";
} else if (edad > 64) {
    categoria = "adulto mayor";
} else {
    console.log("Edad inválida. Solo se permiten números positivos (0 o más).");
}

//mostrar el resultado solo si la edad era válida//
if (categoria !== "") {
    console.log(`La persona de ${edad} años es clasificada como: ${categoria}`);
}