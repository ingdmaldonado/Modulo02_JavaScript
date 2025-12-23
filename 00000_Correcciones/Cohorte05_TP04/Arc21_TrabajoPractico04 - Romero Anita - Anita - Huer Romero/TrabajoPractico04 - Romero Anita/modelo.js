// Cohortes: un vector (array) de objetos en JavaScript

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

/*
Ejercicio Nro. 1:
Realice una función, que reciba como parámetro un vector de alumnos (puede ser de cualquier
cohorte) los recorra con un forEach y muestre por consola, el apellido y el nombre.

Invoque esa misma función, pasándole como parámetro el vector de la cohorte01, luego el vector de
la cohorte02 y así sucesivamente hasta la cuarta cohorte.
*/

export const mostrarAlumnos = (cohorte) => {
    let texto = "Listado:\n";
    cohorte.forEach(a => texto += `${a.apellido}, ${a.nombre}\n`);
    return texto;
};

/*
Ejercicio Nro. 2:
El profesor desea unificar todos los alumnos en un solo vector, dado que 
estructuralmente son iguales, utilice spread operator para “unificar el contenido 
de las cuatro cohortes” en un solo vector. Muestre por consola el vector resultante.
*/
/*
export const unificarCohortes = (...cohortes) => {
    return [].concat(...cohortes);
};*/

export const unificarCohortes = (c1, c2, c3, c4) => {
    return [...c1, ...c2, ...c3, ...c4];
};


/*
Ejercicio Nro. 3:
Sobre los datos unificados, cree dos vectores nuevos, uno puede llamarse 
alumnosAprobados y el otro alumnosDesaprobados.

Para crear el vector de alumnos aprobados, aplique el método filter sobre el 
Vector que tiene todos los alumnos cuando la nota > 5;

Para crear el vector de alumnos desaprobados, aplique el método filter sobre el 
Vector que tiene todos los alumnos cuando la nota <= 5;
*/

export const filtrarAprobados = (alumnos) =>
    alumnos.filter(a => a.nota_final > 5);

export const filtrarDesaprobados = (alumnos) =>
    alumnos.filter(a => a.nota_final <= 5);

/*
Ejercicio Nro. 4:
Sobre el vector Total de alumnos (cuatro cohortes), aplique el método 
“sort” = ordenar y ordene los datos de todos esos alumnos por nota de menor a mayor.
*/

export const ordenarPorNota = (alumnos) =>
    [...alumnos].sort((a, b) => a.nota_final - b.nota_final);

/*
Ejercicio Nro. 5:
Sobre el vector Total de alumnos, realice una búsqueda de los siguientes alumnos 
aplicando el método “find” que tienen los vectores incorporados y busque algún 
alumno por su “dni”. El que ud. Desee.
*/

export const buscarPorDni = (alumnos, dni) =>
    alumnos.find(a => a.dni === dni);

/*
Ejercicio Nro. 6:
Sobre el vector Total de alumnos, deseamos “contabilizar” la cantidad de alumnos 
aprobados, es decir la cantidad de alumnos que tienen nota > 5; para ello utilicen 
el método reduce que tienen los vectores incorporados para contabilizar. Realice 
esto de dos formas
*/

/*
a) Con if/else: Usando una arrow function que a dentro utilice un condicional 
if/else para saber si la nota >5 y por lo tanto contabilizar los aprobados;
*/

export const contarAprobadosIf = (alumnos) =>
    alumnos.reduce((contador, a) => {
        if (a.nota_final > 5) return contador + 1;
        else return contador;
    }, 0);

/*
b) Con operador ternario: Usando una arrow function que a dentro utilice un operador ternario para saber si la nota >
5 y por lo tanto contabilizar los aprobados;

*/
export const contarAprobadosTernario = (alumnos) =>
    alumnos.reduce((acc, a) => a.nota_final > 5 ? acc + 1 : acc, 0);







