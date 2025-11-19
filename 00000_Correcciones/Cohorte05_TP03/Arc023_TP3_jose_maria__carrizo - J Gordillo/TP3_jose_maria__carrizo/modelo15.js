
export const evaluarNota = (nota) => {
    if (nota <= 4) return "Desaprobado";
    if (nota <= 7) return "Aprobado";
    if (nota <= 9) return "Muy Bueno";
    if (nota === 10) return "Excelente";
    return "Nota inválida";
};
