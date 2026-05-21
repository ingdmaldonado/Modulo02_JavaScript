/*Ejercicio N° 19*/

export const calcularPrecioVenta = (importeCompra, margenGanancia) => {
    const precioVenta = importeCompra + (importeCompra * (margenGanancia / 100));
    return precioVenta;
}


/* Ejercicio Nro 20:*/


export const calcularPromedio = (nota1, nota2, nota3) => {
    const promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}

/* Ejercicio Nro. 21: */

export const evaluarNota = (nota) => {
    if (nota >= 0 && nota <= 4) {
        return "Desaprobado";
    } 
    else 
        if (nota > 4 && nota <= 7) {
        return "Aprobado";
    } 
    else 
        if (nota > 7 && nota <= 9) {
        return "Muy Bueno";
    } 
    else if (nota === 10) {
        return "Excelente";
    }
    return "Nota inválida";
};

/* Ejercicio Nro. 22: */


export const calcularImpuesto = (importeBase, tipoBebida) => {
    let sobreTasa = 0;
    switch (tipoBebida) {
        case 1:
            sobreTasa = (importeBase * 5) / 1000; // 5 ‰
            break;
        case 2:
            sobreTasa = (importeBase * 1) / 1000; // 1 ‰
            break;
        case 3:
            sobreTasa = (importeBase * 7) / 1000; // 7 ‰
            break;
        case 4:
            sobreTasa = (importeBase * 2) / 1000; // 2 ‰
            break;
        case 5:
            sobreTasa = (importeBase * 15) / 1000; // 15 ‰
            break;
        case 6:
            sobreTasa = (importeBase * 1) / 1000; // 1 ‰
            break;
        default:
            console.error("Tipo de bebida no válido");
    }
    return sobreTasa;
};

/* Ejercicio Nro. 23: */

export const calcularImporteAgua = (metrosCubicos) => {
    let importe = 0;
    if (metrosCubicos <= 50) {
        importe = 17500; // Importe mínimo para consumos menores o iguales a 50 metros cúbicos//
    } 
    else 
        if (metrosCubicos > 50 && metrosCubicos <= 70) 
            {
        importe = (50 * 350) + ((metrosCubicos - 50) * 555.20);
    } 
    else {
        importe = (50 * 350) + (20 * 555.20) + ((metrosCubicos - 70) * 1552.20);
    }
    return importe;
};

/* Ejercicio Nro. 24*/

export const calcularTasaSubsuelo = (importeBase) => 
    {
    const tasaSubsuelo = (importeBase * 3) / 100;
    return tasaSubsuelo;
    };

/* Ejercicio Nro. 25 */

export const calcularTasaFiscalizacion = (importeBase) => {
    const tasaFiscalizacion = (importeBase * 1.2) / 100;
    return tasaFiscalizacion;
};


/* Ejercicio Nro. 26: */


export const calcularDosisInsulina = (nivelGlucosa, pesoCorporal, tipoDiabetes) => {
    let dosisInsulina = 0;
    if (tipoDiabetes === 1) {
        dosisInsulina = (pesoCorporal * 0.5) + (nivelGlucosa > 180 ? nivelGlucosa * 0.5 : 0);
    } else if (tipoDiabetes === 2) {
        dosisInsulina = (pesoCorporal * 0.2) + (nivelGlucosa > 180 ? nivelGlucosa * 0.5 : 0);
    }
    return dosisInsulina;
    console.log(dosisInsulina);

};

/* Ejercicio Nro. 27: */

export const contarVocales = (cadena) => {
    let contadorVocales = 0;
    for (let i = 0; i < cadena.length; i=i+1) {
        const caracter = cadena[i].toLowerCase(); // Convertir a minúscula para comparar
        if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
            contadorVocales=contadorVocales+1;
        }
    }
    return contadorVocales;
};

/* Ejercicio Nro. 28: */

export const contarConsonantes = (cadena) => {
    let consonantes = 0;
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < cadena.length; i = i + 1) {
    const caracter = cadena[i].toLowerCase();
    
    // Si cumple las condiciones suma 1, de lo contrario suma 0
    (caracter >= 'a' && caracter <= 'z' && !vocales.includes(caracter)) ? consonantes=consonantes+1 : null;
}

    return consonantes;
};

/* Ejercicio Nro. 29: */

export const contarLetrasS = (palabra) => {
    let contadorS = 0;
    for (let i = 0; i < palabra.length; i=i+1) {
        const caracter = palabra[i].toLowerCase();
        if (caracter === 's') {
            contadorS=contadorS+1;
        }
    }
    return contadorS >= 2;
};


/* Ejercicio Nro. 30 */

export const contieneTresEspacios = (cadena) => {
    let contadorEspacios = 0;
    for (let i = 0; i < cadena.length; i=i+1) {

        switch (cadena[i]) {
            case ' ':
                
            contadorEspacios=contadorEspacios+1;
                
                if (contadorEspacios >= 3) {
                    
                    return true; /* Devuelve true si se encuentran al menos tres espacios */
                }
                break;
                return true;
                default:
                break;
        }
    }
    return false; /* Devuelve false si no se encuentran al menos tres espacios */
};


/* Ejercicio Nro. 31: */

export const noContieneDigitos = (cadena) => {
    switch (cadena) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            return false;
        default:
            return true;
    };
    
};
