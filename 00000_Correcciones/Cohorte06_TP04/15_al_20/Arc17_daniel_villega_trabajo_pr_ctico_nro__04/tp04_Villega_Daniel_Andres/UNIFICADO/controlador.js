/************************PUNTO 1*************************************/

import { unirCohortes, listarAlumnos, buscarAlumnoPorDni1} from './modelo.js';


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


document.addEventListener('DOMContentLoaded', () => {
  const btnListar = document.querySelector('#listar-cohortes');
  const btnAprobados = document.querySelector('#mostrar-aprobados');
  const btnJson = document.querySelector('#exportar-json');
  const salidaTexto = document.querySelector('#salida-datos');


  btnListar.addEventListener('click', () => {
    console.log("--- LISTADO DE COHORTE 01 ---");
    listarAlumnos(cohorte01);
    console.log("--- LISTADO DE COHORTE 02 ---");
    listarAlumnos(cohorte02);
    console.log("--- LISTADO DE COHORTE 03 ---");
    listarAlumnos(cohorte03);
    console.log("--- LISTADO DE COHORTE 04 ---");
    listarAlumnos(cohorte04);
    salidaTexto.textContent = "Revisa la consola para ver el listado completo de todas las cohortes.";
  });

  
});


/************************PUNTO 2*************************************/

import { unificarCohortes} from './modelo.js';


const btnUnificar = document.querySelector('#btnUnificar');
const resultadoPre = document.querySelector('#resultado');


btnUnificar.addEventListener('click', () => {

    const todosLosAlumnos = unificarCohortes();
    

    console.log("Vector resultante de todas las cohortes:", todosLosAlumnos);

   
});

/*******************************PUNTO3****************************/

import { obtenerAprobados, obtenerDesaprobados } from './modelo.js';




document.addEventListener("DOMContentLoaded", () => {
    

    const btnProcesar = document.querySelector("#btn-procesar");
    const contenedorResultados = document.querySelector("#resultados");
    


    btnProcesar.addEventListener("click", () => {
        

        const todosLosAlumnos = obtenerTodosLosAlumnos(cohorte01, cohorte02, cohorte03, cohorte04);
        const alumnosAprobados = obtenerAprobados(todosLosAlumnos);
        const alumnosDesaprobados = obtenerDesaprobados(todosLosAlumnos);


        contenedorResultados.innerHTML = `
            <h3>Alumnos Aprobados (${alumnosAprobados.length}):</h3>
            <ul>
                ${alumnosAprobados.map(alumno => `<li>${alumno.nombre} ${alumno.apellido} - Nota: ${alumno.nota_final}</li>`).join("")}
            </ul>
            
            <h3>Alumnos Desaprobados (${alumnosDesaprobados.length}):</h3>
            <ul>
                ${alumnosDesaprobados.map(alumno => `<li>${alumno.nombre} ${alumno.apellido} - Nota: ${alumno.nota_final}</li>`).join("")}
            </ul>
        `;

        
    });
});



/****************************PUNTO 4************************************/

import { 
    obtenerTodosLosAlumnos, 
    filtrarAprobados, 
    ordenarPorNotaAscendente, 
    
} from './modelo.js';

// Datos de los alumnos (Objetos literales)
//const cohorte01 = [ { dni: "12345678", nombre: "Juan", apellido: "Pérez", nota_final: 8 }, { dni: "23456789", nombre: "Ana", apellido: "Gómez", nota_final: 6 }, { dni: "34567890", nombre: "Carlos", apellido: "López", nota_final: 5 }, { dni: "45678901", nombre: "María", apellido: "Martínez", nota_final: 7 } ];
//const cohorte02 = [ { dni: "56789012", nombre: "Sofía", apellido: "Ramírez", nota_final: 9 }, { dni: "67890123", nombre: "Luis", apellido: "Fernández", nota_final: 4 }, { dni: "78901234", nombre: "Elena", apellido: "Torres", nota_final: 5 } ];
//const cohorte03 = [ { dni: "89012345", nombre: "Pedro", apellido: "Álvarez", nota_final: 10 }, { dni: "90123456", nombre: "Clara", apellido: "Méndez", nota_final: 3 }, { dni: "12345679", nombre: "Jorge", apellido: "Salinas", nota_final: 6 }, { dni: "23456780", nombre: "Andrea", apellido: "Cruz", nota_final: 2 }, { dni: "34567891", nombre: "Sergio", apellido: "Paredes", nota_final: 8 } ];
//const cohorte04 = [ { dni: "45678902", nombre: "Lucía", apellido: "Ortiz", nota_final: 7 }, { dni: "56789013", nombre: "Miguel", apellido: "Vega", nota_final: 4 }, { dni: "67890124", nombre: "Raquel", apellido: "Silva", nota_final: 9 }, { dni: "78901235", nombre: "Hugo", apellido: "Moreno", nota_final: 5 }, { dni: "89012346", nombre: "Natalia", apellido: "Quinteros", nota_final: 6 }, { dni: "90123457", nombre: "Diego", apellido: "Arce", nota_final: 3 } ];


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


/*****************************PUNTO 5*********************************/ 

import { 
    
    obtenerAprobados1, 
    aFormatoJSON 
} from './modelo.js';


const cohortes = {
    c01: [ { dni: "12345678", nombre: "Juan", apellido: "Pérez", nota_final: 8 }, { dni: "23456789", nombre: "Ana", apellido: "Gómez", nota_final: 6 }, { dni: "34567890", nombre: "Carlos", apellido: "López", nota_final: 5 }, { dni: "45678901", nombre: "María", apellido: "Martínez", nota_final: 7 } ],
    c02: [ { dni: "56789012", nombre: "Sofía", apellido: "Ramírez", nota_final: 9 }, { dni: "67890123", nombre: "Luis", apellido: "Fernández", nota_final: 4 }, { dni: "78901234", nombre: "Elena", apellido: "Torres", nota_final: 5 } ],
    c03: [ { dni: "89012345", nombre: "Pedro", apellido: "Álvarez", nota_final: 10 }, { dni: "90123456", nombre: "Clara", apellido: "Méndez", nota_final: 3 }, { dni: "12345679", nombre: "Jorge", apellido: "Salinas", nota_final: 6 }, { dni: "23456780", nombre: "Andrea", apellido: "Cruz", nota_final: 2 }, { dni: "34567891", nombre: "Sergio", apellido: "Paredes", nota_final: 8 } ],
    c04: [ { dni: "45678902", nombre: "Lucía", apellido: "Ortiz", nota_final: 7 }, { dni: "56789013", nombre: "Miguel", apellido: "Vega", nota_final: 4 }, { dni: "67890124", nombre: "Raquel", apellido: "Silva", nota_final: 9 }, { dni: "78901235", nombre: "Hugo", apellido: "Moreno", nota_final: 5 }, { dni: "89012346", nombre: "Natalia", apellido: "Quinteros", nota_final: 6 }, { dni: "90123457", nombre: "Diego", apellido: "Arce", nota_final: 3 } ]
};


const totalAlumnos = obtenerTodosLosAlumnos(cohortes.c01, cohortes.c02, cohortes.c03, cohortes.c04);


const btnBuscar = document.getElementById('btn-buscar');
const inputDni = document.getElementById('input-dni');
const resultadoBusqueda = document.getElementById('resultado-busqueda');


btnBuscar.addEventListener('click', () => {
    const dniIngresado = inputDni.value.trim();
    const alumnoEncontrado = buscarAlumnoPorDni1(totalAlumnos, dniIngresado);

    if (alumnoEncontrado) {

        const { nombre, apellido, nota_final } = alumnoEncontrado;
        resultadoBusqueda.innerHTML = `Alumno encontrado: ${nombre} ${apellido} | Nota Final: ${nota_final}`;
    } else {
        resultadoBusqueda.innerHTML = "Alumno no encontrado. Verifique el DNI.";
    }
});


const alumnosAprobados = obtenerAprobados1(totalAlumnos);
console.log("Alumnos Aprobados (JSON):", aFormatoJSON(alumnosAprobados));

/*****************************PUNTO 6*********************************/ 


import { contarAprobadosIf, contarAprobadosTernario, obtenerPromedio } from './modelo.js';


const cohortes01 = [ { dni: "12345678", nombre: "Juan", apellido: "Pérez", nota_final: 8 }, { dni: "23456789", nombre: "Ana", apellido: "Gómez", nota_final: 6 }, { dni: "34567890", nombre: "Carlos", apellido: "López", nota_final: 5 }, { dni: "45678901", nombre: "María", apellido: "Martínez", nota_final: 7 } ];
const cohortes02 = [ { dni: "56789012", nombre: "Sofía", apellido: "Ramírez", nota_final: 9 }, { dni: "67890123", nombre: "Luis", apellido: "Fernández", nota_final: 4 }, { dni: "78901234", nombre: "Elena", apellido: "Torres", nota_final: 5 } ];
const cohortes03 = [ { dni: "89012345", nombre: "Pedro", apellido: "Álvarez", nota_final: 10 }, { dni: "90123456", nombre: "Clara", apellido: "Méndez", nota_final: 3 }, { dni: "12345679", nombre: "Jorge", apellido: "Salinas", nota_final: 6 }, { dni: "23456780", nombre: "Andrea", apellido: "Cruz", nota_final: 2 }, { dni: "34567891", nombre: "Sergio", apellido: "Paredes", nota_final: 8 } ];
const cohortes04 = [ { dni: "45678902", nombre: "Lucía", apellido: "Ortiz", nota_final: 7 }, { dni: "56789013", nombre: "Miguel", apellido: "Vega", nota_final: 4 }, { dni: "67890124", nombre: "Raquel", apellido: "Silva", nota_final: 9 }, { dni: "78901235", nombre: "Hugo", apellido: "Moreno", nota_final: 5 }, { dni: "89012346", nombre: "Natalia", apellido: "Quinteros", nota_final: 6 }, { dni: "90123457", nombre: "Diego", apellido: "Arce", nota_final: 3 } ];


const totalAlumnos1 = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];


const btnContar = document.getElementById('btn-contar');
const resultadoDiv = document.getElementById('resultado1');
const btnMostrarJson = document.getElementById('btn-mostrar-json');
const jsonDisplay = document.getElementById('json-display');


btnContar.addEventListener('click', () => {
    const totalAprobadosIf = contarAprobadosIf(totalAlumnos);
    const totalAprobadosTernario = contarAprobadosTernario(totalAlumnos);
    const promedio = obtenerPromedio(totalAlumnos);

    resultadoDiv.innerHTML = `
        <p><strong>Aprobados (Método If/Else):</strong> ${totalAprobadosIf}</p>
        <p><strong>Aprobados (Operador Ternario):</strong> ${totalAprobadosTernario}</p>
        <p><strong>Promedio general del curso:</strong> ${promedio}</p>
    `;
});


btnMostrarJson.addEventListener('click', () => {
    
    const [primerAlumno] = totalAlumnos;
    console.log(`Primer alumno desestructurado: ${primerAlumno.nombre} ${primerAlumno.apellido}`);


    const alumnosJson = JSON.stringify(totalAlumnos, null, 2);
    jsonDisplay.textContent = alumnosJson;
});


