// Listar alumnos (apellido y nombre)
export const listarAlumnos = (cohorte) => {
cohorte.forEach(alumno => {
console.log(`${alumno.apellido}, ${alumno.nombre}`);
});
};


// Unificar cohortes
export const unificarCohortes = (...cohortes) => {
return [...cohortes.flat()];
};


// Filtrar aprobados
export const obtenerAprobados = (alumnos) => {
return alumnos.filter(a => a.nota_final > 5);
};


// Filtrar desaprobados
export const obtenerDesaprobados = (alumnos) => {
return alumnos.filter(a => a.nota_final <= 5);
};
// Ordenar por nota
export const ordenarPorNota = (alumnos) => {
return [...alumnos].sort((a, b) => a.nota_final - b.nota_final);
};


// Buscar por DNI
export const buscarPorDni = (alumnos, dni) => {
return alumnos.find(a => a.dni === dni);
};


// Contar aprobados con if/else
export const contarAprobadosIf = (alumnos) => {
return alumnos.reduce((acc, alumno) => {
if (alumno.nota_final > 5) {
return acc + 1;
} else {
return acc;
}
}, 0);
};
// Contar aprobados con operador ternario
export const contarAprobadosTernario = (alumnos) => {
return alumnos.reduce((acc, alumno) =>
alumno.nota_final > 5 ? acc + 1 : acc
, 0);
};