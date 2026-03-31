/*Realizar un programa que permita introducir un valor (X) y determinar si el mismo es PAR ó IMPAR.  */

{
    let número = 0;
    número = Number(prompt(`ingrese un valor`))

    if(número % 2 == 0)
    {
        console.log(`el valor es un número par`)
        
    }
    else
        {
            console.log(`el valor es un número impar`)
            
        }
}

