/* ------EJERCICIO 1--------
Realizar un programa que permita el Ingreso de 2 (dos números) 
(A y B) utilizando variables y realice las
siguientes operaciones.
- Muestre la suma de ambos (A + B)
- Muestre la resta (A – B)
- Muestre el Producto de ambos (A * B)
- Muestre el Cociente entre ambos (A / B)
Nota: En este último caso, verificar que sucede cuando B es igual a cero. 
Que sucede con el programa*/
{
    let numeroA = 0;
    let numeroB = 0;

    numeroA = Number(prompt(`Ingrese el 1er número:`));
    numeroB = Number(prompt(`Ingrese el 2do número:`));

    
    let resultadoSuma = numeroA + numeroB;
    console.log(`El resultado de la suma es: ${resultadoSuma}`);

    let resultadoResta = numeroA - numeroB;
    console.log(`El resultado de la resta es: ${resultadoResta}`);

    let resultadoProducto = numeroA * numeroB;
    console.log(`El resultado del producto es: ${resultadoProducto}`);

    let resultadoDivision = (numeroA / numeroB);
    console.log(`El resultado de la división es: ${resultadoDivision}`);
}