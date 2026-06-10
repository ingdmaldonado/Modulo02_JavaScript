
export const mostrarAlumnos = (vectorAlumnos) => {
    vectorAlumnos.forEach((alumno) => {
    console.log(alumno.apellido, alumno.nombre);
    });
};