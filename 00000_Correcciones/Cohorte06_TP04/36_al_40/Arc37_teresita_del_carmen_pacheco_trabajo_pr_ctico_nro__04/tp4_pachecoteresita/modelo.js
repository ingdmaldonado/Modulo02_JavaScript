export const mostrarAlumnos = (alumnos) => {
    return alumnos.map(
        alumno => `${alumno.apellido}, ${alumno.nombre}`
    );
};

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

export const ordenarPorNota = (alumnos) => {
    return [...alumnos].sort(
        (a, b) => a.nota_final - b.nota_final
    );
};

export const buscarPorDni = (alumnos, dni) => {
    return alumnos.find(
        alumno => alumno.dni === dni
    );
};

export const contarAprobadosIfElse = (alumnos) => {

    return alumnos.reduce((contador, alumno) => {

        if(alumno.nota_final > 5){
            return contador + 1;
        }else{
            return contador;
        }

    },0);

};

export const contarAprobadosTernario = (alumnos) => {

    return alumnos.reduce(
        (contador, alumno) =>
            alumno.nota_final > 5
                ? contador + 1
                : contador,
        0
    );

};