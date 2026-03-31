/* Ejercicio Nro. 01:
Realizar un programa que permita el Ingreso de 2 (dos números) (A y B) utilizando variables y realice las
siguientes operaciones.
- Muestre la suma de ambos (A + B)
- Muestre la resta (A – B)
- Muestre el Producto de ambos (A * B)
- Muestre el Cociente entre ambos (A / B)
Nota: En este último caso, verificar que sucede cuando B es igual a cero. Que sucede con el programa
*/


function calcular() {

    // Ingreso dos numeros
    let A = Number(prompt("Ingrese el número A"));
    let B = Number(prompt("Ingrese el número B"));

    // Realizo las operaciones
    let suma = A + B;
    let resta = A - B;
    let producto = A * B;

    //Muestro los resultados
    console.log(`La suma de A y B es: ${suma}`);
    console.log(`La resta de A y B es: ${resta}`);
    console.log(`El producto de A y B es: ${producto}`);

    // Verifico división por cero
    if (B === 0) {
        console.log("No se puede dividir por cero");
    } else {
        let cociente = A / B;
        console.log(`El cociente de A y B es: ${cociente}`);
    }
}