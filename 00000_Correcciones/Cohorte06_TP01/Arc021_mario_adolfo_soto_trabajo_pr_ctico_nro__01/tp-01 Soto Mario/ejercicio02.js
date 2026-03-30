/*Realizar un programa que permita ingresar el importe total de una compra que realiza un cliente y sobre
el mismo aplicarle un descuento del 15%. Mostrar por consola el importe total de la compra y el descuento del
15% como así también el importe restante finaL*/
{
let importeTotalCompra = 0;
importeTotalCompra = Number(prompt('Ingrese el monto de compra'));
let descuento = (importeTotalCompra * 15)/100;
let totalApagar = importeTotalCompra - descuento;
console.log("el importe total de la compra es"+importeTotalCompra, 'Descuento aplicado' +descuento, 'El importe tola a pagar' +totalApagar);
}