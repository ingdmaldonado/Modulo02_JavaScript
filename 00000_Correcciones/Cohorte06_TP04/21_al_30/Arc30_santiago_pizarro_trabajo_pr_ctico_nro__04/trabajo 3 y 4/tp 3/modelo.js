export const calcularPrecioVenta = (importeCompra, margenGanancia) => {
    return importeCompra + (importeCompra * margenGanancia / 100);
};

export const calcularPromedio = (nota1, nota2, nota3) => {
    return (nota1 + nota2 + nota3) / 3;
};

export const obtenerCalificacion = (promedio) => {
    if (promedio <= 4) return "Desaprobado";
    if (promedio > 4 && promedio <= 7) return "Aprobado";
    if (promedio > 7 && promedio <= 9) return "Muy Bueno";
    if (promedio > 9 && promedio <= 10) return "Excelente";
    return "Nota fuera de rango";
};

export const calcularSobretasa = (importeBase, tipoBebida) => {
    let tasa;
    switch (Number(tipoBebida)) {
        case 1:  tasa = 5 / 1000; break;
        case 2:  tasa = 1 / 1000; break;
        case 3:  tasa = 7 / 1000; break;
        case 4:  tasa = 2 / 1000; break;
        case 5:  tasa = 15 / 1000; break;
        default: tasa = 1 / 1000;
    }
    return importeBase * tasa;
};

export const calcularImporteAgua = (metros) => {
    const consumo = metros < 50 ? 50 : metros;

    if (consumo <= 50) {
        return consumo * 350;
    } else if (consumo <= 70) {
        return (50 * 350) + ((consumo - 50) * 555.20);
    } else {
        return (50 * 350) + (20 * 555.20) + ((consumo - 70) * 1552.20);
    }
};

export const calcularTasaSubsuelo = (importeBase) => {
    return importeBase * 0.03;
};

export const calcularTasaENRE = (importeBase) => {
    return importeBase * 0.012;
};

export const calcularDosisInsulina = (glucosa, peso, tipoDiabetes) => {
    const exceso = glucosa > 180 ? glucosa * 0.5 : 0;
    if (Number(tipoDiabetes) === 1) {
        return (peso * 0.5) + exceso;
    } else {
        return (peso * 0.2) + exceso;
    }
};

export const contarVocales = (cadena) => {
    const vocales = 'aeiouAEIOU';
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        let esVocal = false;
        for (let j = 0; j < vocales.length; j++) {
            if (cadena[i] === vocales[j]) {
                esVocal = true;
                break;
            }
        }
        if (esVocal) contador++;
    }
    return contador;
};

export const contarConsonantes = (cadena) => {
    const vocales = 'aeiouAEIOU';
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        const char = cadena[i];
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            let esVocal = false;
            for (let j = 0; j < vocales.length; j++) {
                if (char === vocales[j]) {
                    esVocal = true;
                    break;
                }
            }
            if (!esVocal) contador++;
        }
    }
    return contador;
};

export const tieneDosSLetras = (palabra) => {
    let contador = 0;
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === 's' || palabra[i] === 'S') {
            contador++;
            if (contador >= 2) return true;
        }
    }
    return false;
};

export const tieneTresEspacios = (cadena) => {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === ' ') {
            contador++;
            if (contador === 3) {
                break;
            }
        }
    }
    return contador >= 3;
};

export const sinDigitos = (cadena) => {
    let tieneDigito = false;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] >= '0' && cadena[i] <= '9') {
            tieneDigito = true;
            break; 
        }
    }
    return !tieneDigito;
};