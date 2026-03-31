/*  Ejercicio Nro. 08: 

Estructuras Condicionales (if/else) 
Realizar un programa que permita ingresar la edad de una persona y determine si es niño (0 a 12 años), 
adolescente (13 a 17 años), adulto (18 a 64 años), adulto mayor (más de 64 años). 

*/

{
    let edad = 0;
    edad = Number(prompt(`Ingrese su edad:`));
    console.log(`Edad: ${edad}`);

    if (edad >= 0 && edad <= 12) {
        console.log("Usted es NIÑO");
    }
    else if (edad <= 17) {
        console.log("Usted es ADOLESCENTE");
    }
    else if (edad <= 64) {
        console.log("Usted es ADULTO");
    }
    else if (edad > 64) {
        console.log("Usted es ADULTO MAYOR");
    }
    else {
        console.log("El numero que ingreso es incorrecto, intente nuevamente");
    }


}