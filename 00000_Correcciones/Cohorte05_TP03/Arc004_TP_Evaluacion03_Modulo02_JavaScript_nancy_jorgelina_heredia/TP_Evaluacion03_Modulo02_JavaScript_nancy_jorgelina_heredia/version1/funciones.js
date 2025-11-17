// Archivo "funciones.js" con todas las funciones de lógica

/**
 * Ejercicio 13: Calcula el precio de venta aplicando un margen.
 */
export const calcularPrecioVenta = (importe, margen) => {
    return importe * (1 + (margen / 100));
};

/**
 * Ejercicio 14: Calcula el promedio de 3 notas.
 */
export const calcularPromedio = (n1, n2, n3) => {
    return (n1 + n2 + n3) / 3;
};

/**
 * Ejercicio 15: Devuelve el estado de un alumno según su nota.
 * MEJORA: Se cierra el "hueco" lógico entre 9 y 10.
 */
export const obtenerEstadoNota = (promedio) => {
    if (promedio < 0 || promedio > 10) return "Nota Inválida";
    if (promedio <= 4) return "Desaprobado"; // <= 4
    if (promedio <= 7) return "Aprobado"; // > 4 y <= 7
    if (promedio < 10) return "Muy Bueno"; // > 7 y < 10 (cierra el hueco)
    if (promedio == 10) return "Excelente"; // == 10
    return "Revisar"; // No debería llegar aquí
};

/**
 * Ejercicio 16: Calcula la sobretasa de bebidas.
 */
export const calcularSobretasa = (importeBase, tipoBebida) => {
    let tasa = 0; // Tasas "por mil" (‰)
    switch (tipoBebida) {
        case '1': tasa = 0.005; break; // 5‰
        case '2': tasa = 0.001; break; // 1‰
        case '3': tasa = 0.007; break; // 7‰
        case '4': tasa = 0.002; break; // 2‰
        case '5': tasa = 0.015; break; // 15‰
        case '6': tasa = 0.001; break; // 1‰
        default:  tasa = 0;
    }
    return importeBase * tasa;
};

/**
 * Ejercicio 17: Calcula el importe base de agua por bloques.
 */
export const calcularImporteAgua = (metrosCubicos) => {
    // Abonan un mínimo de 50 metros cúbicos
    if (metrosCubicos < 50) {
        metrosCubicos = 50;
    }

    const precioB1 = 350.00;
    const precioB2 = 555.20;
    const precioB3 = 1552.20;

    const limiteB1 = 50;
    const limiteB2 = 70;

    let importeTotal = 0;

    if (metrosCubicos <= limiteB1) {
        // Caso 1 (o mínimo): 50 m3
        importeTotal = limiteB1 * precioB1;
    } else if (metrosCubicos <= limiteB2) {
        // Caso 2: Entre 51 y 70 m3
        const m3Bloque1 = limiteB1;
        const m3Bloque2 = metrosCubicos - limiteB1;
        importeTotal = (m3Bloque1 * precioB1) + (m3Bloque2 * precioB2);
    } else {
        // Caso 3: Más de 70 m3
        const m3Bloque1 = limiteB1; // 50 m3
        const m3Bloque2 = limiteB2 - limiteB1; // 20 m3
        const m3Bloque3 = metrosCubicos - limiteB2; // El excedente
        importeTotal = (m3Bloque1 * precioB1) + (m3Bloque2 * precioB2) + (m3Bloque3 * precioB3);
    }
    
    return importeTotal;
};

/**
 * Ejercicio 18: Calcula Tasa Subsuelo (3%).
 */
export const calcularTasaSubsuelo = (importeBase) => {
    return importeBase * 0.03;
};

/**
 * Ejercicio 19: Calcula Tasa ENRE (1.2%).
 */
export const calcularTasaENRE = (importeBase) => {
    return importeBase * 0.012;
};

/**
 * Ejercicio 20: Calcula dosis de insulina.
 */
export const calcularDosisInsulina = (glucosa, peso, tipo) => {
    let dosis = 0;
    // solamente si la glucosa es mayor a 180
    const extraGlucosa = glucosa > 180 ? (0.50 * glucosa) : 0;

    if (tipo === '1') {
        // 50% Peso + 50% Glucosa (si > 180)
        dosis = (0.50 * peso) + extraGlucosa;
    } else if (tipo === '2') {
        // 20% Peso + 50% Glucosa (si > 180)
        dosis = (0.20 * peso) + extraGlucosa;
    }
    return dosis;
};

/**
 * Ejercicio 21: Cuenta vocales (mayús/minús) en un texto.
 */
export const contarVocales = (texto) => {
    let contador = 0;
    
    // Debe recorrer la cadena con un ciclo for
    for (let i = 0; i < texto.length; i++) {
        const char = texto[i].toUpperCase(); // Convertimos a mayúscula
        
        if (char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
            contador++;
        }
    }
    return contador;
};

/**
 * Ejercicio 22: Cuenta consonantes (mayús/minús).
 */
export const contarConsonantes = (texto) => {
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        const char = texto[i];
        const charUpper = char.toUpperCase();

        // 1. Verificar si es una letra (A-Z)
        if (charUpper >= 'A' && charUpper <= 'Z') {
            // 2. Si es letra, verificar que NO sea vocal
            if (!(charUpper === 'A' || charUpper === 'E' || charUpper === 'I' || charUpper === 'O' || charUpper === 'U')) {
                contador++;
            }
        }
    }
    return contador;
};

/**
 * Ejercicio 23: Determina si hay al menos dos 's'.
 */
export const tieneDosS = (palabra) => {
    let contadorS = 0; 
    
    for (let i = 0; i < palabra.length; i++) {
        const char = palabra[i];
        if (char === 's' || char === 'S') {
            contadorS++;
        }
    }
    
    // Devolver true si se cumplen las dos apariciones
    return contadorS >= 2;
};

/**
 * Ejercicio 24: Determina si hay al menos tres espacios.
 */
export const tieneTresEspacios = (texto) => {
    let contadorEspacios = 0;
    
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === ' ') {
            contadorEspacios++;
        }
        
        // interrumpir inmediatamente el ciclo mediante break
        if (contadorEspacios >= 3) {
            break;
        }
    }
    
    return contadorEspacios >= 3;
};

/**
 * Ejercicio 25: Determina si NO contiene dígitos numéricos.
 */
export const noContieneNumeros = (texto) => {
    for (let i = 0; i < texto.length; i++) {
        const char = texto[i];
        
        // comprobar si se encuentra dentro del rango '0' a '9'
        if (char >= '0' && char <= '9') {
            // interrumpir inmediatamente... y devolver... false
            return false; // Se encontró un número
        }
    }
    
    // recorrer la cadena completa sin encontrar... deberá devolver true
    return true; // No se encontró ningún número
};