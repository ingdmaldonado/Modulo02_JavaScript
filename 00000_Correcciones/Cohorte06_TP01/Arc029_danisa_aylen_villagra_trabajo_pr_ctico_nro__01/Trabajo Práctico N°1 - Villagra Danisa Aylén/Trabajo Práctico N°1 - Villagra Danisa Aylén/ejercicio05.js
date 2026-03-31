/*Ejercicio Nro. 05: Estructuras Condicionales (if/else) 
Realizar un programa que permita introducir un valor (X) y determinar si el mismo es PAR ó IMPAR.*/

{
    let nro = Number(prompt(`Ingrese un número:`));

    let modulo = nro % 2;
    
    if(modulo === 0)
    {
        console.log(`El número ${nro} es PAR.`);
    }
    else
    {
        console.log(`El número ${nro} es IMPAR.`);
    }
}