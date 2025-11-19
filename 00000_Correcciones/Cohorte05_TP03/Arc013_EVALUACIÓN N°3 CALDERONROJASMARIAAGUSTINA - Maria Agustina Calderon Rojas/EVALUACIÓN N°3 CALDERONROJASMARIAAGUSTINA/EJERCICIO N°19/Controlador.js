// =============================
// CONTROLADOR: Valida y coordina los datos con el modelo
// =============================

import { calcularTasaENRE } from './modelo.js';

export const controladorTasaENRE = (importeBase) => {

    // Validar que sea numérico
    if (isNaN(importeBase)) {
        return { error: "❌ El importe base debe ser un número válido." };
    }

    // Validar que sea positivo
    if (importeBase <= 0) {
        return { error: "❌ El importe base debe ser mayor que cero." };
    }

    // Llamar al modelo
    const tasa = calcularTasaENRE(importeBase);

    // Devolver resultado numérico
    return { resultado: tasa };
};