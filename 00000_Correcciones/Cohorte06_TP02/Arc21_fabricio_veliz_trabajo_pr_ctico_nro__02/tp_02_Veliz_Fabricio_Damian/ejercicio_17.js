/*
Ejercicio Nro. 17:
Clasificadora de huevos según peso:
a) XL: >= 73g | b) L: >= 63g y < 73g | c) M: >= 53g y < 63g | Descartados: el resto.
Determinar totales y porcentajes.
*/
{
    let peso = 0;
    let cantTotal = 0;
    let cantXL = 0;
    let cantL = 0;
    let cantM = 0;
    let cantDescartados = 0;
    let continuar = "s";

    while (continuar.toLowerCase() === "s") {
        peso = Number(prompt("Ingrese el peso del huevo en gramos:"));
        cantTotal++;

        if (peso >= 73) {
            cantXL++;
        } else if (peso >= 63 && peso < 73) {
            cantL++;
        } else if (peso >= 53 && peso < 63) {
            cantM++;
        } else {
            cantDescartados++;
        }

        continuar = prompt("¿Desea ingresar otro huevo? (s/n)");
    }

    let porcXL = 0;
    let porcL = 0;
    let porcM = 0;

    if (cantTotal > 0) {
        porcXL = (cantXL * 100) / cantTotal;
        porcL = (cantL * 100) / cantTotal;
        porcM = (cantM * 100) / cantTotal;
    }

    console.log(`--- REPORTE DE CLASIFICACIÓN DE HUEVOS ---`);
    console.log(`1) Cantidad total de Huevos procesados: ${cantTotal}`);
    console.log(`2) Cantidad total de Huevos XL: ${cantXL}`);
    console.log(`3) Cantidad total de Huevos L: ${cantL}`);
    console.log(`4) Cantidad total de Huevos M: ${cantM}`);
    console.log(`5) Cantidad total de Huevos descartados: ${cantDescartados}`);
    console.log(`6) % de Huevos XL sobre el Total: ${porcXL.toFixed(2)}%`);
    console.log(`7) % de Huevos L sobre el Total: ${porcL.toFixed(2)}%`);
    console.log(`8) % de Huevos M sobre el Total: ${porcM.toFixed(2)}%`);
}