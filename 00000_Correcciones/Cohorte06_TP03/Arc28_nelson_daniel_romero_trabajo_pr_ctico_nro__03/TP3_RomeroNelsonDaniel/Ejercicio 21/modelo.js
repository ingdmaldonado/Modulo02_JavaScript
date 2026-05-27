export const validar = (nota) => {
    return nota >= 0 && nota <= 10 ? true : false;
}

export const evaluar = (nota) => {
    if (nota <= 4) {
        return "Desaprobado";
    }
    if (nota > 4 && nota <= 7) {
        return "Aprobado";
    }
    if (nota > 7 && nota <= 9) {
        return "Muy bueno";
    }
    if (nota == 10) {
        return "Excelente";
    }
}