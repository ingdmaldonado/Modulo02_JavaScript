export const fnMostrarAlumnos = (cohorte => {
        cohorte.forEach(alumno => {
            console.log(`APELLIDO: ${alumno.apellido} - NOMBRE: ${alumno.nombre}`);
        });
    });