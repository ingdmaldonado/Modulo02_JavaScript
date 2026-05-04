export const fnCalcularImporteAgua = (metrosCubicos)=>{

    let importeBase = 0;

    if(metrosCubicos <= 50){ // primer bloque
        importeBase = 50 * 350.00;
    }
    else if((metrosCubicos > 50) && (metrosCubicos <= 70)){ // segundo bloque
        importeBase = (50 * 350.00) + ((metrosCubicos - 50) * 555.20);
    }
    else if(metrosCubicos > 70){ // bloques excedente
        importeBase = (50 * 350.00) + (20 * 555.20) + ((metrosCubicos - 70) * 1552.20);
    }

    return importeBase;


};