// Ingreso de datos
let dia = prompt("Ingrese el dia de la compra");
let importecompra = Number(prompt("Ingrese el importe de la compra"));

let reintegro = 0;

if (
    dia.toLowerCase() === "viernes" ||
    dia.toLowerCase() === "sabado" ||
    dia.toLowerCase() === "domingo"
) {

    // Calcular 50% de reintegro 
    reintegro = compra * 0.5;

    // Aplicar tope máximo de $80.000
    if (reintegro > 80000) {
        reintegro = 80000;
        console.log("Aviso: Se alcanzó el tope máximo de reintegro del One Shot.");
    }

} else {
    console.log("La compra no fue realizada en un día de promoción. No se aplica el beneficio.");
}

// Calcular importe final a pagar
let totalFinal = importecompra - reintegro;

// Mostrar todos los resultados
console.log("Día de la compra: " + dia);
console.log("Importe de la compra: $" + importecompra);
console.log("Reintegro obtenido: $" + reintegro);
console.log("Total final pagado por el cliente: $" + totalFinal);