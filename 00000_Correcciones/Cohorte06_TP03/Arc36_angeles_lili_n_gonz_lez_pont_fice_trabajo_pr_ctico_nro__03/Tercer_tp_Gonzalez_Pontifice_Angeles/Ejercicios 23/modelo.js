
export const calcularImporteAgua = (metrosCubicos) => {
    
    // Mínimo facturable es 50 m³ aunque se consuma menos
    let consumo = metrosCubicos;
    if (consumo < 50) {
        consumo = 50;
    }

    let importeTotal = 0;

    // Bloque 1: Primeros 50 m³ a $350 cada uno//
    if (consumo <= 50) {
        importeTotal = consumo * 350;
        return importeTotal;
    } 
    else {
        // Siempre cobramos los primeros 50 m³//
        importeTotal = 50 * 350;
        
        // Bloque 2: Desde 51 hasta 70 m³ a $555.20//
        let metrosBloque2 = consumo - 50;
        if (metrosBloque2 > 20) {
            metrosBloque2 = 20;   // máximo 20 m³ en este bloque//
        }
        importeTotal += metrosBloque2 * 555.20;
        
        // Bloque 3: Excedente mayor a 70 m³ a $1.552,20//
        let metrosExcedente = consumo - 70;
        if (metrosExcedente > 0) {
            importeTotal += metrosExcedente * 1552.20;
        }
    }

    return importeTotal;
};