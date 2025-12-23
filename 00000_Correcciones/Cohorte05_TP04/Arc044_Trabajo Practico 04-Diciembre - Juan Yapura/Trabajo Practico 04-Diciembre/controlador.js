
/*
    Trabajo Practico. 04 - JavaScript

    - Objetos a partir de clases
    - Objetos literales
    - Rest Operator
    - Spread Operator
    - Conversión a formato JSON
    - Destructuring

    Especificaciones:
        - Utilizar manejor del DOM
        - Crear documento HTML y CSS a gusto del alumno
        - Definir el archivo controlador.js que capture los elementos con los que interactuará el usuario y agregar los comportamientos de los objetos/elementos HTML utilizando "addEventListener".
        - Si el programa, necesita una ó mas funciones debe (expresarlas como arrow function). Y si son funciones específicas de cálculos, funciones específicas de la resolucion del problema debe aislarlas en un archivo separado denominado "modelo.js" allí deberá tener su conjunto de funciones y exportarlar para que el controlador.js pueda consumirlas.
        - Desde el archivo "controlador.js" deberá importar esas funciones que están en el archivo "modelo.js".
        
        Ejercicio Nro 18: (spread operator ... y métodos de vectores)

            Un profesor de programación tiene 4 cursos o cohortes, en donde en cada cohorte existen alumnos diferentes que cursaron su módulo de "fundamentos de programacion con JavaScript" el profesor tiene en un vector diferente los alumnos y sus notas finales del cursador "Se aprueba con notas > 4". El listador de alumnos es el siguiente:

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
            ];

            1) Realice una función, que reciba como parámetro un vector de alumnos (puede ser de cualquier cohorte) los recorra con un forEach y muestre por consola, el apellido y el nombre.

            Invoque esa misma función, pasandole como parámetro el vector de la cohorte01, luego el vector de la cohorte 02 y así sucesivaente hasta la cuarta cohorte.
            .
            .
            .


*/


import { mostrarAlumnos, unificarCohortes, separarAprobados, ordenarPorNota,
    buscarPorDni, contarAprobadosIfElse, contarAprobadosTernario } from "./modelo.js";

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
];


let todosLosAlumnos = [];

const btnPunto1 = document.getElementById("btnPunto1");
const btnPunto2 = document.getElementById("btnPunto2");
const btnPunto3 = document.getElementById("btnPunto3");
const btnPunto4 = document.getElementById("btnPunto4");
const btnPunto5 = document.getElementById("btnPunto5");
const btnPunto6 = document.getElementById("btnPunto6");

const resultado1 = document.getElementById("resultado1");
const resultado2 = document.getElementById("resultado2");
const resultado3 = document.getElementById("resultado3");
const resultado4 = document.getElementById("resultado4");
const resultado5 = document.getElementById("resultado5");
const resultado6 = document.getElementById("resultado6");


btnPunto1.addEventListener("click", () => {
    resultado1.innerHTML = "";
    mostrarAlumnos(cohorte01, resultado1);
    mostrarAlumnos(cohorte02, resultado1);
    mostrarAlumnos(cohorte03, resultado1);
    mostrarAlumnos(cohorte04, resultado1);
});

btnPunto2.addEventListener("click", () => {
    todosLosAlumnos = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);
    resultado2.innerHTML = "";
});


btnPunto3.addEventListener("click", () => {
    separarAprobados(todosLosAlumnos, resultado3);
});

btnPunto4.addEventListener("click", () => {
    ordenarPorNota(todosLosAlumnos, resultado4);
});

btnPunto5.addEventListener("click", () => {
    buscarPorDni(todosLosAlumnos, "34567890", resultado5);
});


btnPunto6.addEventListener("click", () => {
    resultado6.innerHTML = "";
    contarAprobadosIfElse(todosLosAlumnos, resultado6);
    contarAprobadosTernario(todosLosAlumnos, resultado6);
});