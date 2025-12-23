
//Ejercicio 18//
//Punto 1//

//Variente 1-
export const fnRecorrerCohorte0= (cohorteX) => {
    cohorteX.forEach((alumno) => {
        console.log(`Apellido:${alumno.apellido}- Nombres:${alumno.nombre}- Nota Final: ${alumno.nota_final}`)

    })
}
//Variante 2- Variante mejorada utilizando Destructuring en el cuerpo de la función
export const fnRecorrerCohorteV2 = (cohorteX) => {
    cohorteX.forEach((alumno) => {
        // aquí estoy haciendo destructuring
        const { apellido, nombre, nota_final } = alumno;
        console.log(`Apellido:${apellido}- Nombre:${nombre}- Nota Final: ${nota_final}`)

    })
}
//Variante 3- Variante mejorada utilizando Destructuring en el encabezado del parametro de la arrow function
export const fnRecorrerCohorte= (cohorteX) => {
    cohorteX.forEach(({ apellido, nombre }) => {
        //const { apellido, nombre, nota_final } = persona;
        console.log(`Apellido:${apellido} - Nombre:${nombre}`)

    })
}

//Variante 3- Variante mejorada utilizando Destructuring en el encabezado del parametro de la arrow function
export const fnRecorrerCohorteV3 = (cohorteX) => {
    cohorteX.forEach(({ apellido, nombre, nota_final }) => {
        //const { apellido, nombre, nota_final } = persona;
        console.log(`Apellido:${apellido} - Nombre:${nombre} - Nota Final:${nota_final}`)

    })
}

//Punto 5- Buscar por dni
export const fnBuscarAlumnopordni = (cohortex, dni) => {
    const alumnoPorDNI = cohortex.find(alumno => alumno.dni === dni);

    if (alumnoPorDNI) {
        //console.log(`dni Buscado:`, alumnoPorDNI.dni);
        console.log("Alumno Encontrado:", alumnoPorDNI);
    }
    else {
        console.log(`No se encontró alumno con el dni solicitado`);
    }

}
//Punto 6:
 /* Contar la cantidad alumnos aprobados */
 //a- Utilizando if/else
export const fnContarAlumnosAprobados = (alumnos) => {  
    //console.log(alumnos);
    let contadorAlumnosAprobados = alumnos.reduce((contador, alumno) => {
        if (alumno.nota_final > 5) {
            //console.log(`cuenta aprobado`)
            contador = contador + 1;
            //console.log(contador);
        }
        return contador;// si o si tiene que existir un return            
    }, 0);
    console.log(`Total Alumnos Aprobados:${contadorAlumnosAprobados}`);

}

//b- Utilizando Operador Ternario
export const fnContarAlumnosAprobados1 = (alumnos) => {
    /* Contar la cantidad alumnos aprobados */
    let contadorAlumnosAprobados1 = alumnos.reduce((contador, alumno) => 
        {contador = (alumno.nota_final > 5) ? contador + 1 : contador;
        return contador;
    }, 0);
    console.log(`Total Alumnos Aprobados:${contadorAlumnosAprobados1}`);

}







