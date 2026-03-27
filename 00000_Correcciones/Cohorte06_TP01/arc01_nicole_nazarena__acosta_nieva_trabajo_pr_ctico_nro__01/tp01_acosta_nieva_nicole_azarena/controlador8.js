/*Ejercicio Nro. 08: Estructuras Condicionales (if/else)
Realizar un programa que permita ingresar la edad de una persona y determine si es niño (0 a 12 años),
adolescente (13 a 17 años), adulto (18 a 64 años), adulto mayor (más de 64 años).*/

{
    let edad = Number(prompt(`ingrese la edad de la persona`));

if ( edad >= 0 && edad <=12) {
    console.log("La edad de la persona indica que es un niño.");
} else if (edad >= 13 && edad <= 17) {
    console.log("La edad de la persona indica que es un adolescente.");
} else if (edad >= 18 && edad <= 64) {
    console.log("La edad de la persona indica que es un adulto.");
} else {
    console.log("La edad de la persona indica que es un adulto mayor.");
}
}