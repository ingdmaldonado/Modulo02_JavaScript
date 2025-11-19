// =============================
// CONTROLADOR: Valida entradas y conecta la vista con el modelo
// =============================

import { calcularImporteAgua } from './modelo.js';

// Función controladora
export const controladorImporteAgua = (consumo) => {

    // Validación
    if (isNaN(consumo)) {
        return { error: "❌ El consumo debe ser un número." };
    }

    if (consumo < 0) {
        return { error: "❌ El consumo no puede ser negativo." };
    }

    // Llamar al modelo
    const importe = calcularImporteAgua(consumo);

    return { resultado: importe };
};