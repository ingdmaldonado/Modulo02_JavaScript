

/* 
Realizar un programa que permita introducir un valor (X) 
y determinar si el mismo es PAR ó IMPAR 
*/

{
    let numero = 0;
    numero = Number(prompt("Ingrese un valor por favor"));

    let resultado = numero % 2;
    if (resultado == 0 ){
        console.log("El número ingresado es PAR")
    }
    else{
        console.log("El número ingresado es IMPAR")
    }
}