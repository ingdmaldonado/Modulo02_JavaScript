/* Ejercicio Nro. 15:
Realizar una arrow function que reciba como parámetro una nota promedio y que según la nota recibida
como parámetro devuelva un texto que diga los siguientes mensajes.
• Si la nota <= 4 debe devolver “Desaprobado”
• Si la nota > 4 y nota <= 7 debe devolver “Aprobado”
• Si la nota >7 y nota <=9 debe devolver “Muy Bueno”
• Si la nota = 10 debe devolver “Excelente”
Nota: Debe Devolver un Texto. */

// clasificar la nota según el promedio
const clasificarNota = (nota) => {
    if (nota <= 4) {
        return "Desaprobado";
    }
    if (nota > 4 && nota <= 7) {
        return "Aprobado";
    }
    if (nota > 7 && nota <= 9) {
        return "Muy Bueno";
    }
    if (nota === 10) {
        return "Excelente";
    }

    return "Nota inválida"; // Por si ingresan algo fuera de rango
};