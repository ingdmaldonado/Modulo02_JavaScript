// =============================
// CONTROLADOR: Valida y coordina la ejecución del modelo
// =============================

import { calcularTasaSubsuelo } from './modelo.js';

export const controladorTasaSubsuelo = (importeBase) => {

    // Validar que sea numérico
    if (isNaN(importeBase)) {
        return { error: "❌ El importe base debe ser un número válido." };
    }

    // Validar que sea positivo
    if (importeBase <= 0) {
        return { error: "❌ El importe base debe ser mayor que cero." };
    }

    // Calcular la tasa usando el modelo
    const tasa = calcularTasaSubsuelo(importeBase);

    // Devolver el resultado numérico
    return { resultado: tasa };
};