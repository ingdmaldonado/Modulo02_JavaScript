/*

Ejercicio Nro. 06: Estructuras Condicionales (if/else)
Banco Nación de la República Argentina, tiene una promoción muy importante para sus clientes denominada “one shot” que consta en realizar un importante de descuento del 50% en las compras del cliente, teniendo en cuenta que el descuento máximo a otorgar (descuento tope) es equivalente a 80.000,00 (ochenta mil pesos argentinos).
Realice un programa que permita introducir el valor de la compra y calcular el porcentaje de descuento sabiendo que no se puede pasar el límite establecido.

*/

{

let ImporteDeCompra = 0;
let PorcDescuento = 50;
let MontoDescuento = 0;
let MontoTope = 80000;
let ImporteTotaslAPagar = 0;

ImporteDeCompra = Number(prompt(`Por favor ingrese Nonto de la Compra:`));
console.log(`El importe de compra Ingresadp es ${ImporteDeCompra}`);

MontoDescuento = (ImporteDeCompra * PorcDescuento) / 100;

MontoDescuento = MontoDescuento > MontoTope? MontoTope:(ImporteDeCompra * PorcDescuento) / 100;
console.log(`El importe del Descuento aplicado es ${MontoDescuento}`);

ImporteTotaslAPagar = ImporteDeCompra - MontoDescuento;
console.log(`El importe Total a Pagar ${ImporteTotaslAPagar}`);

}