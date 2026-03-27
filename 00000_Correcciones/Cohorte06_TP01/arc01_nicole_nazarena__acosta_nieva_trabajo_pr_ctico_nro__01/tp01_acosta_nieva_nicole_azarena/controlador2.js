/*Ejercicio Nro. 02:
Realizar un programa que permita ingresar el importe total de una compra que realiza un cliente y sobre
el mismo aplicarle un descuento del 15%. Mostrar por consola el importe total de la compra y el descuento del
15% como así también el importe restante final*/
{
let importeDeLaCompra = Number(prompt(`ingrese el importe total de la compra`));

let descuento = 0;

let importeFinal = 0;

descuento = (importeDeLaCompra * 15)/100;

importeFinal = importeDeLaCompra - descuento;

console.log(`El importe total de la compra es: ${importeDeLaCompra}`)

console.log(`El descuento es: ${descuento}`)

console.log(`El importe final es :${importeFinal}`)
}
