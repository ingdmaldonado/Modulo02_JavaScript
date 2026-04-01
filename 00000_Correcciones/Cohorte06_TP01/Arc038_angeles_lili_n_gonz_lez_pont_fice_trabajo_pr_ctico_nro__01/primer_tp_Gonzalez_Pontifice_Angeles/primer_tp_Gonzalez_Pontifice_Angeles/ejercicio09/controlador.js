/*
Ejercicio Nro. 09: Estructuras Condicionales (if/else)
Una plataforma de venta de pasajes (terrestres) desea realizar una aplicación web que permita realizar la venta de los mismos, para ello el dueño propone las siguientes reglas tratando de promover las ventas.
Si la cantidad de Pasajes es mayor a 3 y el importe total de la compra es mayor a 250.000,00 pesos, se aplicará un descuento del 11% sobre el total de la compra.
Si la cantidad de pasajes es mayor a 3 y el importe total de la compra es mayor a 500.000,00 pesos, se aplicará un descuento del 15% sobre el total de la compra.
El Sistema debe registrar mínimamente estas variables:
cantidad de pasajes
importe pasaje
total compra = cantidad de pasajes * importe pasaje
*/

//solicitar la cantidad de pasajes//
let cantidad = 0;
cantidad = Number(prompt("Ingrese la cantidad de pasajes a comprar (debe ser mayor a 0):"));

//solicitar el importe por pasaje//
let importePasaje = 0;
importePasaje = Number(prompt("Ingrese el importe de cada pasaje (en pesos):"));

//calcular el total de la compra
let totalCompra = cantidad * importePasaje;

//variables para guardar el descuento y el total final a pagar
let descuento = 0;
let totalFinal = totalCompra;
let porcentajeDescuento = 0;

//determinar si corresponde descuento (if/else)//
if (cantidad > 3) {
    if (totalCompra > 500000) {
        porcentajeDescuento = 15;
        descuento = totalCompra * 0.15;
        totalFinal = totalCompra - descuento;
        console.log("¡Descuento del 15% aplicado! (más de 3 pasajes y total > 500.000)");
    } else if (totalCompra > 250000) {
        porcentajeDescuento = 11;
        descuento = totalCompra * 0.11;
        totalFinal = totalCompra - descuento;
        console.log("¡Descuento del 11% aplicado! (más de 3 pasajes y total > 250.000)");
    } else {
        console.log("No corresponde descuento (cantidad > 3 pero total <= 250.000)");
    }
} else {
    console.log("No corresponde descuento (cantidad de pasajes <= 3)");
}

//mostrar resultados solo si los datos son válidos
if (cantidad > 0 && importePasaje > 0) {
    console.log(`Cantidad de pasajes: ${cantidad}`);
    console.log(`Importe por pasaje: $${importePasaje}`);
    console.log(`Total de la compra (sin descuento): $${totalCompra}`);
    
    if (porcentajeDescuento > 0) {
        console.log(`Descuento aplicado: ${porcentajeDescuento}% → $${descuento}`);
    }
    
    console.log(`Total a pagar: $${totalFinal}`);
} else {
    console.log("Datos inválidos. La cantidad y el importe deben ser mayores a 0.");
}