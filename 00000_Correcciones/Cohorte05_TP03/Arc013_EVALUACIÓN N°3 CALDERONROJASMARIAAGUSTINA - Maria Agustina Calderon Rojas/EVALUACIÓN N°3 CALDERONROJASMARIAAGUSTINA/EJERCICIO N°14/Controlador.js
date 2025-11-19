// =============================
// CONTROLADOR: Gestiona las validaciones y el flujo
// =============================

import { calcularPromedio } from './modelo.js';

// Función controladora que valida los datos y devuelve el resultado
export const controladorPromedio = (nota1, nota2, nota3) => {

    // Validar que todas las notas sean números
    if ([nota1, nota2, nota3].some(isNaN)) {
        return { error: "❌ Todas las notas deben ser numéricas." };
    }

    // Validar que estén entre 0 y 10
    if ([nota1, nota2, nota3].some(nota => nota < 0 || nota > 10)) {
        return { error: "❌ Las notas deben estar entre 0 y 10." };
    }

    // Llamar a la función del modelo
    const promedio = calcularPromedio(nota1, nota2, nota3);

    // Retornar resultado numérico
    return { resultado: promedio };
};