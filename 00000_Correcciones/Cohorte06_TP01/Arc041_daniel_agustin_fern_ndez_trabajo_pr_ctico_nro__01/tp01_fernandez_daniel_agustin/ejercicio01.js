/*

Ejercicio Nro. 01:
Realizar un programa que permita el Ingreso de 2 (dos números) (A y B) utilizando variables y realice las
siguientes operaciones.
- Muestre la suma de ambos (A + B)
- Muestre la resta (A – B)
- Muestre el Producto de ambos (A * B)
- Muestre el Cociente entre ambos (A / B)

*/

{
    let numeroA = 0;
    let numeroB = 0;

    numeroA = Number(prompt(`Ingrese primer numero`));
    numeroB = Number(prompt(`Ingrese segundo numero`));

    let suma = (numeroA+numeroB);
    let resta = (numeroA-numeroB);
    let producto = (numeroA*numeroB);
    
    console.log(`La suma es de: ${suma}`);
    console.log(`La resta es de: ${resta}`);
    console.log(`El producto es de: ${producto}`);

    if(numeroB !== 0)
    {
        let cociente = (numeroA/numeroB);
        console.log(`El cociente es de: ${cociente}`);
    }
    else
    {
        console.log(`No se puede dividir`);
    }
}