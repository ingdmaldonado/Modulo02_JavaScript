
export const aprobadosIf = (vectorAlumnos)=>{
    return vectorAlumnos.reduce((contador, alumno)=>{
            if(alumno.nota_final > 5){
                return contador + 1;
            }
            else{
                return contador;
            }
        }
    ,0);
};

export const aprobadosTernario = (vectorAlumnos)=>{
    return vectorAlumnos.reduce((contador, alumno) => alumno.nota_final > 5? contador + 1: contador, 0);
};