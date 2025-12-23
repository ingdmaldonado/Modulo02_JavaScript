// controlador.js, aqui creo los manejadores de eventos y uso las funciones del modelo solicitado para el ejercicio. 
/* Ejercicio TP4 - Manejo de Arrays Avanzado
   - Usar las funciones del modelo para crear un controlador con botones que permitan:
	 1) Mostrar apellido y nombre por cohorte	
	 2) Unificar cohortes
	 3) Filtrar aprobados / desaprobados
	 4) Ordenar por nota
	 5) Buscar por DNI
	 6) Contar aprobados (if/else y ternario)
	 - Mostrar JSON del primer alumno
	 - Ejemplo destructuring
*/
//aqui estan las funciones a importar desde el modelo.js.

import {
	cohorte01,
	cohorte02,
	cohorte03,
	cohorte04,
	mostrarApellidoNombre,
	unificarSpread,
	unificarRest,
	alumnosAprobados,
	alumnosDesaprobados,
	ordenarPorNota,
	buscarPorDNI,
	contarAprobadosIfElse,
	contarAprobadosTernario,
	toJSON,
	ejemploDestructuring,
	obtenerTodos,
} from './modelo.js';

const $ = (sel) => document.querySelector(sel); //uso query selector para simplificar el acceso al DOM.
const output = $('#output');

//uso render para mostrar resultados en el div de output en el HTML.
//uso stringify para mostrar objetos de forma legible en el output, asi es ams limpio para el localStorage.
const render = (value) => {
	if (typeof value === 'string') {
		output.textContent = value;
	} else {
		try {
			output.textContent = JSON.stringify(value, null, 2);
		} catch (e) {
			output.textContent = String(value);
		}
	}
};

// 1) Mostrar apellido y nombre por cohorte
$('#btn-log').addEventListener('click', () => {
	console.clear();
	console.log('--- Cohorte 01 ---');
	const c1 = mostrarApellidoNombre(cohorte01);
	console.log('--- Cohorte 02 ---');
	const c2 = mostrarApellidoNombre(cohorte02);
	console.log('--- Cohorte 03 ---');
	const c3 = mostrarApellidoNombre(cohorte03);
	console.log('--- Cohorte 04 ---');
	const c4 = mostrarApellidoNombre(cohorte04);

	render({ cohorte01: c1, cohorte02: c2, cohorte03: c3, cohorte04: c4 });
});

// 2) Unificar cohortes
$('#btn-merge').addEventListener('click', () => {
	const todosSpread = unificarSpread(cohorte01, cohorte02, cohorte03, cohorte04);
	const todosRest = unificarRest(cohorte01, cohorte02, cohorte03, cohorte04);
	console.log('Todos (spread):', todosSpread);
	render({ todosSpread, total: todosSpread.length });
});

// 3) Filtrar aprobados / desaprobados
$('#btn-filter').addEventListener('click', () => {
	const todos = obtenerTodos();
	const aprobados = alumnosAprobados(todos);
	const desaprobados = alumnosDesaprobados(todos);
	console.log('Aprobados:', aprobados);
	console.log('Desaprobados:', desaprobados);
	render({ aprobados, desaprobados, aprobadosCount: aprobados.length, desaprobadosCount: desaprobados.length });
});

// 4) Ordenar por nota
$('#btn-sort').addEventListener('click', () => {
	const todos = obtenerTodos();
	const ordenados = ordenarPorNota(todos);
	console.log('Ordenados por nota (menor → mayor):', ordenados);
	render(ordenados);
});

// 5) Buscar por DNI
$('#btn-find').addEventListener('click', () => {
	const dni = $('#dni-input').value.trim();
	if (!dni) {
		render('Ingrese un DNI en el campo para buscar.');
		return;
	}
	const todos = obtenerTodos();
	const encontrado = buscarPorDNI(todos, dni);
	console.log('Resultado búsqueda DNI', dni, encontrado);
	render(encontrado ? encontrado : `No se encontró alumno con DNI ${dni}`);
});

// 6a) Contar aprobados (if/else)
$('#btn-count-if').addEventListener('click', () => {
	const todos = obtenerTodos();
	const cantidad = contarAprobadosIfElse(todos);
	console.log('Cantidad aprobados (if/else):', cantidad);
	render({ metodo: 'if/else', cantidad });
});

// 6b) Contar aprobados (ternario)
$('#btn-count-tern').addEventListener('click', () => {
	const todos = obtenerTodos();
	const cantidad = contarAprobadosTernario(todos);
	console.log('Cantidad aprobados (ternario):', cantidad);
	render({ metodo: 'ternario', cantidad });
});

// JSON del primero
$('#btn-json').addEventListener('click', () => {
	const todos = obtenerTodos();
	const primero = todos[0];
	const json = toJSON(primero);
	console.log('JSON del primero:', json);
	render(json);
});

// Destructuring ejemplo
$('#btn-destruct').addEventListener('click', () => {
	const todos = obtenerTodos();
	const ejemplo = ejemploDestructuring(todos[0]);
	console.log('Ejemplo destructuring:', ejemplo);
	render(ejemplo);
});