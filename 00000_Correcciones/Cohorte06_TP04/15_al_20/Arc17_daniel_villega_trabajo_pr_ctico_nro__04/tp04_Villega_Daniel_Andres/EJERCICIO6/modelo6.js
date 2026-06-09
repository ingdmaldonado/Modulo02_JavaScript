
export const contarAprobadosIf = (totalAlumnos) => {
    return totalAlumnos.reduce((contador, alumno) => {
        if (alumno.nota_final > 5) {
            return contador + 1;
        } else {
            return contador;
        }
    }, 0);
};


export const contarAprobadosTernario = (totalAlumnos) => {
    return totalAlumnos.reduce((contador, alumno) => (alumno.nota_final > 5 ? contador + 1 : contador), 0);
};


export const obtenerPromedio = (totalAlumnos) => {
    if (totalAlumnos.length === 0) return 0;
    const sumaNotas = totalAlumnos.reduce((acumulador, alumno) => acumulador + alumno.nota_final, 0);
    return (sumaNotas / totalAlumnos.length).toFixed(2);
};