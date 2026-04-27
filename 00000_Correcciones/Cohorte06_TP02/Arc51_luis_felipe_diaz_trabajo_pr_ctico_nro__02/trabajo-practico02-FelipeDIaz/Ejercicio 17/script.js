{
    // Inicialización de contadores
    let cantXL = 0;
    let cantL = 0;
    let cantM = 0;
    let cantDescartados = 0;
    let totalHuevos = 0;

   
    // Ciclo para ingresar los pesos.
    let continuar = "SI";

    while (continuar.toUpperCase() === "SI") {
        let peso = Number(prompt("Ingrese el peso del huevo en gramos:"));

        if (isNaN(peso) || peso <= 0) {
            alert("Por favor, ingrese un peso válido.");
        } else {
            totalHuevos++;

            // Clasificación segun los rangos del frigorífico
            if (peso >= 73) {
                cantXL++;
                console.log("Peso: " + peso + "g -> Categoría: XL");
            } else if (peso >= 63 && peso < 73) {
                cantL++;
                console.log("Peso: " + peso + "g -> Categoría: L");
            } else if (peso >= 53 && peso < 63) {
                cantM++;
                console.log("Peso: " + peso + "g -> Categoría: M");
            } else {
                cantDescartados++;
                console.log("Peso: " + peso + "g -> DESCARTADO");
            }
        }

        continuar = prompt("¿Desea ingresar otro huevo? (SI/NO)");
    }

    // Cálculos de porcentajes
    let porcXL = 0, porcL = 0, porcM = 0;

    if (totalHuevos > 0) {
        porcXL = (cantXL / totalHuevos) * 100;
        porcL = (cantL / totalHuevos) * 100;
        porcM = (cantM / totalHuevos) * 100;
    }

    // Informe final de balanza
    console.log("--- REPORTE DE CLASIFICACIÓN ---");
    console.log("1) Cantidad total de Huevos: " + totalHuevos);
    console.log("2) Cantidad total de Huevos XL: " + cantXL);
    console.log("3) Cantidad total de Huevos L: " + cantL);
    console.log("4) Cantidad total de Huevos M: " + cantM);
    console.log("5) Cantidad total de Huevos descartados: " + cantDescartados);
    console.log("6) % de Huevos XL sobre el Total: " + porcXL.toFixed(2) + "%");
    console.log("7) % de Huevos L sobre el Total: " + porcL.toFixed(2) + "%");
    console.log("8) % de Huevos M sobre el Total: " + porcM.toFixed(2) + "%");
}