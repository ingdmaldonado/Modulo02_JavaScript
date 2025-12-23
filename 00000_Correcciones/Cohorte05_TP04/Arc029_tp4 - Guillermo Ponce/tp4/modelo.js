// Cohortes definidas como objetos literales
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

// 1) Mostrar apellido y nombre usando forEach (uso $para funciones internas de controlador)
export const mostrarApellidoNombre = (vectorAlumnos = []) => {
	const lista = [];
	vectorAlumnos.forEach((alumno) => {
		const texto = `${alumno.apellido}, ${alumno.nombre}`;
		console.log(texto);
		lista.push(texto);
	});
	return lista;
};

// 2) Unifico todas las cohortes: spread
export const unificarSpread = (c1, c2, c3, c4) => {
	return [...c1, ...c2, ...c3, ...c4];
};

// Alternativa: usar rest para aceptar cualquier número de cohortes
export const unificarRest = (...cohortes) => cohortes.flat();

// 3) Filtrar aprobados (>5) y desaprobados (<=5)
export const alumnosAprobados = (vectorTotal) => vectorTotal.filter((a) => a.nota_final > 5);
export const alumnosDesaprobados = (vectorTotal) => vectorTotal.filter((a) => a.nota_final <= 5);

// 4) Ordenar por nota (menor → mayor). No muta el original. Uso sort para ordenar alfabeticamente y números.
export const ordenarPorNota = (vectorTotal) => {
	return [...vectorTotal].sort((a, b) => a.nota_final - b.nota_final);
};

// 5) Buscar por DNI. Metodo FIND retorna el primer elemento que cumple la condición o undefined si no lo encuentra.
export const buscarPorDNI = (vectorTotal, dni) => vectorTotal.find((a) => a.dni === dni);

// 6a) Contar aprobados con reduce + if/else. Retorna la cantidad de aprobados.
export const contarAprobadosIfElse = (vectorTotal) =>
	vectorTotal.reduce((acc, alumno) => {
		if (alumno.nota_final > 5) {
			return acc + 1;
		}
		return acc;
	}, 0);

// 6b) Contar aprobados con reduce + ternario. Retorna la cantidad de aprobados.
export const contarAprobadosTernario = (vectorTotal) =>
	vectorTotal.reduce((acc, alumno) => (alumno.nota_final > 5 ? acc + 1 : acc), 0);

// JSON helpers
export const toJSON = (obj) => JSON.stringify(obj, null, 2);
export const fromJSON = (str) => JSON.parse(str);

// Destructuring ejemplo: recibe un alumno y devuelve una cadena. 
export const ejemploDestructuring = (alumno = {}) => {
	const { apellido, nombre, nota_final } = alumno;
	return `${apellido}, ${nombre} - Nota: ${nota_final}`;
};

// Export unificado (total) de todas las cohortes. 
export const obtenerTodos = () => unificarSpread(cohorte01, cohorte02, cohorte03, cohorte04);

