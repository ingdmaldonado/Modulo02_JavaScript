
export const obtenerTodosLosAlumnos = (c01, c02, c03, c04) => {
    return [...c01, ...c02, ...c03, ...c04];
};


export const buscarAlumnoPorDni = (alumnos, dniBuscado) => {
    return alumnos.find(alumno => alumno.dni === dniBuscado);
};


export const obtenerAprobados = (alumnos) => {
    return alumnos.filter(({ nota_final }) => nota_final > 0 <10);
};


export const aFormatoJSON = (datos) => {
    return JSON.stringify(datos, null, 2);
};