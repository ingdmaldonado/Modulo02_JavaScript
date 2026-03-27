let dia = prompt("Ingrese el día de la compra");
let compra = Number(prompt("Ingrese el importe de la compra"));

let reintegro = 0;

// verificar día válido
if (
    dia.toLowerCase() === "viernes" ||
    dia.toLowerCase() === "sabado" ||
    dia.toLowerCase() === "domingo"
) {

    // calcular 50% de reintegro
    reintegro = compra * 0.5;

    // aplicar tope de $80.000
    if (reintegro > 80000) {
        reintegro = 80000;
    }

} else {
    console.log("No se aplica el beneficio");
}

// calcular importe final
let totalFinal = compra - reintegro;

// mostrar resultados
console.log("Día: " + dia);
console.log("Importe de la compra: $" + compra);
console.log("Reintegro obtenido: $" + reintegro);
console.log("Total pagado: $" + totalFinal);