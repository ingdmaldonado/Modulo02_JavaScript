/* Ejercicio Nro. 01: 

Realizar un programa que permita el Ingreso de 2 (dos números) (A y B) utilizando variables y realice las 
siguientes operaciones. 
       
    - Muestre la suma de ambos (A + B) 
    - Muestre la resta (A – B) 
    - Muestre el Producto de ambos (A * B) 
    - Muestre el Cociente entre ambos (A / B) 

Nota: En este último caso, verificar que sucede cuando B es igual a cero. Que sucede con el programa

*/

{
    let numeroA = 0;
    numeroA = Number(prompt(`Ingrese el numero A:`));
    console.log(`Numero A:`, numeroA);

    let numeroB = 0;
    numeroB = Number(prompt(`Ingrese el numero B:`));
    console.log(`Numero B:`, numeroB);

    let suma = 0;
    suma = numeroA + numeroB;
    console.log(`La suma A + B es:`, suma);

    let resta = 0;
    resta = numeroA - numeroB;
    console.log(`La resta A - B es:`, resta);

    let multiplicacion = 0;
    multiplicacion = numeroA * numeroB;
    console.log(`La multiplicacion A * B es:`, multiplicacion);

    if (numeroB === 0) 
    {
        console.log("No se puede dividir por 0");
    } else 
    {
        let dividir = 0;
        dividir = numeroA / numeroB;
        console.log(`La division A / B es:`, dividir);
    }

    /* lo que sucede cuando el numero B es igual a cero es que el programa tira un "infinity" (infinito) si el numero A y el numero B son iguales a cero el programa tira un NaN */


}