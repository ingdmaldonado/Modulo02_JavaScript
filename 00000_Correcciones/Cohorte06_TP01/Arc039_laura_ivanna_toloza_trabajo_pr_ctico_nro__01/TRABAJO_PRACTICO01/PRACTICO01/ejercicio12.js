/* Ejercicio Nro. 12: Estructuras Condicionales (if/else)
El programa One Shot Plus fue un beneficio implementado en la provincia de Catamarca en conjunto con el Banco Nación para incentivar el consumo en comercios locales.
El beneficio consistía en:
 50% de reintegro sobre el monto de la compra
 tope máximo de reintegro: $80.000
 válido para compras realizadas los días viernes, sábado y domingo
El programa debe:
1. Solicitar al usuario:
 el día de la compra
 el importe de la compra
2. Verificar si la compra fue realizada un viernes, sábado o domingo.
 Si no fue uno de esos días, no se aplica el beneficio.
3. Si corresponde el beneficio:
 calcular el 50% del importe de la compra
 verificar si el reintegro supera el tope de $80.000
 si lo supera, aplicar solamente el tope
4. Mostrar:
 día de la compra
 importe de la compra
 reintegro obtenido
 importe final pagado por el cliente. */

let diaCompra = 0;
diaCompra = prompt("ingrese el día de la compra: viernes, sábado o domingo");

let importeCompra = 0;
importeCompra = Number(prompt("ingrese el importe de la compra:"))

if (diaCompra === "viernes" || diaCompra === "sábado" || diaCompra === "domingo") {
    let reintegro = (importeCompra * 50) / 100;
    if (reintegro > 80000) {
        reintegro = 80000;
    }
    let importeFinal = importeCompra - reintegro;
    console.log(`el día de la compra es: ${diaCompra} el importe de la compra es: ${importeCompra} el reintegro obtenido es: ${reintegro} y el importe final a pagar es: ${importeFinal}`);
}
else {
    console.log("el descuento no se aplica al dia de la compra");
}