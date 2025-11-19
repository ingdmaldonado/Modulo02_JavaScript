// =============================
// CONTROLADOR: Valida entradas y gestiona el flujo
// =============================

import { calcularSobreTasa } from './modelo.js';

export const controladorSobreTasa = (importeBase, tipo) => {

    // Validaciones
    if (isNaN(importeBase) || isNaN(tipo)) {
        return { error: "❌ El importe base y el tipo deben ser valores numéricos." };
    }

    if (importeBase <= 0) {
        return { error: "❌ El importe base debe ser mayor que cero." };
    }

    if (tipo < 1 || tipo > 6) {
        return { error: "❌ El tipo de bebida debe estar entre 1 y 6." };
    }

    // Calcular sobre tasa usando el modelo
    const resultado = calcularSobreTasa(importeBase, tipo);

    // Devolver el número resultante
    return { resultado };
};