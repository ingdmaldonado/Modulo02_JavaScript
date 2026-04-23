// Programa que clasifica huevos por peso y calcula porcentajes: XL, L, M y descartados
{
    // Rangos según enunciado
    const MIN_XL = 73;   // XL: >= 73
    const MIN_L = 63;    // L: 63 a 72
    const MIN_M = 53;    // M: 53 a 62
    // Descartados: < 53

    let cantidadHuevos = 0;
    let CantidadHuevosXL = 0;
    let CantidadHuevosL = 0;
    let CantidadHuevosM = 0;
    let CantidadDescartados = 0;   
    
    let pesoHuevo = 0;

    // Mensaje breve de instrucción
    alert("Clasificación: XL ≥ 73 | L 63 - 72 | M 53 - 62 | Descartados <53\n Para terminar ingrese 0 o un número negativo.");

    do {
        pesoHuevo = Number(prompt("Peso del huevo (gramos):"));

        if (pesoHuevo > 0) {
            cantidadHuevos++;
            if (pesoHuevo >= MIN_XL) {
                CantidadHuevosXL++;
            } else if (pesoHuevo >= MIN_L) {
                CantidadHuevosL++;
            } else if (pesoHuevo >= MIN_M) {
                CantidadHuevosM++;
            } else {
                CantidadDescartados++;
            }            
        }        
    } while (pesoHuevo > 0);
    
    // Mostrar resultados
    console.log(`Cantidad total de huevos: ${cantidadHuevos}`);
    console.log(`Huevos XL "super Grandes": ${CantidadHuevosXL}`);
    console.log(`Huevos L "Grandes": ${CantidadHuevosL}`);
    console.log(`Huevos M "Medianos": ${CantidadHuevosM}`);
    console.log(`Descartados: ${CantidadDescartados}`);

    if (cantidadHuevos > 0) {
        console.log(`% XL: ${((CantidadHuevosXL / cantidadHuevos) * 100).toFixed(2)}%`);
        console.log(`% L: ${((CantidadHuevosL / cantidadHuevos) * 100).toFixed(2)}%`);
        console.log(`% M: ${((CantidadHuevosM / cantidadHuevos) * 100).toFixed(2)}%`);
    } else {
        console.log("No se ingresaron huevos válidos.");
    }
}