
export const obtenerAprobados = (vectorAlumnos)=>{
    return vectorAlumnos.filter((alumno)=>{
    return alumno.nota_final > 5;
});
};

export const obtenerDesaprobados = (vectorAlumnos)=>{
    return vectorAlumnos.filter((alumno)=>{
    return alumno.nota_final <= 5;
});
};