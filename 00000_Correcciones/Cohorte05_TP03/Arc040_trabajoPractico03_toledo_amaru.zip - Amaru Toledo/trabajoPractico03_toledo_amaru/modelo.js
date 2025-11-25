/**
 * ARCHIVO: modelo.js
 * Contiene todas las funciones de lógica y cálculo (Arrow Functions)
 * para los ejercicios del TP, listas para ser exportadas.
 */

// --- EJERCICIOS DE CÁLCULO Y LÓGICA DE NEGOCIO ---

// EJERCICIO NRO. 13
export const calcularPrecioVenta = (importeCompra, margenGanancia) => {
    const factorGanancia = margenGanancia / 100;
    const precioVenta = importeCompra + (importeCompra * factorGanancia);
    return precioVenta; [cite_start]// [cite: 18, 19, 20, 21]
};

// EJERCICIO NRO. 14
export const obtenerPromedio = (nota1, nota2, nota3) => {
    const promedio = (nota1 + nota2 + nota3) / 3;
    return promedio; [cite_start]// [cite: 23, 24]
};

// EJERCICIO NRO. 15
export const clasificarNota = (notaPromedio) => {
    if (notaPromedio <= 4) {
        return "Desaprobado"; [cite_start]// [cite: 31]
    } else if (notaPromedio > 4 && notaPromedio <= 7) {
        return "Aprobado"; [cite_start]// [cite: 32]
    } else if (notaPromedio > 7 && notaPromedio <= 9) {
        return "Muy Bueno"; [cite_start]// [cite: 33]
    } else if (notaPromedio === 10) {
        return "Excelente"; [cite_start]// [cite: 34]
    } else {
        return "Nota fuera de rango";
    }
};

// EJERCICIO NRO. 16
export const calcularSobreTasaBebidas = (importeBase, clasificacion) => {
    let tasaPorMil = 0;

    switch (clasificacion) {
        case 1: // Agua en envases plásticos = 5 por mil
            tasaPorMil = 5; [cite_start]// [cite: 39]
            break;
        case 2: // Agua en envases retornables = 1 por mil
            tasaPorMil = 1; [cite_start]// [cite: 40]
            break;
        case 3: // Gaseosas Azucaradas en envases plásticos = 7 por mil
            tasaPorMil = 7; [cite_start]// [cite: 41]
            break;
        case 4: // Gaseosas Azucaradas en envases retornables = 2 por mil
            tasaPorMil = 2; [cite_start]// [cite: 42]
            break;
        case 5: // Bebidas Energéticas = 15 por mil
            tasaPorMil = 15; [cite_start]// [cite: 43]
            break;
        case 6: // Cualquier otra bebida no clasificada = 1 por mil
        default:
            tasaPorMil = 1; [cite_start]// [cite: 44]
            break;
    }

    // El cálculo es (tasaPorMil / 1000)
    const sobreTasa = importeBase * (tasaPorMil / 1000);
    return sobreTasa; [cite_start]// [cite: 45, 46]
};

// EJERCICIO NRO. 17 (Revisado para mayor claridad en los bloques)
export const calcularImporteAgua = (metrosCubicosLeidos) => {
    const PRECIO_B1 = 350.00;   [cite_start]// Bloque 1 (hasta 50 m³) [cite: 51]
    const PRECIO_B2 = 555.20;   [cite_start]// Bloque 2 (m³ 51 a 70) [cite: 52]
    const PRECIO_EXC = 1552.20; [cite_start]// Bloque Excedente (más de 70 m³) [cite: 53]
    const CONSUMO_MINIMO = 50;  [cite_start]// Mínimo a facturar [cite: 57]

    // Aplicar el consumo mínimo
    let consumoAFacturar = Math.max(metrosCubicosLeidos, CONSUMO_MINIMO);
    let importeBase = 0;

    // Bloque 1 (hasta 50 m³)
    const consumoB1 = Math.min(consumoAFacturar, 50);
    importeBase += consumoB1 * PRECIO_B1;
    consumoAFacturar -= consumoB1;

    // Bloque 2 (m³ 51 a 70, máximo 20 m³)
    if (consumoAFacturar > 0) {
        const consumoB2 = Math.min(consumoAFacturar, 20);
        importeBase += consumoB2 * PRECIO_B2;
        consumoAFacturar -= consumoB2;
    }

    // Bloque Excedente (más de 70 m³)
    if (consumoAFacturar > 0) {
        importeBase += consumoAFacturar * PRECIO_EXC;
    }

    return importeBase; [cite_start]// [cite: 58, 60]
};

// EJERCICIO NRO. 18
export const calcularTasaSubsuelo = (importeBase) => {
    // Tasa de Subsuelo = 3% (0.03) del importe Base.
    const tasaSubsuelo = importeBase * 0.03;
    return tasaSubsuelo; [cite_start]// [cite: 62, 63]
};

// EJERCICIO NRO. 19
export const calcularTasaFiscalizacionENRE = (importeBase) => {
    // Tasa ENRE = 1.2% (0.012) del importe Base.
    const tasaENRE = importeBase * 0.012;
    return tasaENRE; [cite_start]// [cite: 65, 66]
};

// EJERCICIO NRO. 20 (Dosis de Insulina)
export const calcularDosisInsulina = (glucosa, peso, tipoDiabetes) => {
    let dosis = 0;

    // Condición: 50% del nivel de glucosa SÓLO si la glucosa es mayor a 180.
    const ajusteGlucosa = glucosa > 180 ? (glucosa * 0.50) : 0;

    [cite_start] if (tipoDiabetes === 1) { // Tipo 1 [cite: 77]
        // 50% del Peso + Ajuste de Glucosa
        dosis = (peso * 0.50) + ajusteGlucosa; [cite_start]// [cite: 84]
    [cite_start]} else if (tipoDiabetes === 2) { // Tipo 2 [cite: 82]
        // 20% del Peso + Ajuste de Glucosa
        dosis = (peso * 0.20) + ajusteGlucosa; [cite_start]// [cite: 85]
    }

    return dosis; [cite_start]// [cite: 86]
};

// --- EJERCICIOS DE MANEJO DE CADENAS (Sin métodos de strings) ---

// EJERCICIO NRO. 21
export const contarVocales = (cadena) => {
    let contador = 0;
    const vocales = "aeiouAEIOU";

    [cite_start] for (let i = 0; i < cadena.length; i++) { // Debe recorrer la cadena con un ciclo for [cite: 90]
        const caracter = cadena[i];
        
        // Verifica si el caracter es una vocal
        for (let j = 0; j < vocales.length; j++) {
            if (caracter === vocales[j]) {
                contador++;
                break; 
            }
        }
    }
    return contador; [cite_start]// [cite: 89, 92]
};

// EJERCICIO NRO. 22
export const contarConsonantes = (cadena) => {
    let contador = 0;
    const vocales = "aeiouAEIOU";

    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i];
        
        // 1. Verifica si es una letra (a-z o A-Z), excluyendo espacios, números, etc.
        const esLetra = (caracter >= 'a' && caracter <= 'z') || (caracter >= 'A' && caracter <= 'Z');

        if (esLetra) {
            let esVocal = false;
            
            // 2. Verifica si la letra es una vocal
            for (let j = 0; j < vocales.length; j++) {
                if (caracter === vocales[j]) {
                    esVocal = true;
                    break;
                }
            }
            
            [cite_start]// 3. Si es letra Y NO es vocal, es consonante [cite: 95]
            if (!esVocal) {
                contador++;
            }
        }
    }
    return contador; [cite_start]// [cite: 94, 98]
};

// EJERCICIO Nº23
export const contieneDosLetrasS = (palabra) => {
    let contadorS = 0;

    for (let i = 0; i < palabra.length; i++) {
        const caracter = palabra[i];
        [cite_start]// Determina si el caracter es 's' o 'S' [cite: 100]
        if (caracter === 's' || caracter === 'S') {
            contadorS++;
            [cite_start]// Devuelve true si se cumplen las dos apariciones [cite: 102]
            if (contadorS >= 2) {
                return true; 
            }
        }
    }
    [cite_start]// Devuelve false en caso contrario [cite: 102, 105]
    return false;
};

// EJERCICIO NRO. 24
export const contieneTresEspacios = (cadena) => {
    let contadorEspacios = 0;

    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i];
        
        if (caracter === ' ') {
            contadorEspacios++;
        }
        
        [cite_start]// Si se detecta el tercer espacio, interrumpe el ciclo (return es suficiente) y devuelve true. [cite: 111]
        if (contadorEspacios === 3) {
            return true;
        }
    }
    
    [cite_start]// Si al finalizar no se encontraron tres espacios, devuelve false. [cite: 112, 113]
    return false;
};

// EJERCICIO NRO. 25
export const noContieneDigitos = (cadena) => {
    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i];
        
        [cite_start]// Comprobar si está dentro del rango '0' a '9' [cite: 117]
        if (caracter >= '0' && caracter <= '9') {
            [cite_start]// Si se detecta algún número, interrumpe el bucle y devuelve false. [cite: 118]
            return false;
        }
    }
    
    [cite_start]// Si recorre la cadena completa sin encontrar ningún número, devuelve true. [cite: 119, 120]
    return true;
};