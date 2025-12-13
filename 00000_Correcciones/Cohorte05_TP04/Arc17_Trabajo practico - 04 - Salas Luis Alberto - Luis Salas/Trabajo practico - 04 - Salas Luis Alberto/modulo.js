export const FuncionRecorrer = (CohorteX) =>
{
    CohorteX.forEach(alumno => {

        const {apellido,nombre} = alumno

        console.log(apellido,nombre)

    })
}