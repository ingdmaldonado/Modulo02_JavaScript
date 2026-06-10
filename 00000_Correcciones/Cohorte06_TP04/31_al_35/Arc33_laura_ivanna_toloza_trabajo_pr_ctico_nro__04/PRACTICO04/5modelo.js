
export const buscarAlumno = (vectorAlumnos, dniBuscado)=>{
    return vectorAlumnos.find((alumno)=>{
            return alumno.dni === dniBuscado;
        }
    );
};