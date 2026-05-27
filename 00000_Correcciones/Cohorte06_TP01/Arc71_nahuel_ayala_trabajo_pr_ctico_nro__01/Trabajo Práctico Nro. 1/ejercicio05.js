/*
    Ejercicio Nro. 05: Estructuras Condicionales (if/else)
    Realizar un programa que permita introducir un valor (X) y determinar si el mismo es PAR ó IMPAR.
*/

{
    let numero = 0;
    numero = Number(prompt(`Ingrese un Número:`));

    if(numero%2 === 0){
        console.log(`El Número ${numero} es PAR.`);
    }
    else{
        console.log(`El Número ${numero} es IMPAR.`);
    }
}