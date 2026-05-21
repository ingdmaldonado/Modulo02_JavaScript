// ------------------------------------------------------------------
// Ejercicio 19: Precio de venta con margen de ganancia
// Parámetros: importeCompra (número), margenGanancia (% número)
// Retorna: número (precio de venta sin impuestos)
// ------------------------------------------------------------------
export const calcularPrecioVenta = (importeCompra, margenGanancia) => {
    return importeCompra + (importeCompra * margenGanancia / 100);
};

// ------------------------------------------------------------------
// Ejercicio 20: Promedio de tres notas
// Parámetros: nota1, nota2, nota3 (números)
// Retorna: número (promedio)
// ------------------------------------------------------------------
export const calcularPromedio = (nota1, nota2, nota3) => {
    return (nota1 + nota2 + nota3) / 3;
};

// ------------------------------------------------------------------
// Ejercicio 21: Calificación textual según promedio
// Parámetro: promedio (número)
// Retorna: string con la calificación
// ------------------------------------------------------------------
export const obtenerCalificacion = (promedio) => {
    if (promedio <= 4) return "Desaprobado";
    if (promedio > 4 && promedio <= 7) return "Aprobado";
    if (promedio > 7 && promedio <= 9) return "Muy Bueno";
    if (promedio === 10) return "Excelente";
    return "Nota fuera de rango";
};

// ------------------------------------------------------------------
// Ejercicio 22: Sobretasa a bebidas (‰ por mil)
// Parámetros: importeBase (número), tipoBebida (1-6 número)
// Retorna: número (monto de la sobretasa)
//   1 → Agua envase plástico       5‰
//   2 → Agua envase retornable     1‰
//   3 → Gaseosa azucarada plástico 7‰
//   4 → Gaseosa azucarada retor.   2‰
//   5 → Energéticas               15‰
//   default → Otra bebida          1‰
// ------------------------------------------------------------------
export const calcularSobretasa = (importeBase, tipoBebida) => {
    let tasa;
    switch (Number(tipoBebida)) {
        case 1:  tasa = 5 / 1000;
        break;
        case 2:  tasa = 1 / 1000; 
        break;
        case 3:  tasa = 7 / 1000; 
        break;
        case 4:  tasa = 2 / 1000; 
        break;
        case 5:  tasa = 15 / 1000; 
        break;

        default: tasa = 1 / 1000;
    }
    return importeBase * tasa;
};

// ------------------------------------------------------------------
// Ejercicio 23: Importe base factura Aguas de Catamarca ECSAPEM
// Parámetro: metros (m³ leídos en el medidor)
// Retorna: número (importe base en $)
//   Bloque 1 → hasta 50 m³         × $350,00
//   Bloque 2 → m³ 51 a 70          × $555,20
//   Bloque 3 → excedente > 70 m³   × $1.552,20
//   Mínimo facturable: 50 m³
// ------------------------------------------------------------------
export const calcularImporteAgua = (metros) => {
    const consumo = metros < 50 ? 50 : metros;          // mínimo 50 m³

    if (consumo <= 50) {
        return consumo * 350;
    } else if (consumo <= 70) {
        return (50 * 350) + ((consumo - 50) * 555.20);
    } else {
        return (50 * 350) + (20 * 555.20) + ((consumo - 70) * 1552.20);
    }
};

// ------------------------------------------------------------------
// Ejercicio 24: Tasa de Subsuelo — 3% del importe base
// Parámetro: importeBase (número)
// Retorna: número
// ------------------------------------------------------------------
export const calcularTasaSubsuelo = (importeBase) => {
    return importeBase * 0.03;
};

// ------------------------------------------------------------------
// Ejercicio 25: Tasa de Fiscalización ENRE — 1,2% del importe base
// Parámetro: importeBase (número)
// Retorna: número
// ------------------------------------------------------------------
export const calcularTasaENRE = (importeBase) => {
    return importeBase * 0.012;
};

// ------------------------------------------------------------------
// Ejercicio 26: Dosis de insulina recomendada
// Parámetros: glucosa (mg/dL), peso (kg), tipoDiabetes (1 ó 2)
// Retorna: número (unidades de insulina)
//   Tipo 1 → 50% peso + 50% glucosa (si glucosa > 180)
//   Tipo 2 → 20% peso + 50% glucosa (si glucosa > 180)
// ------------------------------------------------------------------
export const calcularDosisInsulina = (glucosa, peso, tipoDiabetes) => {
    const exceso = glucosa > 180 ? glucosa * 0.5 : 0;
    if (Number(tipoDiabetes) === 1) {
        return (peso * 0.5) + exceso;
    } else {
        return (peso * 0.2) + exceso;
    }
};

// ------------------------------------------------------------------
// Ejercicio 27: Contar vocales en una cadena (mayúsculas y minúsculas)
// Parámetro: cadena (string)
// Retorna: número
// Restricción: usa ciclo for; NO usa replace(), split() ni regex
// ------------------------------------------------------------------
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

// ------------------------------------------------------------------
// Ejercicio 28: Contar consonantes en una cadena
// Parámetro: cadena (string)
// Retorna: número
// Restricción: usa ciclo for; consonante = letra que NO es vocal
// ------------------------------------------------------------------
export const contarConsonantes = (cadena) => {
    const vocales = 'aeiouAEIOU';
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        const char = cadena[i];
        // Verificar que sea una letra (a-z ó A-Z)
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

// ------------------------------------------------------------------
// Ejercicio 29: ¿La palabra contiene al menos dos letras 's'?
// Parámetro: palabra (string)
// Retorna: boolean (true ó false)
// Restricción: ciclo for, contador/bandera; NO usa includes() ni indexOf()
// ------------------------------------------------------------------
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

// ------------------------------------------------------------------
// Ejercicio 30: ¿La cadena contiene al menos tres espacios en blanco?
// Parámetro: cadena (string)
// Retorna: boolean (true ó false)
// Restricción: ciclo for; al detectar el 3er espacio usa break y retorna true
// ------------------------------------------------------------------
export const tieneTresEspacios = (cadena) => {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === ' ') {
            contador++;
            if (contador === 3) {
                break; // interrumpe inmediatamente al encontrar el 3er espacio
            }
        }
    }
    return contador >= 3;
};

// ------------------------------------------------------------------
// Ejercicio 31: ¿La cadena NO contiene ningún dígito numérico (0-9)?
// Parámetro: cadena (string)
// Retorna: boolean — true si NO hay dígitos, false si hay al menos uno
// Restricción: ciclo for; al detectar un dígito usa break y retorna false
// ------------------------------------------------------------------
export const sinDigitos = (cadena) => {
    let tieneDigito = false;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] >= '0' && cadena[i] <= '9') {
            tieneDigito = true;
            break; // interrumpe al encontrar el primer dígito
        }
    }
    return !tieneDigito;
};