
/* 

Realizar un programa que permita el ingreso de dos números (A,B) y 
realizar el producto entre ambos (A * B); si el resultado del producto 
es mayor a 100 calcular el 10% del resultado y mostrarlo por pantalla;
caso contrario calcular el 5% del producto y mostrarlo por pantalla.
	Ejemplo1: Si al programa le ingresamos los números (10 y 15) el resultado del producto será igual a 150 (como el resultado supera los 100 debemos obtener el 10% y mostrarlo por pantalla); en este caso el 10% de 150 es igual a 15.
	Ejemplo2: Si al programa le ingresamos los números (8 y 5) el resultado del producto será igual a 40 (como el resultado NO SUPERA los 100 debemos obtener el  5% y mostrarlo por pantalla); en este caso el 5% de 40 es igual a 2.


*/

{

    // aqui voy a realizar el programa //

    let A = 0; // declaro e inicilizo la variable en 0
    let B = 0; // declaro e inicializo la variable en 0

    A = Number(prompt("Por favor ingrese el valor de A"));
    B = Number(prompt("Por favor ingrese el valor de B"));

    console.log(A);
    console.log(B);

    if(A * B > 100)
    {
        let calculoDiezPorCiento = 0;
        calculoDiezPorCiento = (A * B) * 10/100;
        console.log(`El producto de a = ${A} y b = ${B} y su producto es = ${A*B} es MAYOR a 100 y su diez por ciento es ${calculoDiezPorCiento}`);
    }
    else 
    {
        let calculoCincoPorCiento = 0;
        calculoCincoPorCiento = (A * B)* 5/100;
        console.log(`El producto de a = ${A} y b = ${B} y su producto es = ${A*B} es MENOR a 100 y su diez por ciento es ${calculoCincoPorCiento}`);
    }



}