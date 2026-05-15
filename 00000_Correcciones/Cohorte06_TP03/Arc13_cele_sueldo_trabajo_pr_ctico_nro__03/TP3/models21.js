// modelo21.js

export const obtenerEstadoAlumno = (promedio) => {

    // voy evaluando la nota
    if (promedio <= 4) {

        return "Desaprobado";

    } else if (promedio > 4 && promedio <= 7) {

        return "Aprobado";

    } else if (promedio > 7 && promedio <= 9) {

        return "Muy Bueno";

    } else if (promedio == 10) {

        return "Excelente";
    }
};