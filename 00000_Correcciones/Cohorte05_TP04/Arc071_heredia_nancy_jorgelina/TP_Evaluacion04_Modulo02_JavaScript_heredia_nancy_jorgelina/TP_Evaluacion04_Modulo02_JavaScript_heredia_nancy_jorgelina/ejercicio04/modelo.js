export const unificarCohortes = (c1, c2, c3, c4) => {
    return [...c1, ...c2, ...c3, ...c4];
};

export const filtrarAprobados = (alumnos) => {
    return alumnos.filter(alumno => alumno.nota_final > 5);
};

export const filtrarDesaprobados = (alumnos) => {
    return alumnos.filter(alumno => alumno.nota_final <= 5);
};

export const ordenarPorNota = (alumnos) => {
    const copia = [...alumnos];
    return copia.sort((a, b) => a.nota_final - b.nota_final);
};

export const buscarPorDni = (alumnos, dni) => {
    return alumnos.find(alumno => alumno.dni === dni);
};

export const contarAprobadosIf = (alumnos) => {
    return alumnos.reduce((acc, alumno) => {
        if (alumno.nota_final > 5) return acc + 1;
        else return acc;
    }, 0);
};

export const contarAprobadosTernario = (alumnos) => {
    return alumnos.reduce((acc, alumno) => (alumno.nota_final > 5 ? acc + 1 : acc), 0);
};