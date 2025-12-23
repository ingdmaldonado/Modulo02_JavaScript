
/**Ejercicio N°1 */
const mostrarAlumnos = (alumno)=>{
    alumno.forEach(({apellido,nombre})=>console.log(`EL apellido es ${apellido}, su nombre es ${nombre}`))    
} 


/**Ejercicio N°2 */
const mostrarVectorSpreadOp = (alumnos) => {
    console.log(alumnos)
} 

/**Ejercicio N°3 */

const mostrarCondicionAlumnos = (alumno)=>{
    alumno.forEach(({apellido,nombre,nota_final, condicion })=>console.log(`Apellido: ${apellido}, ${nombre}. Nota final: ${nota_final}. Estado: ${condicion}`))    
} 

const determinaCondicionAlumno = (alumnos) => {

    const listadoAlumnoAprobados = alumnos.filter(alumno => alumno.nota_final >= 5);
    const listadoAlumnoDesaprobados = alumnos.filter(alumno => alumno.nota_final < 5);

    const nuevaClave = "condicion"
    const valorAprobado = "Aprobado"
    const valorDesaprobado = "Desaprobado"

    listadoAlumnoAprobados.forEach(objeto => {
    objeto[nuevaClave] = valorAprobado
    });

    listadoAlumnoDesaprobados.forEach(objeto => {
    objeto[nuevaClave] = valorDesaprobado
    });

    mostrarCondicionAlumnos(listadoAlumnoAprobados)
    mostrarCondicionAlumnos(listadoAlumnoDesaprobados)
    
} 

/**Ejercicio N°4 */
const ordenarVector = (alumnos) =>{
    alumnos.sort((a, b) => a.nota_final - b.nota_final);
    console.log(alumnos)

}

/**Ejercicio N°5 */
const buscarUnAlumno = (alumnos, valorDni) => {
    const alumnoEncontrado = alumnos.find(alumno=>alumno.dni === valorDni);
    if(alumnoEncontrado)
    {
       console.log(alumnoEncontrado);
    }else{
        console.log('Alumno no encontrado');
    }
}

/**Ejercicio N°6 */
const contarAprobados = (alumnos) =>{
    let contadorAprobadosIF = alumnos.reduce((contador,alumno)=>{
        if(alumno.nota_final > 5){ contador++ }
        return contador
    },0);
    console.log(`Alumnos aprobados - condicion IF ${contadorAprobadosIF}`);
    /* Contar los Paises de America del Sur
    que tienen más de 20 millones de habitantes */
    const contadorAprobadosTernario = alumnos.reduce((contador,alumno)=>{
        alumno.nota_final > 5 ? contador++:contador
        return contador
    },0);
    console.log(`Alumnos aprobados - condicion TERNARIO ${contadorAprobadosTernario}`);
}