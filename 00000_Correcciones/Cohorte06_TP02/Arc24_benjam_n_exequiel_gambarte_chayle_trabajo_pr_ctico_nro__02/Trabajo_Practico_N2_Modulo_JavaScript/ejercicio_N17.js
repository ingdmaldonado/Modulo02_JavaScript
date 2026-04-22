let cantXL = 0;
let cantL = 0;
let cantM  = 0;
let descartados = 0;

let continuar = true;

while (continuar) {
    let entrada = prompt("Ingrese el peso del huevo en gramos (o '0' para finalizar):");
    let peso = parseFloat(entrada);

    if (peso === 0 || isNaN(peso)) {
        continuar = false
    } else {
        if (peso >= 73) {
            cantXL++;
            alert("Peso: XL");
        } else if (peso >= 63 && peso < 73) {
            cantL++;
            alert("Peso: L");
        } else if (peso >= 53 && peso < 63) {
            cantM++;
            alert("Peso: M");
        } else {
            descartados++;
            alert("Clasificacion: DESCARTADOS");
        }
    }

    if (continuar) {
        let rta = prompt("¿Desea cargar otro huevo? (si/no)").toLocaleLowerCase();
        if (rta !== "si" && rta !== "s") {
            continuar = false
        }
    }
}

let totalDeHuevos = cantXL + cantL + cantM + descartados;

if (totalDeHuevos > 0) {
    let porcentajeXL = (cantXL / totalDeHuevos) * 100;
    let porcentajeL = (cantL / totalDeHuevos) * 100;
    let porcentajeM = (cantM / totalDeHuevos) * 100;

    console.log("---REPORTE DE CLASIFICACION---");
    console.log("1)Total de huevos procesados: " + totalDeHuevos);
    console.log("2)Cantidad XL: " + cantXL);
    console.log("3)Cantidad L: " + cantL);
    console.log("4)Cantidad M: " + cantM);
    console.log("5)Cantidad de huevos descartados: " + descartados);
    console.log("6)% de huevos XL: " + porcentajeXL.toFixed(2) + ("%"));
    console.log("7)% de huevos L: " + porcentajeL.toFixed(2) + ("%"));
    console.log("8)% de huevos M: " + porcentajeM.toFixed(2) + ("%"));
} else {
    console.log("No se registraron datos");
}