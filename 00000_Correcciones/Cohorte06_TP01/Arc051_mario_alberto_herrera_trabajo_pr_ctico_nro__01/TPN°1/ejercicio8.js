/*
Realizar un programa que permita ingresar la edad de una persona y determine si es niño (0 a 12 años), 
adolescente (13 a 17 años), adulto (18 a 64 años), adulto mayor (más de 64 años).
*/

let edad = Number(prompt("Ingrese la edad"));

if (edad <= 12) {
    console.log("Niño");
} else {
    if (edad <= 17) {
        console.log("Adolescente");
    } else {
        if (edad <= 64) {
            console.log("Adulto");
        } else {
            console.log("Adulto Mayor");
        }
    }
}