/*
Ejercicio Nro. 08: Estructuras Condicionales (if/else)
Realizar un programa que permita ingresar la edad de una persona y determine si es niño (0 a 12 años),
adolescente (13 a 17 años), adulto (18 a 64 años), adulto mayor (más de 64 años).
*/
{
    let edad = 0;
    edad = Number(prompt("Ingrese la edad de la persona:"));

    let categoria = "";

    if (edad >= 0 && edad <= 12) {
        categoria = "niño";
    } else if (edad >= 13 && edad <= 17) {
        categoria = "adolescente";
    } else if (edad >= 18 && edad <= 64) {
        categoria = "adulto";
    } else if (edad > 64) {
        categoria = "adulto mayor";
    } else {
        categoria = "edad inválida";
    }

    console.log(`Con ${edad} años, la persona entra en la categoría de: ${categoria}`);
}