{

    let cantidadHuevosExtraGrandesXL = 0;
    let cantidadHuevosGrandesL = 0;
    let cantidadHuevosMedianosM = 0;
    let cantidadHuevosDescartados = 0;
    let cantidadTotalHuevosClasificados = 0;
    
    let maquinaClasificadoraEncendida = true;
    
    while (maquinaClasificadoraEncendida) {
        let pesoDelHuevoEnGramos = parseFloat(prompt("Ingrese el peso del huevo detectado por la balanza en gramos (o ingrese el número 0 para detener la cinta transportadora):"));
    
        if (pesoDelHuevoEnGramos === 0) {
            maquinaClasificadoraEncendida = false;
        } else if (pesoDelHuevoEnGramos >= 73) {
            cantidadHuevosExtraGrandesXL++;
            cantidadTotalHuevosClasificados++;
        } else if (pesoDelHuevoEnGramos >= 63 && pesoDelHuevoEnGramos < 73) {
            cantidadHuevosGrandesL++;
            cantidadTotalHuevosClasificados++;
        } else if (pesoDelHuevoEnGramos >= 53 && pesoDelHuevoEnGramos < 63) {
            cantidadHuevosMedianosM++;
            cantidadTotalHuevosClasificados++;
        } else if (pesoDelHuevoEnGramos > 0 && pesoDelHuevoEnGramos < 53) {
            cantidadHuevosDescartados++;
            cantidadTotalHuevosClasificados++;
        } else {
            console.log("Error de lectura: El peso detectado por la balanza es inválido.");
        }
    }
    
    if (cantidadTotalHuevosClasificados > 0) {
        let porcentajeHuevosExtraGrandesXL = (cantidadHuevosExtraGrandesXL * 100) / cantidadTotalHuevosClasificados;
        let porcentajeHuevosGrandesL = (cantidadHuevosGrandesL * 100) / cantidadTotalHuevosClasificados;
        let porcentajeHuevosMedianosM = (cantidadHuevosMedianosM * 100) / cantidadTotalHuevosClasificados;
    
        console.log(`
    --- REPORTE ESTADÍSTICO DE CLASIFICACIÓN DE HUEVOS ---
    1) Cantidad Total de Huevos evaluados por la balanza: ${cantidadTotalHuevosClasificados}
    2) Cantidad de Huevos Categoría XL (Súper Grandes): ${cantidadHuevosExtraGrandesXL}
    3) Cantidad de Huevos Categoría L (Grandes): ${cantidadHuevosGrandesL}
    4) Cantidad de Huevos Categoría M (Medianos): ${cantidadHuevosMedianosM}
    5) Cantidad de Huevos Descartados (Fuera de rango): ${cantidadHuevosDescartados}
    
    Distribución Porcentual sobre el total procesado:
    6) Porcentaje de Huevos Categoría XL: ${porcentajeHuevosExtraGrandesXL.toFixed(2)}%
    7) Porcentaje de Huevos Categoría L: ${porcentajeHuevosGrandesL.toFixed(2)}%
    8) Porcentaje de Huevos Categoría M: ${porcentajeHuevosMedianosM.toFixed(2)}%
        `);
    } else {
        console.log("El proceso finalizó sin haber clasificado ningún huevo en la cinta transportadora.");
    }
    }