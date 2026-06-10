/*mostrar alumnos*/

export const mostrarAlumnos = (cohorte) => {
    cohorte.forEach(alumno => {
        console.log(`${alumno.apellido}, ${alumno.nombre}`);
    });
};

/*unir cohortes*/

export const unirCohortes = (...cohortes) => {
    return [...cohortes[0], ...cohortes[1], ...cohortes[2], ...cohortes[3]];
};

/*aprobados*/

export const obtenerAprobados = (alumnos) => {
    return alumnos.filter(alumno => alumno.nota_final > 5);
};

/*desaprobados*/

export const obtenerDesaprobados = (alumnos) => {
    return alumnos.filter(alumno => alumno.nota_final <= 5);
};

/*ordenar por nota*/

export const ordenarPorNota = (alumnos) => {
    return [...alumnos].sort((a, b) => a.nota_final - b.nota_final);
};

/*buscar por DNI*/

export const buscarAlumno = (alumnos, dni) => {
    return alumnos.find(alumno => alumno.dni === dni);
};

/*contar los aprobados*/

export const contarAprobadosIf = (alumnos) => {
    return alumnos.reduce((contador, alumno) => {

        if(alumno.nota_final > 5){
            return contador + 1;
        }else{
            return contador;
        }

    }, 0);
};

/*reduce con ternario*/

export const contarAprobadosTernario = (alumnos) => {
    return alumnos.reduce(
        (contador, alumno) =>
            alumno.nota_final > 5
                ? contador + 1
                : contador,
        0
    );
};