// forEach

export const mostrarAlumnos =
(vectorAlumnos) =>
{
    vectorAlumnos.forEach(
        (alumno) =>
        {
            console.log(
                `${alumno.apellido}, ${alumno.nombre}`
            );
        }
    );
};


// Spread

export const unificarCohortes =
(
    cohorte01,
    cohorte02,
    cohorte03,
    cohorte04
) =>
{
    return [
        ...cohorte01,
        ...cohorte02,
        ...cohorte03,
        ...cohorte04
    ];
};


// filter

export const obtenerAprobados =
(vectorAlumnos) =>
{
    return vectorAlumnos.filter(
        (alumno) =>
        {
            return alumno.nota_final > 4;
        }
    );
};

export const obtenerDesaprobados =
(vectorAlumnos) =>
{
    return vectorAlumnos.filter(
        (alumno) =>
        {
            return alumno.nota_final <= 4;
        }
    );
};


// sort

export const ordenarPorNota =
(vectorAlumnos) =>
{
    return [...vectorAlumnos].sort(
        (a, b) =>
        {
            return a.nota_final - b.nota_final;
        }
    );
};


// find

export const buscarAlumno =
(vectorAlumnos, dni) =>
{
    return vectorAlumnos.find(
        (alumno) =>
        {
            return alumno.dni === dni;
        }
    );
};


// reduce con if

export const contarAprobadosIf =
(vectorAlumnos) =>
{
    return vectorAlumnos.reduce(
        (acum, alumno) =>
        {
            if(alumno.nota_final > 4)
            {
                return acum + 1;
            }
            else
            {
                return acum;
            }
        },
        0
    );
};


// reduce con ternario

export const contarAprobadosTernario =
(vectorAlumnos) =>
{
    return vectorAlumnos.reduce(
        (acum, alumno) =>
        {
            return alumno.nota_final > 4
                ? acum + 1
                : acum;
        },
        0
    );
};