/* Ejercicio Nro. 06: Estructuras Condicionales (if/else)
Banco Nación de la República Argentina, tiene una promoción muy importante para sus clientes
denominada “one shot” que consta en realizar un importante de descuento del 50% en las compras del cliente,
teniendo en cuenta que el descuento máximo a otorgar (descuento tope) es equivalente a 80.000,00 (ochenta mil
pesos argentinos).
Realice un programa que permita introducir el valor de la compra y calcular el porcentaje de descuento
sabiendo que no se puede pasar el límite establecido. */

valorCompra = Number(prompt("Ingrese el valor de la compra:"));
topeDescuento = 80000;
descuento=0.50;

if (valorCompra * descuento > topeDescuento) {
    descuentoAplicado = topeDescuento;
} else {
    descuentoAplicado = valorCompra * descuento;
}
importeFinal = valorCompra - descuentoAplicado;
console.log(`Usted realizo una compra por un valor de $${valorCompra}, el descuento aplicado es de $${descuentoAplicado} y el importe final a pagar es de $${importeFinal}.`)