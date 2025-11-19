// =============================
// CONTROLADOR: Valida y coordina la ejecución del modelo
// =============================

import { calcularDosisInsulina } from './modelo.js';

export const controladorDosisInsulina = (glucosa, peso, tipo) => {

    // Validaciones básicas
    if (isNaN(glucosa) || isNaN(peso)) {
        return { error: "❌ Glucosa y peso deben ser números válidos." };
    }

    if (glucosa <= 0 || peso <= 0) {
        return { error: "❌ Los valores deben ser mayores que cero." };
    }

    if (tipo !== "1" && tipo !== "2") {
        return { error: "❌ Debes seleccionar un tipo de diabetes válido (1 o 2)." };
    }

    // Calcular la dosis llamando al modelo
    const dosis = calcularDosisInsulina(glucosa, peso, tipo);

    // Retornar resultado o error si es inválido
    if (isNaN(dosis)) {
        return { error: "❌ No se pudo calcular la dosis. Verifica los datos." };
    }

    return { resultado: dosis };
};