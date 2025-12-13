export const cohorte01 = [
    { dni: "12345678", nombre: "Juan", apellido: "Pérez", nota_final: 8 },
    { dni: "23456789", nombre: "Ana", apellido: "Gómez", nota_final: 6 },
    { dni: "34567890", nombre: "Carlos", apellido: "López", nota_final: 5 },
    { dni: "45678901", nombre: "María", apellido: "Martínez", nota_final: 7 }
];

export const cohorte02 = [
    { dni: "56789012", nombre: "Sofía", apellido: "Ramírez", nota_final: 9 },
    { dni: "67890123", nombre: "Luis", apellido: "Fernández", nota_final: 4 },
    { dni: "78901234", nombre: "Elena", apellido: "Torres", nota_final: 5 }
];

export const cohorte03 = [
    { dni: "89012345", nombre: "Pedro", apellido: "Álvarez", nota_final: 10 },
    { dni: "90123456", nombre: "Clara", apellido: "Méndez", nota_final: 3 },
    { dni: "12345679", nombre: "Jorge", apellido: "Salinas", nota_final: 6 },
    { dni: "23456780", nombre: "Andrea", apellido: "Cruz", nota_final: 2 },
    { dni: "34567891", nombre: "Sergio", apellido: "Paredes", nota_final: 8 }
];

export const cohorte04 = [
    { dni: "45678902", nombre: "Lucía", apellido: "Ortiz", nota_final: 7 },
    { dni: "56789013", nombre: "Miguel", apellido: "Vega", nota_final: 4 },
    { dni: "67890124", nombre: "Raquel", apellido: "Silva", nota_final: 9 },
    { dni: "78901235", nombre: "Hugo", apellido: "Moreno", nota_final: 5 },
    { dni: "89012346", nombre: "Natalia", apellido: "Quinteros", nota_final: 6 },
    { dni: "90123457", nombre: "Diego", apellido: "Arce", nota_final: 3 }
];

/* Punto 01 - Mostrar el apellido y el nombre los alumnos de cada vector por consola */
export const mostrarApellidoNombre = cohorte => cohorte.forEach(alumno => console.log(alumno.apellido, alumno.nombre));

/* Mostrar vector por consola */
export const mostrarVectorAlumnos = vectorAlumnos => {
    vectorAlumnos.forEach(alumno => {
        console.log(`DNI: ${alumno.dni} \nNombre y Apellido: ${alumno.nombre} ${alumno.apellido} \nNota Final: ${alumno.nota_final}`);
    });
}

/* PUNTO 01 */
export const listarApellidosNombres = (cohorte, nroCohorte, salida) => {
    const contenedorCohorte = document.createElement('div');
    salida.appendChild(contenedorCohorte);
    const textoNroCohorte = document.createElement('h2');
    textoNroCohorte.textContent = `Cohorte Nro. ${nroCohorte}`;
    contenedorCohorte.appendChild(textoNroCohorte);
    const ulCohorte = document.createElement('ul');
    contenedorCohorte.appendChild(ulCohorte);
    cohorte.forEach(alumno => {
        const liAlumno = document.createElement('li')
        liAlumno.textContent = `${alumno.apellido} ${alumno.nombre}`;
        ulCohorte.appendChild(liAlumno);
    });
};

export const limpiarConsola = (salida) => salida.innerHTML = '';

/* Punto 03 - Crear vector de alumnos aprobados (nota_final > 5) */
export const crearVectorAlumnosAprobados = cohorte => {
    const alumnosAprobados = cohorte.filter(alumno => alumno.nota_final > 5);
    return alumnosAprobados;
};

export const listarAlumnosAprobados = (vectorAprobados, salida)=> {
    const textoAlumnosAprobados = document.createElement('h2');
    textoAlumnosAprobados.textContent = 'Alumnos aprobados: Nota Final mayor a 5 (cinco)';
    salida.appendChild(textoAlumnosAprobados);
    const listaAprobados = document.createElement('ul');
    salida.appendChild(listaAprobados);
    vectorAprobados.forEach(alumno => {
        const itemAlumoAprobado = document.createElement('li');
        itemAlumoAprobado.textContent = `DNI: ${alumno.dni} - ${alumno.apellido} ${alumno.nombre} - Nota final: ${alumno.nota_final}`;
        listaAprobados.appendChild(itemAlumoAprobado);
    });
};

/* Punto 03 - Crear vector de alumnos desaprobados (nota_final <= 5) */
export const crearVectorAlumnosDesaprobados = cohorte => {
    const alumnosDesaprobados = cohorte.filter(alumno => alumno.nota_final <= 5);
    return alumnosDesaprobados;
};

export const listarAlumnosDesaprobados = (vectorDesaprobados, salida) => {
    const textoAlumosDesaprobados = document.createElement('h2');
    textoAlumosDesaprobados.textContent = 'Alumnos desaprobados: Nota Final menor o igual a 5 (cinco)';
    salida.appendChild(textoAlumosDesaprobados);
    const listaDesaprobados = document.createElement('ul');
    salida.appendChild(listaDesaprobados);
    vectorDesaprobados.forEach(alumno => {
        const itemAlumnoDesaprobado = document.createElement('li');
        itemAlumnoDesaprobado.textContent = `DNI: ${alumno.dni} - ${alumno.apellido} ${alumno.nombre} - Nota final: ${alumno.nota_final}`;
        listaDesaprobados.appendChild(itemAlumnoDesaprobado);
    });
};

/* Punto 04 - Ordenar todos los alumnos por nota de menor a mayor */
export const ordenarAlumnosPorNota = vectorTotalAlumnos => {
    const vectorAlumnosOrdenado = vectorTotalAlumnos.sort((itemA, itemB) => itemA.nota_final - itemB.nota_final);
    return vectorAlumnosOrdenado;
};

/* Mostrar la lista de alumnos ordenada */
export const mostrarListaOrdenada = (vectorAlumnosOrdenado, salida) => {
    const textoAlumnosOrdenados = document.createElement('h2');
    textoAlumnosOrdenados.textContent = 'Alumnos ordenados por nota de menor a mayor';
    salida.appendChild(textoAlumnosOrdenados);
    const alumnoLista = document.createElement('ul');
    salida.appendChild(alumnoLista);
    vectorAlumnosOrdenado.forEach(alumno => {
        const alumnoItem = document.createElement('li');
        alumnoItem.textContent = `DNI: ${alumno.dni} - ${alumno.apellido} ${alumno.nombre} - Nota Final: ${alumno.nota_final}`;
        alumnoLista.appendChild(alumnoItem);
    });
}

/* Punto 05 - Buscar alumno por DNI */
export const buscarAlumnoPorDni = (vectorTotalAlumnos, dniIngresado) => {
    const alumnoEcontrado = vectorTotalAlumnos.find(alumno => alumno.dni === dniIngresado);
    return alumnoEcontrado;
};

export const mostrarAlumnoEncontrado = (alumnoEncontrado, salida) => {
    const textoAlumnoEncotrado = document.createElement('h2');
    salida.appendChild(textoAlumnoEncotrado);
    if (alumnoEncontrado) {
        textoAlumnoEncotrado.textContent = `DNI: ${alumnoEncontrado.dni} - ${alumnoEncontrado.apellido} ${alumnoEncontrado.nombre} - Nota Final: ${alumnoEncontrado.nota_final}`;
    } else {
        textoAlumnoEncotrado.textContent = `No se encotro ningún alumno con el DNI ingresado`;
    }
};

/* Punto 6 - Contar cantidad de alumnos aprobados con if/else */
export const contarAlumnosAprobados = vectorAlumnos => {
    let cantidadAprobados = vectorAlumnos.reduce((contadorAprobados, alumno) => {
        if (alumno.nota_final > 5) {
            return contadorAprobados + 1;
        } else {
            return contadorAprobados;
        }
    }, 0);
    return cantidadAprobados;
};

/* Punto 6 - Contar cantidad de alumnos aprobados con operador ternario */
export const contarAlumnosAprobadosOt = vectorAlumnos => {
    return vectorAlumnos.reduce((contadorAprobados, alumno) => alumno.nota_final > 5 ? contadorAprobados + 1 : contadorAprobados, 0);
};

export const mostrarCantidadAlumnosAprobados = (cantidadAprobados, salida) => {
    const textoCantidadAprobados = document.createElement('h2');
    textoCantidadAprobados.textContent = `Hay ${cantidadAprobados} alumnos aprobados`;
    salida.appendChild(textoCantidadAprobados);
};

