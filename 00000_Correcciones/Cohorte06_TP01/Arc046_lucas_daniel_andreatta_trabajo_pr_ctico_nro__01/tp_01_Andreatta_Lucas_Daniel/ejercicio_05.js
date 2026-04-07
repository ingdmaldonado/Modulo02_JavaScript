/*

Ejercicio Nro. 05: Estructuras Condicionales (if/else) 
Realizar un programa que permita introducir un valor (X) y determinar si el mismo es PAR ó IMPAR.

 */

{

    let valorX = 0;
    let restoTernario = "";

    valorX = Number(prompt(`Ingrese un valor:`));

    if ( (valorX % 2) != 0 ) {
        console.log(`(IF/ELSE) El valor ingresado es "IMPAR"`);
    } else {
        console.log(`(IF/ELSE) El valor ingresado es "PAR"`);
    }

    restoTernario = valorX % 2 === 0 ? "PAR":"IMPAR";
    console.log(`(TERNARIO) El valor ingresado es "${restoTernario}"`);

}