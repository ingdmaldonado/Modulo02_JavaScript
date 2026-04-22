// Programa de clasificación de huevos

let peso;
let continuar = "si";

// Contadores
let totalHuevos = 0;
let cantXL = 0;
let cantL = 0;
let cantM = 0;
let descartados = 0;

while (continuar.toLowerCase() == "si") {

    peso = parseFloat(prompt("Ingrese el peso del huevo en gramos:"));

    // Verificar si es un número válido
    if (isNaN(peso)) {
        alert("Peso inválido");
    } else {

        totalHuevos = totalHuevos + 1;

        // Clasificación
        if (peso >= 73) {
            cantXL = cantXL + 1;
        }

        if (peso >= 63 && peso < 73) {
            cantL = cantL + 1;
        }

        if (peso >= 53 && peso < 63) {
            cantM = cantM + 1;
        }

        if (peso < 53) {
            descartados = descartados + 1;
        }
    }

    continuar = prompt("¿Desea ingresar otro huevo? (si / no)");
}

// Cálculo de porcentajes
let porcXL = 0;
let porcL = 0;
let porcM = 0;

if (totalHuevos > 0) {
    porcXL = (cantXL * 100) / totalHuevos;
    porcL = (cantL * 100) / totalHuevos;
    porcM = (cantM * 100) / totalHuevos;
}

// Mostrar resultados
alert(
    "RESULTADOS\n\n" +
    "Total de huevos: " + totalHuevos + "\n\n" +

    "Huevos XL: " + cantXL + "\n" +
    "Huevos L: " + cantL + "\n" +
    "Huevos M: " + cantM + "\n" +
    "Descartados: " + descartados + "\n\n" +

    "Porcentaje XL: " + porcXL + "%\n" +
    "Porcentaje L: " + porcL + "%\n" +
    "Porcentaje M: " + porcM + "%"
);