
/*Realizar un programa que permita introducir un valor (X) y determinar si el mismo es PAR ó IMPAR. */
{

    let numero = 0; 
    numero = Number(prompt(`ingrese un numero`));
    if(numero %2===0){console.log(`el numero es PAR`); }
    else console.log(`el numero es IMPAR`);
}