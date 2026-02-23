


/* 
Realizar un programa que permita ingresar la edad de una persona y determine si es niño (0 a 12 años),
adolescente (13 a 17 años), adulto (18 a 64 años), adulto mayor (más de 64 años).
 */

{
    let edad = 0;
    edad = prompt("Ingrese una edad por favor:");

    if (edad<=12){
        console.log("Es niño")
    }
    else if (edad>=13 && edad <=17){
        console.log("Es adolescente")
    }
    else if (edad >=18 && edad <= 64){
        console.log("Es adulto")
    }
    else{
        console.log("Es adulto mayor")
    }

}

