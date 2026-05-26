let cantidadPasajes = Number(prompt("Ingrese cantidad de pasajes"));
let importePasaje = Number(prompt("Ingrese precio de pasaje"));
let totalCompra = cantidadPasajes * importePasaje;
let descuento = 0;
let montoDescuento = 0;

if (cantidadPasajes > 3)
{
    if (totalCompra > 250000)
        descuento = 11;
    if (totalCompra > 500000)
        descuento = 15;
}

montoDescuento = (descuento * totalCompra) / 100;

console.log("Cantidad de pasajes: " + cantidadPasajes);
console.log("Importe de cada pasaje: " + importePasaje);
console.log("Total de la compra: " + totalCompra);
console.log(`Descuento: ${descuento}% (${montoDescuento})`);
console.log(`Importe final: ${totalCompra - montoDescuento}`);