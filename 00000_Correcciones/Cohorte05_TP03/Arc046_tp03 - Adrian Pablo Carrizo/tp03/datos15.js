
// Arrow function que evalúa una nota y devuelve el estado
export const evaluarNota = (notaPromedio) => {
    if (notaPromedio <= 4) {
        return "Desaprobado";
    } else if (notaPromedio > 4 && notaPromedio <= 7) {
        return "Aprobado";
    } else if (notaPromedio > 7 && notaPromedio <= 9) {
        return "Muy Bueno";
    } else if (notaPromedio === 10) {
        return "Excelente";
    }
    return "Nota no válida";
}