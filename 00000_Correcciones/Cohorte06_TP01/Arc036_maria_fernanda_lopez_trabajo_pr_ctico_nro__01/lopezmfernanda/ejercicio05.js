/* Ejercicio Nro. 05: Estructuras Condicionales (if/else)
Realizar un programa que permita introducir un valor (X) y determinar si el mismo es PAR ó IMPAR. */

{
    let x= 0;
    x= Number(prompt(`Ingrese un valor`));
    console.log (`Valor ingresado`,x);

    if (x/2==0)
    {
        console.log (`Valor Ingresado PAR`);
    }
    else
    {
        console.log (`Valor ingresado IMPAR`)
    }

}