/* TP - EJERCICIO NRO. 01
   Realizar un programa que permita el Ingreso de 2 (dos números) (A y B) utilizando variables y realice las
siguientes operaciones.
- Muestre la suma de ambos (A + B)
- Muestre la resta (A – B)
- Muestre el Producto de ambos (A * B)
- Muestre el Cociente entre ambos (A / B)

Nota: En este último caso, verificar que sucede cuando B es igual a cero. Que sucede con el programa
*/

{
    let A = 0;
    A = Number(prompt("Señor ingrese el valor del numero A"));

    let B = 0;
    B = Number(prompt("Señor ingrese el valor del numero B"));

    let suma     = (A + B);
    let resta    = (A - B);
    let producto = (A * B);

    if(B !== 0)
    {
        let division = (A / B);
        console.log(`Division: ${division}`);
    }
    else
    {
        console.log(`División no posible - B es igual a cero`);
    }

    console.log(`Suma: ${suma}`);
    console.log(`Resta: ${resta}`);
    console.log(`Producto: ${producto}`);
}
