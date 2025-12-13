/* 1) Realice una función, que reciba como parámetro un vector de alumnos (puede ser de cualquier
cohorte) los recorra con un forEach y muestre por consola, el apellido y el nombre.
Invoque esa misma función, pasándole como parámetro el vector de la cohorte01, luego el vector de
la cohorte02 y así sucesivamente hasta la cuarta cohorte.
2) El profesor desea unificar todos los alumnos en un solo vector, dado que estructuralmente son
iguales, utilice spread operator para “unificar el contenido de las cuatro cohortes” en un solo
vector. Muestre por consola el vector resultante.
3) Sobre los datos unificados, cree dos vectores nuevos, uno puede llamarse alumnosAprobados y el
otro alumnosDesaprobados.
Para crear el vector de alumnos aprobados, aplique el método filter sobre el Vector que tiene todos
los alumnos cuando la nota > 5;
Para crear el vector de alumnos desaprobados, aplique el método filter sobre el Vector que tiene
todos los alumnos cuando la nota <= 5;
4) Sobre el vector Total de alumnos (cuatro cohortes), aplique el método “sort” = ordenar y ordene los
datos de todos esos alumnos por nota de menor a mayor.
5) Sobre el vector Total de alumnos, realice una búsqueda de los siguientes alumnos aplicando el
método “find” que tienen los vectores incorporados y busque algún alumno por su “dni”. El que ud.
Desee.
6) Sobre el vector Total de alumnos, deseamos “contabilizar” la cantidad de alumnos aprobados, es
decir la cantidad de alumnos que tienen nota > 5; para ello utilicen el método reduce que tienen los
vectores incorporados para contabilizar. Realice esto de dos formas
a. Usando una arrow function que a dentro utilice un condicional if/else para saber si la nota >
5 y por lo tanto contabilizar los aprobados;
b. Usando una arrow function que a dentro utilice un operador ternario para saber si la nota >
5 y por lo tanto contabilizar los aprobados;
Ambas formas deben llegar al mismo resultado, únicamente que se implementaron de dos formas
diferentes.
*/



// Ejercicio Nro. 1

import { cohorte01,cohorte02,cohorte03,cohorte04 } from "./datos.js";

export const fnRecorrerCohorte = (cohorteX) => {

cohorteX.forEach (alumno =>{console.log (`Nombre: ${alumno.nombre} - Apellido: ${alumno.apellido}`);})
};

export const mostrarCohorteDOM = (cohorteX, contenedor) => {
contenedor.innerHTML = ""; 

cohorteX.forEach(alumno => {
contenedor.innerHTML += `
<p>Nombre: ${alumno.nombre} - Apellido: ${alumno.apellido}</p>
`;});
};



// Ejercicio Nro. 2

export const alumnosUnificados = [...cohorte01,...cohorte02,...cohorte03,...cohorte04];

export const MostrarAlumnosUnificados = (cohortes,contenedor) => {
contenedor.innerHTML = "";

cohortes.forEach(alumno => {
contenedor.innerHTML += `
<p>Nombre: ${alumno.nombre} - Apellido: ${alumno.apellido}</p>
`;
})
};


// Ejercicio Nro. 3
// alumnos Aprobados

export const alumnosAprobados = alumnosUnificados.filter (alumno => alumno.nota_final > 5);

export const MostrarAlumnosAprobados = (alumnos,contenedor) => {

    contenedor.innerHTML = "";
    alumnosAprobados.forEach (alumno => {contenedor.innerHTML +=`<p>Nombre: ${alumno.nombre} - Apellido: ${alumno.apellido} - Nota final: ${alumno.nota_final}</p>`})

};


// Alumnos Desaprobados

export const alumnosDesaprobados = alumnosUnificados.filter (alumno => alumno.nota_final <= 5);

export const MostrarAlumnosDesaprobados = (alumnos,contenedor) => {

    contenedor.innerHTML = "";
    alumnosDesaprobados.forEach (alumno => {contenedor.innerHTML +=`<p>Nombre: ${alumno.nombre} - Apellido: ${alumno.apellido} - Nota final: ${alumno.nota_final}</p>`})

};


// Ejercicio Nro. 4

export const menorAmayor = alumnosUnificados.sort ((alumno1,alumno2) => alumno1.nota_final - alumno2.nota_final);

export const AlmunosOrdenados = (Ordenalumnos,contenedor) =>{
contenedor.innerHTML ="";
menorAmayor.forEach (alumno =>{
contenedor.innerHTML +=`<p>Nombre: ${alumno.nombre} - Apellido: ${alumno.apellido} - Nota final: ${alumno.nota_final}</p>`});
};



// Ejercicio Nro. 5

export const busquedaDNI = alumnosUnificados.find (alumno => alumno.dni === "78901235");

export const alumnoDni = (alumnos, contenedor, dni) =>{
contenedor.innerHTML ="";
[busquedaDNI].forEach (alumno =>{
contenedor.innerHTML +=`<p> El alumno buscado es: Nombre: ${alumno.nombre} - Apellido: ${alumno.apellido} - DNI: ${alumno.dni}</p>`
});

};



// Ejercicio Nro. 6.A

export const contarAprobados = alumnosUnificados.reduce ((contador,alumno)=>{

if (alumno.nota_final >5)
{
    
return contador +1;

}

return contador;

},0);

export const contadorAprobados = (contador, contenedor) =>{
    contenedor.innerHTML =`<p> ${contador}</p>`;

};



// Ejercicio Nro. 6.B

export const contarAprobados2 = alumnosUnificados.reduce ((contador,alumno)=> alumno.nota_final >5 ? contador +1: contador,0)

export const contadorAprobados2 = (contador, contenedor) =>{
    contenedor.innerHTML =`<p> ${contador}</p>`;

};

