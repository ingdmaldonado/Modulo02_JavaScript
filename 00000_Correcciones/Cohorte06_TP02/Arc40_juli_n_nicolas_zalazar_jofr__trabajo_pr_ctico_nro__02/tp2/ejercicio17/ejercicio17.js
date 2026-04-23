{
    let huevoXl = 0;
    let huevoL = 0;
    let huevoM = 0;
    let huevoDescarte = 0;
    let huevoTotal = 0;
    let porcentajeXl = 0;
    let porcentajeL = 0;
    let porcentajeM = 0;
    let porcentajeDescarte = 0;
    let continuar = "s";

    while (continuar.toLowerCase() === "s") {
        let tipo = Number(prompt("Ingrese peso del huevo: "));
        if (tipo >= 73) {
            alert("El huevo es XL.");
            huevoXl += 1;
        } else if (tipo >= 63) {
            alert("El huevo es L.");
            huevoL += 1;
        } else if (tipo >= 53) {
            alert("El huevo es M.");
            huevoM += 1;
        } else {
            alert("El huevo es de descarte.");
            huevoDescarte += 1;
        }
        huevoTotal += 1;
        continuar = prompt("¿Desea ingresar otro huevo? (s/n): ");

    }
    if (huevoTotal > 0) {
        porcentajeXl = (huevoXl / huevoTotal) * 100;
        porcentajeL = (huevoL / huevoTotal) * 100;
        porcentajeM = (huevoM / huevoTotal) * 100;
        porcentajeDescarte = (huevoDescarte / huevoTotal) * 100;
    }

    alert(`Cantidad de huevos XL: ${huevoXl}
        Cantidad de huevos L: ${huevoL}
        Cantidad de huevos M: ${huevoM}
        Cantidad de huevos de descarte: ${huevoDescarte}
        Cantidad total de huevos: ${huevoTotal}
        Porcentaje de huevos XL respecto al total: ${porcentajeXl}%
        Porcentaje de huevos L respecto al total: ${porcentajeL}%
        Porcentaje de huevos M respecto al total: ${porcentajeM}%
        Porcentaje de huevos de descarte respecto al total: ${porcentajeDescarte}%`);
        
    console.log("Resultados:");
    console.log("Cantidad de huevos XL: " + huevoXl);
    console.log("Cantidad de huevos L: " + huevoL);
    console.log("Cantidad de huevos M: " + huevoM);
    console.log("Cantidad de huevos de descarte: " + huevoDescarte);
    console.log("Cantidad total de huevos: " + huevoTotal);
    console.log("Porcentaje de huevos XL respecto al total: " + porcentajeXl + "%");
    console.log("Porcentaje de huevos L respecto al total: " + porcentajeL + "%");
    console.log("Porcentaje de huevos M respecto al total: " + porcentajeM + "%");
    console.log("Porcentaje de huevos de descarte respecto al total: " + porcentajeDescarte + "%");
        
    }   
