// =============================
// CONTROLADOR: Valida y gestiona el flujo entre la vista y el modelo
// =============================

import { evaluarNota } from './modelo.js';

// Función controladora que valida y llama al modelo
export const controladorEvaluacion = (nota) => {

    // Validar que la nota sea un número
    if (isNaN(nota)) {
        return { error: "❌ La nota debe ser un número." };
    }

    // Validar rango permitido
    if (nota < 0 || nota > 10) {
        return { error: "❌ La nota debe estar entre 0 y 10." };
    }

    // Llamar a la función del modelo
    const resultado = evaluarNota(nota);

    // Retornar el texto resultante
    return { resultado };
};