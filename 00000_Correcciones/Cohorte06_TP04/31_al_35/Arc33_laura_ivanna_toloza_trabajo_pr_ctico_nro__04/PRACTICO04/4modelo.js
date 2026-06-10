
export const ordenarPorNota = (vectorAlumnos)=>{
    return [...vectorAlumnos].sort((alumnoA, alumnoB)=>{
        return alumnoA.nota_final - alumnoB.nota_final;
        }
    );
};