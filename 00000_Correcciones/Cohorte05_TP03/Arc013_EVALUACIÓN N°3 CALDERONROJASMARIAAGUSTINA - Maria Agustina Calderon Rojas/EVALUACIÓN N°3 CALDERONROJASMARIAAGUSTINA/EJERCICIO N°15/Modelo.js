// =============================
// MODELO: Contiene las funciones lógicas (arrow functions)
// =============================

// Arrow function que devuelve el texto según la nota promedio
export const evaluarNota = (nota) => {
    if (nota <= 4) {
        return "Desaprobado";
    } else if (nota > 4 && nota <= 7) {
        return "Aprobado";
    } else if (nota > 7 && nota <= 9) {
        return "Muy Bueno";
    } else if (nota === 10) {
        return "Excelente";
    } else {
        return "Nota fuera de rango";
    }
};