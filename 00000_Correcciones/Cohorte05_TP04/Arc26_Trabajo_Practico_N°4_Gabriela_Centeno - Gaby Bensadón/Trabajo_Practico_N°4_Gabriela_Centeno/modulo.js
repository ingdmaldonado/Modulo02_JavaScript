
/******************** PUNTO 1 ****************************/

export const recorrerCohorte = (cohorteX) => {

    const div = document.createElement("div");

    // bucle forEach
    cohorteX.forEach(({ apellido, nombre }) => {

        // creo un parrafo
        const parrafo = document.createElement("p");

        // defino el contenido del <p>
        parrafo.textContent = `Apellido: ${apellido} - Nombre: ${nombre}`;

        // lo agredo al div padre
        div.appendChild(parrafo);
    });

    return div;
};


/******************** PUNTO 2 ****************************/
// por pantalla
export const recorrerVectorUnificado = (Unificacion) => {

    // creo un solo div
    const divPunto2 = document.createElement("div");

    Unificacion.forEach(({ apellido, nombre }) => {

        const parrafo = document.createElement("p");
        parrafo.textContent = `Apellido: ${apellido} - Nombre: ${nombre}`;

        divPunto2.appendChild(parrafo);
    });

    return divPunto2;
};



/******************** PUNTO 3 ****************************/

export const Aprobados = (vector) => {

    // creo un solo div
    const divPunto3A = document.createElement("div");

    const alumnosAprobados = vector.filter(alumno => alumno.nota_final > 4);

    alumnosAprobados.forEach(({ apellido, nombre, nota_final }) => {

        const parrafo = document.createElement("p");
        parrafo.textContent = `Apellido: ${apellido} - Nombre: ${nombre} - Nota: ${nota_final}`;

        divPunto3A.appendChild(parrafo);
    }
    );

    return divPunto3A;
};

export const Desaprobados = (vector) => {

    // creo un solo div
    const divPunto3B = document.createElement("div");

    const alumnosAprobados = vector.filter(alumno => alumno.nota_final <= 4);

    alumnosAprobados.forEach(({ apellido, nombre, nota_final }) => {

        const parrafo = document.createElement("p");
        parrafo.textContent = `Apellido: ${apellido} - Nombre: ${nombre} - Nota: ${nota_final}`;

        divPunto3B.appendChild(parrafo);
    });

    return divPunto3B;

};




/******************** PUNTO 4 ****************************/

export const ordenarNotas = (alumnos) => {

    // creo un div
    const divPunto4 = document.createElement("div");

    const ordenMenorAMayor = [...alumnos].sort((a, b) => a.nota_final - b.nota_final);

    ordenMenorAMayor.forEach(({ apellido, nombre, nota_final }) => {

        const parrafo = document.createElement("p");
        parrafo.textContent = `Nota: ${nota_final} | Alumno/a: ${apellido}, ${nombre}`;

        divPunto4.appendChild(parrafo);
    }
    );

    return divPunto4;
};



/******************** PUNTO 5 ****************************/
export const busquedaPorDNI = (alumnos, dni) => {


    // busqueda del alumno por DNI
    const dniAlumno = alumnos.find(alumno => alumno.dni === dni);

    if (dniAlumno) {
        return ` Apellido: ${dniAlumno.apellido} - Nombre: ${dniAlumno.nombre} - Nota: ${dniAlumno.nota_final} - DNI: ${dniAlumno.dni}`;

    }

    return `Alumno no encontrado`;
};





/******************** PUNTO 6 ****************************/

// 6) a- 
export const contarAprobados = (alumnos) => {

    const totalAprobados = alumnos.reduce((contador, alumno) => {

        if (alumno.nota_final > 4) {

            contador = contador + 1;

            return contador;
        }

        return contador;
    }, 0);

    return totalAprobados;
};

// 6) b- 

export const operadorTernario = (alumnos) => {

    const totalAprobados2 = alumnos.reduce((contador, alumno) => {

        return alumno.nota_final > 4 ? contador = contador + 1 : contador
    }, 0);

    return totalAprobados2;
};
