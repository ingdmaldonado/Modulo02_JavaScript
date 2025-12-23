import {cohorte01,cohorte02,cohorte03,cohorte04} from "./datos.js"

// ejercicio 1

export function mostrarAlumnos(vectorAlumnos) {
    vectorAlumnos.forEach(alumno => {
        console.log(`${alumno.apellido}, ${alumno.nombre}`);
    });
}

export function mostrar(vectorAlumnos) {
    const listaAlumnos = document.getElementById("listaAlumnos");
    listaAlumnos.innerHTML = ""; // Limpiar lista anterior
    
    vectorAlumnos.forEach(alumno => {
        const li = document.createElement("li");
        li.textContent = `${alumno.apellido}, ${alumno.nombre}, nota:${alumno.nota_final}`;
        listaAlumnos.appendChild(li);
    });
}

export function mostrarAlumnosConNotas(vectorAlumnos) {
    const listaAlumnos = document.getElementById("listaAlumnos");
    listaAlumnos.innerHTML = ""; // Limpiar lista anterior
    
    vectorAlumnos.forEach(alumno => {
        const li = document.createElement("li");
        li.textContent = `${alumno.apellido}, ${alumno.nombre} - Nota: ${alumno.nota_final}`;
        listaAlumnos.appendChild(li);
    });
}

//ejercicio 2

export const todosLosAlumnos = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];

// ejercicio 3

export const alumnosAprobados = todosLosAlumnos.filter (alumno => alumno.nota_final > 5);

export const alumnosDesaprobados = todosLosAlumnos.filter (alumno => alumno.nota_final <= 5);

// ejercicio 4

export const alumnosOrdenados = [...todosLosAlumnos].sort((a, b) => a.nota_final - b.nota_final);

// ejercicio 5

export function buscarAlumnoPorDNI(dni) {
    return todosLosAlumnos.find(alumno => alumno.dni === dni);
}

// ejercicio 6 - Contabilizar alumnos aprobados usando reduce con if/else
export function contarAprobadosConIf() {
    return todosLosAlumnos.reduce((contador, alumno) => {
        if (alumno.nota_final > 5) {
            return contador + 1;
        } else {
            return contador;
        }
    }, 0);
}

// ejercicio 6 - Contabilizar alumnos aprobados usando reduce con operador ternario
export function contarAprobadosConTernario() {
    return todosLosAlumnos.reduce((contador, alumno) => {
        return alumno.nota_final > 5 ? contador + 1 : contador;
    }, 0);
}




