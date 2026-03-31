/*
Ejercicio Nro. 06: Estructuras Condicionales (if/else)
Banco Nación de la República Argentina, tiene una promoción muy importante para sus clientes
denominada “one shot” que consta en realizar un importante de descuento del 50% en las compras del cliente,
teniendo en cuenta que el descuento máximo a otorgar (descuento tope) es equivalente a 80.000,00 (ochenta mil
pesos argentinos).
Realice un programa que permita introducir el valor de la compra y calcular el porcentaje de descuento
sabiendo que no se puede pasar el límite establecido.
*/

// Valor de compra del usuario
let valorCompra = 0;
valorCompra = Number(prompt(`Ingresar el VALOR DE LA COMPRA:`));

// Calculo de % descuento
let descuento = valorCompra * 0.5;

// Tope de descuento
let topeDescuento = 80000;

    // Verificar si el descuento supera el tope
    if(descuento > topeDescuento) {
        descuento= topeDescuento;
    }

    console.log(`Valor de la compra: ${valorCompra}`);
    console.log(`Descuento aplicado: ${descuento}`);
    // console.log(`Tope de descuento: ${topeDescuento}`);
    console.log(`Importe final a pagar: ${valorCompra - descuento}`)