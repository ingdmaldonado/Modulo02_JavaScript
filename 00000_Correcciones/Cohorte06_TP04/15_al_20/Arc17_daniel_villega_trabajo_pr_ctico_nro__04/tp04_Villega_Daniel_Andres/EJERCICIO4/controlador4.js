import { 
    obtenerTodosLosAlumnos, 
    filtrarAprobados, 
    ordenarPorNotaAscendente, 
    
} from './modelo4.js';


const cohorte01 = [ { dni: "12345678", nombre: "Juan", apellido: "Pérez", nota_final: 8 }, { dni: "23456789", nombre: "Ana", apellido: "Gómez", nota_final: 6 }, { dni: "34567890", nombre: "Carlos", apellido: "López", nota_final: 5 }, { dni: "45678901", nombre: "María", apellido: "Martínez", nota_final: 7 } ];
const cohorte02 = [ { dni: "56789012", nombre: "Sofía", apellido: "Ramírez", nota_final: 9 }, { dni: "67890123", nombre: "Luis", apellido: "Fernández", nota_final: 4 }, { dni: "78901234", nombre: "Elena", apellido: "Torres", nota_final: 5 } ];
const cohorte03 = [ { dni: "89012345", nombre: "Pedro", apellido: "Álvarez", nota_final: 10 }, { dni: "90123456", nombre: "Clara", apellido: "Méndez", nota_final: 3 }, { dni: "12345679", nombre: "Jorge", apellido: "Salinas", nota_final: 6 }, { dni: "23456780", nombre: "Andrea", apellido: "Cruz", nota_final: 2 }, { dni: "34567891", nombre: "Sergio", apellido: "Paredes", nota_final: 8 } ];
const cohorte04 = [ { dni: "45678902", nombre: "Lucía", apellido: "Ortiz", nota_final: 7 }, { dni: "56789013", nombre: "Miguel", apellido: "Vega", nota_final: 4 }, { dni: "67890124", nombre: "Raquel", apellido: "Silva", nota_final: 9 }, { dni: "78901235", nombre: "Hugo", apellido: "Moreno", nota_final: 5 }, { dni: "89012346", nombre: "Natalia", apellido: "Quinteros", nota_final: 6 }, { dni: "90123457", nombre: "Diego", apellido: "Arce", nota_final: 3 } ];


const btnTodos = document.querySelector("#btn-todos");
const btnAprobados = document.querySelector("#btn-aprobados");
const btnOrdenar = document.querySelector("#btn-ordenar");
const contenedorResultado = document.querySelector("#resultado");


btnTodos.addEventListener("click", () => {
    const todos = obtenerTodosLosAlumnos(cohorte01, cohorte02, cohorte03, cohorte04);
    mostrarEnDOM("Listado Total de Alumnos", todos);
});

btnAprobados.addEventListener("click", () => {
    const todos = obtenerTodosLosAlumnos(cohorte01, cohorte02, cohorte03, cohorte04);
    const aprobados = filtrarAprobados(todos);
    mostrarEnDOM("Alumnos Aprobados (Nota > 4)", aprobados);
});

btnOrdenar.addEventListener("click", () => {
    const todos = obtenerTodosLosAlumnos(cohorte01, cohorte02, cohorte03, cohorte04);
    const ordenados = ordenarPorNotaAscendente(todos);
    mostrarEnDOM("Alumnos Ordenados por Nota (Menor a Mayor)", ordenados);
});




const mostrarEnDOM = (titulo, datos) => {
    let html = `<h3>${titulo}</h3><ul>`;
    datos.forEach(alumno => {
        html += `<li>${alumno.apellido}, ${alumno.nombre} - DNI: ${alumno.dni} - Nota: ${alumno.nota_final}</li>`;
    });
    html += `</ul>`;
    contenedorResultado.innerHTML = html;
};