// Control
let continuar = true;
let respuesta;

// Contadores
let totalHuevos = 0;
let cantXL = 0;
let cantL = 0;
let cantM = 0;
let descartados = 0;

while (continuar) {

    let peso = parseFloat(prompt("Ingrese el peso del huevo en gramos:"));

    // Validación básica
    if (isNaN(peso) || peso < 0) {
        alert("Error: peso inválido");
    } else {

        totalHuevos++;

        // Clasificación
        if (peso >= 73) {
            cantXL++;
        } else if (peso >= 63 && peso < 73) {
            cantL++;
        } else if (peso >= 53 && peso < 63) {
            cantM++;
        } else {
            descartados++;
        }
    }

    // Preguntar si continúa
    respuesta = prompt("¿Desea ingresar otro huevo? (si/no)");

    if (respuesta.toLowerCase() !== "si") {
        continuar = false;
    }
}

// Cálculo de porcentajes
let porcXL = (cantXL * 100) / totalHuevos;
let porcL = (cantL * 100) / totalHuevos;
let porcM = (cantM * 100) / totalHuevos;

// Mostrar resultados con alert
alert(
    "=== RESULTADOS ===\n\n" +
    "Cantidad total de huevos: " + totalHuevos + "\n\n" +

    "Huevos XL: " + cantXL + "\n" +
    "Huevos L: " + cantL + "\n" +
    "Huevos M: " + cantM + "\n" +
    "Descartados: " + descartados + "\n\n" +

    "Porcentaje XL: " + porcXL.toFixed(2) + "%\n" +
    "Porcentaje L: " + porcL.toFixed(2) + "%\n" +
    "Porcentaje M: " + porcM.toFixed(2) + "%"
);
//Mostrar resultados con console.log
console.log("=== RESULTADOS ===\n\n" );
console.log("cantidad total de huevos + totalHuevos");
console.log("HuevosXL + cantXL + \n");
console.log("HuevosL + cantL + \n");
console.log("HuevosM + cantM + \n");
console.log("Descartados + descartados +\n\n");
console.log("PorcentajeXL: " + porcXL.toFixed(2) + ("%"));
console.log("PorcentajeL: " + porcL.toFixed(2) + ("%"));
console.log("PorcentajeM: " + porcM.toFixed(2) + ("%"));

    console.log("No se registraron datos");
