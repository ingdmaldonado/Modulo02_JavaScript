/*
    Ejercicio Nro. 05: Estructuras Condicionales (if/else)
    Realizar un programa que permita introducir un valor (X) y determinar si el mismo es PAR ó IMPAR.
*/

{   console.log('============DETERMINAR SI UN NUMERO ES PAR O IMPAR==============')
    
    let valorX = 0;

    valorX = Number(prompt(`Ingrese un valor numérico`));

    console.log(`Valor ingresado ${valorX}`);

    //Obtener el modulo de un número
    if( (valorX % 2) === 0 )
    {
        console.log('NÚmero PAR');
    }else
    {
        console.log('Número IMPAR');
    }
}