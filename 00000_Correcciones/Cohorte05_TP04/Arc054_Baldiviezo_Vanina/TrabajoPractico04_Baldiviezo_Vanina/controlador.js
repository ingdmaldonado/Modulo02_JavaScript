/*Ejercicio Nro. 18: ( spread operator ... y métodos de vectores)
Un profesor de programación tiene 4 curso o cohortes, en donde en cada cohorte existen alumnos
diferentes que cursaron su módulo de “fundamentos de programación con JavaScript”, el profesor tiene en un
vector diferente los alumnos y sus notas finales del cursado. “Se aprueba con notas > 4”. El listado de alumnos
es el siguiente:

Diplomatura Universitaria en Desarrollo Web
Full Stack con JavaScript
Módulo: JavaScript
const cohorte01 = [
{ dni: "12345678", nombre: "Juan", apellido: "Pérez", nota_final: 8 },
{ dni: "23456789", nombre: "Ana", apellido: "Gómez", nota_final: 6 },
{ dni: "34567890", nombre: "Carlos", apellido: "López", nota_final: 5 },
{ dni: "45678901", nombre: "María", apellido: "Martínez", nota_final: 7 }
];
const cohorte02 = [
{ dni: "56789012", nombre: "Sofía", apellido: "Ramírez", nota_final: 9 },
{ dni: "67890123", nombre: "Luis", apellido: "Fernández", nota_final: 4 },
{ dni: "78901234", nombre: "Elena", apellido: "Torres", nota_final: 5 }
];

const cohorte03 = [
{ dni: "89012345", nombre: "Pedro", apellido: "Álvarez", nota_final: 10 },
{ dni: "90123456", nombre: "Clara", apellido: "Méndez", nota_final: 3 },
{ dni: "12345679", nombre: "Jorge", apellido: "Salinas", nota_final: 6 },
{ dni: "23456780", nombre: "Andrea", apellido: "Cruz", nota_final: 2 },
{ dni: "34567891", nombre: "Sergio", apellido: "Paredes", nota_final: 8 }
];

const cohorte04 = [
{ dni: "45678902", nombre: "Lucía", apellido: "Ortiz", nota_final: 7 },
{ dni: "56789013", nombre: "Miguel", apellido: "Vega", nota_final: 4 },
{ dni: "67890124", nombre: "Raquel", apellido: "Silva", nota_final: 9 },
{ dni: "78901235", nombre: "Hugo", apellido: "Moreno", nota_final: 5 },
{ dni: "89012346", nombre: "Natalia", apellido: "Quinteros", nota_final: 6 },
{ dni: "90123457", nombre: "Diego", apellido: "Arce", nota_final: 3 }
]; */

import { cohorte01,cohorte02,cohorte03,cohorte04 } from "./datos.js";
import { cohortes, unificarCohortes, aprobados, desaprobados, NotasOrdenadasDeMenorAMayor, alumnoDni, contarAprobadosIf, contarAprobadosTernario } from "./modelo.js";

let alumnosDeTodasLasCohortes = [];

window.onload=()=>{
    console.log(`El programa esta corriendo..`);

    // Ejercicio 18 - Punto 1
    const btnCohorte1 = document.querySelector("#btnCohorte1");
    const btnCohorte2 = document.querySelector("#btnCohorte2");
    const btnCohorte3 = document.querySelector("#btnCohorte3");
    const btnCohorte4 = document.querySelector("#btnCohorte4");

    btnCohorte1.onclick = () =>{
        console.log(`Alumnos COHORTE 1`);
        cohortes(cohorte01);
    }

    btnCohorte2.onclick = () =>{
        console.log(`Alumnos COHORTE 2`);
        cohortes(cohorte02);
    }
    
    btnCohorte3.onclick = () =>{
        console.log(`Alumnos COHORTE 3`);
        cohortes(cohorte03);
    }
    
    btnCohorte4.onclick = () =>{
        console.log(`Alumnos COHORTE 4`);
        cohortes(cohorte04);
    }

    // Punto 2 - Unifacion de cohortes
    const btnUnificacionCohortes = document.querySelector("#btnUnificacionCohortes");
    btnUnificacionCohortes.onclick =() =>{
        alumnosDeTodasLasCohortes = unificarCohortes(cohorte01,cohorte02,cohorte03,cohorte04);
        console.log(alumnosDeTodasLasCohortes);
    }

    // Punto 3 - Alumnos Aprobados
    const btnListadoAlumnosAprobados = document.querySelector("#btnAlumnosAprobados");
    btnListadoAlumnosAprobados.onclick = () =>{
        const alumnosAprobados = aprobados(alumnosDeTodasLasCohortes);
        console.log("Aprobados:", alumnosAprobados);
    }

    // Punto 3 - Alumnos Desaprobados
    const btnListadoAlumnosDesaprobados = document.querySelector("#btnAlumnosDesaprobados");
    btnListadoAlumnosDesaprobados.onclick = () => {
        const alumnosDesaprobados = desaprobados(alumnosDeTodasLasCohortes);
        console.log("Desaprobados:", alumnosDesaprobados);  
    };

    // Punto 4 - Ordenar notas de menor a mayor
    const btnListadodeNotas = document.querySelector("#btnNotasMenorAMayor");
    btnListadodeNotas.onclick = () =>{
        const listadoOrdenadoDeNotas = NotasOrdenadasDeMenorAMayor(alumnosDeTodasLasCohortes);
        console.log(`Listado ordenado de Notas`);
        console.log(listadoOrdenadoDeNotas);
    }

    // Punto 5 - Busqueda de alumno por DNI
    const btnBuscarDni = document.querySelector("#btnBuscarDni");
    const inputDni = document.querySelector("#inputDni");

    btnBuscarDni.onclick = () => {
        const dniIngresado = inputDni.value;
        const alumnoEncontrado = alumnoDni(alumnosDeTodasLasCohortes, dniIngresado);

        if (alumnoEncontrado)
        {
            console.log("Alumno encontrado:");
            console.log(alumnoEncontrado);
        } 
        else 
        {
            console.log("No existe un alumno con ese DNI");
        }
    };

    // Punto 6 - reduce
    const btnContarAprobadosIf = document.querySelector("#btnContarAprobadosIf");

    btnContarAprobadosIf.onclick = () => {
        const cantidad = contarAprobadosIf(alumnosDeTodasLasCohortes);
        console.log("Cantidad de aprobados (if/else):", cantidad);
    };

    // Punto 6b - reduce con ternario
    const btnContarAprobadosTernario = document.querySelector("#btnContarAprobadosTernario");

    btnContarAprobadosTernario.onclick = () => {
        const cantidad = contarAprobadosTernario(alumnosDeTodasLasCohortes);
        console.log("Cantidad de aprobados (ternario):", cantidad);
    };
}