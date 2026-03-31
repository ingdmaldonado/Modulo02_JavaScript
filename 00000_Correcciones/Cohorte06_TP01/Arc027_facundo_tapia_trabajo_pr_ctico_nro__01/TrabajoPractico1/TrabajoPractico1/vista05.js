/*Ejercicio Nro. 05: Estructuras Condicionales (if/else)
Realizar un programa que permita introducir un valor (X) y determinar si el mismo es PAR ó IMPAR.*/

{
    let ingreseElValorDeX = 0;

    ingreseElValorDeX = Number(prompt(`Ingrese el valor de x `));

    if(ingreseElValorDeX % 2 == 0)
    {
        console.log(`El numero es par `);
    }
    else
    {
        console.log(`El numero es impar`);
    
    }

}
