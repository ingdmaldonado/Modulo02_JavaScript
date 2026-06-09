/* Consigan 1) Realice una función, que reciba como parámetro un vector de alumnos 
(puede ser de cualquier cohorte) los recorra con un forEach y muestre por consola, el apellido y el nombre. */

export function fnMostrarAlumnos(listaAlumnos)
{
    listaAlumnos.forEach(alumno =>{console.log(`${alumno.apellido}, ${alumno.nombre} Nota ${alumno.nota_final} `)});
}

/* Consigna 2) Unificar todos los alumnos en un solo vector, dado que estructuralmente son 
iguales, utilice spread operator para “unificar el contenido de las cuatro cohortes” en un solo vector.
Muestre por consola el vector resultante.
*/

export function fnUnificarAlumnos(lista1,lista2,lista3,lista4)
{
    return [...lista1,...lista2,...lista3,...lista4];
}


/* Consigna 3) Sobre los datos unificados, cree dos vectores nuevos, uno puede llamarse alumnosAprobados 
y el otro alumnosDesaprobados. Para crear el vector de alumnos aprobados, aplique el método filter sobre 
el Vector que tiene todos los alumnos cuando la nota > 5; Para crear el vector de alumnos desaprobados, 
aplique el método filter sobre el Vector que tiene todos los alumnos cuando la nota <= 5;
*/  

export function fnAprabados(listaAlumno)
{
    let listaAprobados = listaAlumno.filter(alumno => alumno.nota_final >5);
    return listaAprobados;
}

export function fnDesaprobados(listaAlumno)
{
    let listaAprobados = listaAlumno.filter(alumno => alumno.nota_final <=5);
    return listaAprobados;
}

/* Consigna 4) Sobre el vector Total de alumnos (cuatro cohortes), aplique el método “sort” = ordenar y ordene 
los datos de todos esos alumnos por nota de menor a mayor.
*/

export function fnOrdenarAlumnos(listaAlumno){

    let listaOrdenada = listaAlumno.sort((alumno_a,alumno_b) => alumno_b.nota_final - alumno_a.nota_final);
    return listaOrdenada;
}
/* Consignas 5) Sobre el vector Total de alumnos, realice una búsqueda de los siguientes alumnos aplicando el método “find” 
    que tienen los vectores incorporados y busque algún alumno por su “dni”. El que ud. Desee.  */
export function fnBuscarXDNI(listaAlumno,dni){

    if (dni === null || dni === "") {        
        return {
            nombre: "No existe",
            apellido: "No existe",
            dni: "No existe",
            nota_final: 0
        };
    }
    
    let alumnoBuscado = listaAlumno.find(alumno => alumno.dni === dni);
    return alumnoBuscado;
}
/* Consigna 6) Sobre el vector Total de alumnos, deseamos “contabilizar” la cantidad de alumnos aprobados, es decir la 
cantidad de alumnos que tienen nota > 5; para ello utilicen el método reduce que tienen los vectores incorporados 
para contabilizar. Realice esto de dos formas
a. Usando una arrow function que a dentro utilice un condicional if/else para saber si la nota > 5 y por lo tanto 
contabilizar los aprobados; */

export function fnContarAprobadosA(listaAlumno){
    
        
    let cantidadAprobados = listaAlumno.reduce((acumulador,elementoActual) => {
        
        let cantidadAprobados = acumulador;
        
        if(elementoActual.nota_final > 5){
            acumulador = cantidadAprobados + 1;
           return acumulador;            
        }
        else{
            acumulador = cantidadAprobados;
           return acumulador; 
        }           
        
    },0);

    return cantidadAprobados;
}

/* b. Usando una arrow function que a dentro utilice un operador ternario para saber si la nota > 5 y por lo tanto 
contabilizar los aprobados; Ambas formas deben llegar al mismo resultado, únicamente que se implementaron de dos formas diferentes. */
export function fnContarAprobadosB(listaAlumno){    
        
    let cantidadAprobados = listaAlumno.reduce((acumulador,elementoActual) => {
        
        let cantidadAprobados = acumulador;
        
        acumulador = elementoActual.nota_final > 5 ? cantidadAprobados + 1 : acumulador = cantidadAprobados;
        return acumulador;
        
    },0);

    return cantidadAprobados;
}