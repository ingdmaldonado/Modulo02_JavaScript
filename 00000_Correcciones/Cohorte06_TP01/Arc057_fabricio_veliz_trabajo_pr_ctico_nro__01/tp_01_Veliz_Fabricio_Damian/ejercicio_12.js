/*
Ejercicio Nro. 12: Estructuras Condicionales (if/else)
Programa One Shot Plus Catamarca. 50% de reintegro, tope $80.000. 
Válido para viernes, sábado y domingo.
Mostrar: día, importe, reintegro e importe final.
*/
{
    let diaCompra = "";
    let importeCompra = 0;

    diaCompra = prompt("Ingrese el día de la compra (ej: viernes, lunes):").toLowerCase();
    importeCompra = Number(prompt("Ingrese el importe de la compra:"));

    let reintegro = 0;
    let importeFinal = 0;

    if (diaCompra === "viernes" || diaCompra === "sábado" || diaCompra === "sabado" || diaCompra === "domingo") {
        reintegro = importeCompra * 0.50;
        
        if (reintegro > 80000) {
            reintegro = 80000;
        }
    }

    importeFinal = importeCompra - reintegro;

    console.log(`Día: ${diaCompra}. Importe: $${importeCompra}. Reintegro obtenido: $${reintegro}. Importe final pagado: $${importeFinal}`);
}