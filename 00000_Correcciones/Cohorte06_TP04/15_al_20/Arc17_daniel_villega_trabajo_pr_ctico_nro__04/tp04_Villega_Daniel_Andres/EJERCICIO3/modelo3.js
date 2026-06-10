
export const obtenerTodosLosAlumnos = (cohorte01, cohorte02, cohorte03, cohorte04) => {
    return [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];
};


export const obtenerAprobados = (todosLosAlumnos) => {
    return todosLosAlumnos.filter(alumno => alumno.nota_final > 5);
};


export const obtenerDesaprobados = (todosLosAlumnos) => {
    return todosLosAlumnos.filter(alumno => alumno.nota_final <= 5);
};


