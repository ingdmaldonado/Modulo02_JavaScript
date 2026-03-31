/* Ejercicio Nro. 01: 
Realizar un programa que permita el Ingreso de 2 (dos números) (A y B) utilizando variables y realice las siguientes operaciones:
 - Muestre la suma de ambos (A + B) 
 - Muestre la resta (A – B) 
 - Muestre el Producto de ambos (A * B)
 - Muestre el Cociente entre ambos (A / B) 
Nota: En este último caso, verificar que sucede cuando B es igual a cero. Que sucede con el programa.*/

{
    let nroA = Number(prompt(`Ingrese el primer número: `));
    let nroB = Number(prompt(`Ingrese el segundo número: `));

    let suma = nroA + nroB;
    console.log(`El resultado de la suma es: ${suma}`);

    let resta = nroA - nroB;
    console.log(`El resultado de la resta es: ${resta}`);

    let multiplicacion = nroA * nroB;
    console.log(`El resultado de la multiplicación es: ${multiplicacion}`);

    if(nroB !== 0)
    {
        let division = nroA / nroB;
        console.log(`El resultado de la división es: ${division}`);
    }
    else
    {
        console.log(`No es posible la división en 0`);
    }
}