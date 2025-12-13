// modelo.js

//1- Mostrar por Cohorte
export const mostrarNombres = (vector) => {
    vector.forEach(a => console.log( a.apellido + ", " + a.nombre));
};

//2- Unificar todos los vectores
export const unificar = (a,b,c,d) => [...a, ...b, ...c, ...d];

//3- Alumnos Aprobados y Desaprobados
//Alumnos Aprobados
export const filtrarAprobados = (v) => v.filter(a => a.nota_final > 5);
//Alumnos Desaprobados
export const filtrarDesaprobados = (v) => v.filter(a => a.nota_final <= 5);

//4- Ordenar los alumnos por nota
//Orden Ascendente (de menor a mayor)
export const ordenarPorNotaAsc = (v) => [...v].sort((a,b)=> a.nota_final - b.nota_final);
//Orden Descendente (de mayor a menor)
export const ordenarPorNotaDesc = (v) => [...v].sort((a,b)=> b.nota_final - a.nota_final);

//5- Busqueda de alumno por DNI
export const buscarDni = (v,dni) => v.find(a => a.dni === dni);

//6- Contabilizar la cantidad de alumnos aprobados con nota mayor a 5
//Usando arrow function con IF/ELSE
export const contarAprobadosIf = (v) =>
    v.reduce((acc, a) => {
        if (a.nota_final > 5) return acc + 1;
        else return acc;
    }, 0);
//Usando arrow function operador ternario
export const contarAprobadosTernario = (v) =>
    v.reduce((acc, a) => acc + (a.nota_final > 5 ? 1 : 0), 0);
