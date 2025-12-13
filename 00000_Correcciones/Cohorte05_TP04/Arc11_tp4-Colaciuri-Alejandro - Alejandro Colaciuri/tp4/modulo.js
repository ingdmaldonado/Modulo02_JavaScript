export const mostrarAlumnos =(alumnos)=>{

    alumnos.forEach(alumno=>{
        console.log(`Apellido: ${alumno.apellido} - Nombre: ${alumno.nombre} - ${alumno.nota_final}`);
    });
}