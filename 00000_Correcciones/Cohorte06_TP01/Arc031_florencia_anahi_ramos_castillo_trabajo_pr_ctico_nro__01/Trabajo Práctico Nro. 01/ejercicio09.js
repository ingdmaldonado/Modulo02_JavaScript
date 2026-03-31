/* Ejercicio Nro. 09: 
Estructuras Condicionales (if/else)
Una plataforma de venta de pasajes (terrestres) desea realizar una aplicación web que
permita realizar la venta de los mismos, para ello el dueño propone las siguientes reglas tratando
de promover las ventas.
 Si la cantidad de Pasajes es mayor a 3 y el importe total de la compra es mayor a 250.000,00 pesos,
se aplicará un descuento del 11% sobre el total de la compra.
 Si la cantidad de pasajes es mayor a 3 y el importe total de la compra es mayor a 500.000,00 pesos,
se aplicará un descuento del 15% sobre el total de la compra.
El Sistema debe registrar mínimamente estas variables:
 cantidad de pasajes
 importe pasaje
 total compra = cantidad de pasajes * importe pasaje 
*/


function calcularPasajes() {

    // Ingreso de datos
    let cantidad = Number(prompt("Ingrese la cantidad de pasajes"));
    let importe = Number(prompt("Ingrese el precio por pasaje"));

    // Calculo total
    let total = cantidad * importe;
    let descuento = 0;

    // Aplico condiciones
    if (cantidad > 3 && total > 500000) {
        descuento = total * 15 / 100;
    } else if (cantidad > 3 && total > 250000) {
        descuento = total * 11 / 100;
    }

    // Calculo total final
    let totalFinal = total - descuento;

    // Muestro resultados
    console.log(`Cantidad de pasajes: ${cantidad}`);
    console.log(`Precio por pasaje: ${importe}`);
    console.log(`Total sin descuento: ${total}`);
    console.log(`Descuento aplicado: ${descuento}`);
    console.log(`Total a pagar: ${totalFinal}`);
}