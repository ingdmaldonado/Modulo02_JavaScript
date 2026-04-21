// CONTADORES
let totalHuevos = 0;
let xl = 0;
let l = 0;
let m = 0;
let descartados = 0;

let continuar = true;

while (continuar) {

    let peso = parseFloat(prompt("Ingrese el peso del huevo en gramos:"));

    if (isNaN(peso)) {
        alert("Dato inválido");
    } else {

        totalHuevos++;

        if (peso >= 73) {
            xl++;
        } else if (peso >= 63 && peso < 73) {
            l++;
        } else if (peso >= 53 && peso < 63) {
            m++;
        } else {
            descartados++;
        }
    }

    let respuesta = prompt("¿Desea ingresar otro huevo? (s/n)");

    if (respuesta.toLowerCase() !== "s") {
        continuar = false;
    }
}

// PORCENTAJES
let porcXL = totalHuevos > 0 ? (xl * 100) / totalHuevos : 0;
let porcL = totalHuevos > 0 ? (l * 100) / totalHuevos : 0;
let porcM = totalHuevos > 0 ? (m * 100) / totalHuevos : 0;

// RESULTADOS
alert(
    "=== RESULTADOS ===\n\n" +
    "Total de huevos: " + totalHuevos + "\n\n" +
    "XL: " + xl + "\n" +
    "L: " + l + "\n" +
    "M: " + m + "\n" +
    "Descartados: " + descartados + "\n\n" +
    "% XL: " + porcXL.toFixed(2) + "%\n" +
    "% L: " + porcL.toFixed(2) + "%\n" +
    "% M: " + porcM.toFixed(2) + "%"
);