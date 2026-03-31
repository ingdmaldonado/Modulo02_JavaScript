/* Ejercicio Nro. 02:
Realizar un programa que permita ingresar el importe total de una compra que realiza un cliente y sobre
el mismo aplicarle un descuento del 15%. Mostrar por consola el importe total de la compra y el descuento del
15% como así también el importe restante final.
*/


function calcularDescuento() {

    // Ingreso el importe total de la compra
    let importe = Number(prompt("Ingrese el importe total de la compra"));

    // Realizo los cálculos
    let descuento = importe * 0.15;
    let totalFinal = importe - descuento;

    // Muestro los resultados
    console.log(`Importe total: ${importe}`);
    console.log(`Descuento (15%): ${descuento}`);
    console.log(`Importe final a pagar: ${totalFinal}`);
}