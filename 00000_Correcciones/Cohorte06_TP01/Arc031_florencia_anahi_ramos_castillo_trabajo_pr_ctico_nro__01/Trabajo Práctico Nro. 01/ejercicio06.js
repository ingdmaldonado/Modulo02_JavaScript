/* Ejercicio Nro. 06: 
Estructuras Condicionales (if/else)
Banco Nación de la República Argentina, tiene una promoción muy importante para sus clientes
denominada “one shot” que consta en realizar un importante de descuento del 50% en las compras del cliente,
teniendo en cuenta que el descuento máximo a otorgar (descuento tope) es equivalente a 80.000,00 (ochenta mil
pesos argentinos).
Realice un programa que permita introducir el valor de la compra y calcular el porcentaje de descuento
sabiendo que no se puede pasar el límite establecido.
*/


function calcularDescuento() {

    // Ingreso el valor de la compra
    let compra = Number(prompt("Ingrese el valor de la compra"));

    // Calculo el 50% de descuento
    let descuento = compra * 50 / 100;

    // Verifico si supera el tope de 80.000
    if (descuento > 80000) {
        descuento = 80000;
    }

    // Calculo el total final
    let totalFinal = compra - descuento;

    // Muestro los resultados
    console.log(`Importe de la compra: ${compra}`);
    console.log(`Descuento aplicado: ${descuento}`);
    console.log(`Total a pagar: ${totalFinal}`);
}