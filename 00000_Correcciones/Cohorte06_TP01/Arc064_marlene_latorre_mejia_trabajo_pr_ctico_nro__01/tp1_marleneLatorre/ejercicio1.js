/*
Ejercicio Nro. 01:
Realizar un programa que permita el Ingreso de 2 (dos números) (A y B) utilizando variables y realice las siguientes operaciones.
- Muestre la suma de ambos (A + B)
- Muestre la resta (A – B)
- Muestre el Producto de ambos (A * B)
- Muestre el Cociente entre ambos (A / B)
Nota: En este último caso, verificar que sucede cuando B es igual a cero. Que sucede con el programa
*/

{
    let A = 0;
    let B = 0;

    A = Number(prompt(`Ingrese el numero A`));
    B = Number(prompt(`Ingrese el numero B`));

    let suma = A + B;
    let resta = A - B;
    let producto = A * B;

    console.log(`A: ${A} B: ${B}`);
    console.log(`La suma es ${suma} la resta es ${resta} producto es ${producto}`);

    if(B!==0)
    {
        division = A/B;
        console.log(`la division es ${division}`);
    }
    else
    {
        console.log(`La division no es posible. Indeterminacion matematica`);
    }

}