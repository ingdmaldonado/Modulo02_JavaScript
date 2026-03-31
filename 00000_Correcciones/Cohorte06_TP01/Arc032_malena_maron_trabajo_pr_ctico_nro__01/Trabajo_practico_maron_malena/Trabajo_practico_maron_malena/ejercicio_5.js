/*Ejercicio Nro. 05: Estructuras Condicionales (if/else) 
Realizar un programa que permita introducir un valor (X) y determinar si el mismo es PAR ó IMPAR. */

{
    let numero=0;
    let resultado=0;
    numero= Number(prompt`Ingrese un número`)

    if(numero %2== 0)
    {
        console.log(`El número ingresado es par`)
    }
    else{
        console.log(`El número es impar`)
    }
    resultado= (numero %2== 0)? "El número es positivo" : "El número es negativo";
    console.log(numero)


}