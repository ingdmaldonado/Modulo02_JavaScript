// Punto 1
export const mostrarAlumnos = (cohorte) => {

    cohorte.forEach(

        ({ apellido, nombre }) => {

            console.log(
                `${apellido}, ${nombre}`
            );
        }
    );
};

// Rest Operator
export const unificarCohortes = (...cohortes) => {

    return cohortes.flat();
};

// Punto 3
export const obtenerAprobados = (alumnos) => {

    return alumnos.filter(

        alumno => alumno.nota_final > 5
    );
};

export const obtenerDesaprobados = (alumnos) => {

    return alumnos.filter(

        alumno => alumno.nota_final <= 5
    );
};

// Punto 4
export const ordenarPorNota = (alumnos) => {

    return [...alumnos].sort(

        (a, b) => a.nota_final - b.nota_final
    );
};

// Punto 5
export const buscarAlumnoPorDni = (

    alumnos,
    dni

) => {

    return alumnos.find(

        alumno => alumno.dni === dni
    );
};

// Punto 6a
export const contarAprobadosIf = (alumnos) => {

    return alumnos.reduce(

        (acumulador, alumno) => {

            if (alumno.nota_final > 5) {

                return acumulador + 1;
            }

            return acumulador;

        },

        0
    );
};

// Punto 6b
export const contarAprobadosTernario = (

    alumnos

) => {

    return alumnos.reduce(

        (acumulador, alumno) =>

            alumno.nota_final > 5
                ? acumulador + 1
                : acumulador,

        0
    );
};