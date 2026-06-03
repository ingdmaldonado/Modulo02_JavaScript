/*
Ejercicio Nro. 01: 
Realizar un programa que permita el Ingreso de 2 (dos números) (A y B) utilizando variables y realice las 
siguientes operaciones.
Muestre la suma de ambos (A + B) 
Muestre la resta (A – B) 
Muestre el Producto de ambos (A * B) 
Muestre el Cociente entre ambos (A / B) 
Nota: En este último caso, verificar que sucede cuando B es igual a cero. Que sucede con el programa
*/
{
    let A = 0;
    let B = 0;
    A = Number(prompt(`Ingrese el valor de A`));
    B = Number(prompt(`Ingrese el valor de B`));

    let suma = (A + B);
   
    let resta = (A - B);

    let producto = (A*B);

    if (B !== 0)
    {       
        division = (A/B);
        console.log(`resultado de la division ${division}`);      
    }
    else
    {
        console.log('Division no posible');
    }

    console.log (`suma es ${suma} resta es ${resta} producto es ${producto}`);
}