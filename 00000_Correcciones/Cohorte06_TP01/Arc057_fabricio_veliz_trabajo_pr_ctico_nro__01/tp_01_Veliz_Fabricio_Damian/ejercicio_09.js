/*
Ejercicio Nro. 09: Estructuras Condicionales (if/else)
Si la cantidad de Pasajes es mayor a 3 y el importe total de la compra es mayor a 250.000,00 pesos,
se aplicará un descuento del 11%. Si es mayor a 500.000,00 pesos, un 15%.
Registrar: cantidad pasajes, importe pasaje, total compra.
*/
{
    let cantidadPasajes = 0;
    let importePasaje = 0;

    cantidadPasajes = Number(prompt("Ingrese la cantidad de pasajes:"));
    importePasaje = Number(prompt("Ingrese el importe por pasaje:"));

    let totalCompra = 0;
    let descuento = 0;
    let totalPagar = 0;

    totalCompra = cantidadPasajes * importePasaje;

    if (cantidadPasajes > 3 && totalCompra > 500000) {
        descuento = totalCompra * 0.15;
    } else if (cantidadPasajes > 3 && totalCompra > 250000) {
        descuento = totalCompra * 0.11;
    }

    totalPagar = totalCompra - descuento;

    console.log(`Cantidad de pasajes: ${cantidadPasajes}, Importe por pasaje: $${importePasaje}. Total compra: $${totalCompra}. Descuento aplicado: $${descuento}. Total a pagar: $${totalPagar}`);
}