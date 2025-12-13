
/*Ejercicio N°1*/
/* Realice una función, que reciba como parámetro un vector de alumnos (puede ser de cualquier
cohorte) los recorra con un forEach y muestre por consola, el apellido y el nombre.
Invoque esa misma función, pasándole como parámetro el vector de la cohorte01, luego el vector de
la cohorte02 y así sucesivamente hasta la cuarta cohorte.*/

const mostrarAlumnos = (alumno)=>{
    alumno.forEach(({apellido,nombre})=>console.log(`Su apellido es: ${apellido}, su nombre es: ${nombre}`))    
} 


/*Ejercicio N°2*/
/*El profesor desea unificar todos los alumnos en un solo vector, dado que estructuralmente son
iguales, utilice spread operator para “unificar el contenido de las cuatro cohortes” en un solo
vector. Muestre por consola el vector resultante.*/

const mostrarVectorSpreadOp = (alumnos) => {
    console.log(alumnos)
} 

/*Ejercicio N°3*/
/*Sobre los datos unificados, cree dos vectores nuevos, uno puede llamarse alumnosAprobados y el
otro alumnosDesaprobados.
Para crear el vector de alumnos aprobados, aplique el método filter sobre el Vector que tiene todos
los alumnos cuando la nota > 5;
Para crear el vector de alumnos desaprobados, aplique el método filter sobre el Vector que tiene
todos los alumnos cuando la nota <= 5;*/

const mostrarCondicionAlumnos = (alumno)=>{
    alumno.forEach(({apellido,nombre,nota_final, condicion})=>console.log(`Apellido: ${apellido}, Nombre: ${nombre}. Nota final: ${nota_final}. Estado: ${condicion}`));    
} 

const determinaCondicionAlumno = (alumnos) => {

    const alumnosAprobados = alumnos.filter(alumno => alumno.nota_final >= 5);
    const alumnosDesaprobados = alumnos.filter(alumno => alumno.nota_final < 5);

    const nuevaClave = "condicion"
    const valorAprobado = "Aprobado"
    const valorDesaprobado = "Desaprobado"

    alumnosAprobados.forEach(objeto => {
    objeto[nuevaClave] = valorAprobado
    });

    alumnosDesaprobados.forEach(objeto => {
    objeto[nuevaClave] = valorDesaprobado
    });

    mostrarCondicionAlumnos(alumnosAprobados);
    mostrarCondicionAlumnos(alumnosDesaprobados);
    
} 

/*Ejercicio N°4*/
/* Sobre el vector Total de alumnos (cuatro cohortes), aplique el método “sort” = ordenar y ordene los
datos de todos esos alumnos por nota de menor a mayor.*/

const ordenarVector = (alumnos) =>{
    alumnos.sort((a, b) => a.nota_final - b.nota_final);
    console.log(alumnos)

}

/*Ejercicio N°5*/
/*Sobre el vector Total de alumnos, realice una búsqueda de los siguientes alumnos aplicando el
método “find” que tienen los vectores incorporados y busque algún alumno por su “dni”. El que ud.
Desee.*/

const buscarAlumno = (alumnos, numeroDni) => {
    const alumnoEncontrado = alumnos.find(alumno=>alumno.dni === numeroDni);
    if(alumnoEncontrado){
       console.log(alumnoEncontrado)
    }else{
        console.log('Alumno no encontrado')
    }
}

/*Ejercicio N°6*/
/*Sobre el vector Total de alumnos, deseamos “contabilizar” la cantidad de alumnos aprobados, es
decir la cantidad de alumnos que tienen nota > 5; para ello utilicen el método reduce que tienen los
vectores incorporados para contabilizar. Realice esto de dos formas:

a. Usando una arrow function que a dentro utilice un condicional if/else para saber si la nota >
5 y por lo tanto contabilizar los aprobados;

b. Usando una arrow function que a dentro utilice un operador ternario para saber si la nota >
5 y por lo tanto contabilizar los aprobados;

Ambas formas deben llegar al mismo resultado, únicamente que se implementaron de dos formas
diferentes.*/

const contarAprobados = (alumnos) =>{
    let contadorAprobadosIF = alumnos.reduce((contador,alumno)=>{
        if(alumno.nota_final > 5){ contador++ }
        return contador
    },0);
    console.log(`Alumnos aprobados - condicion IF ${contadorAprobadosIF}`);
    
    const contadorAprobadosTernario = alumnos.reduce((contador,alumno)=>{
        alumno.nota_final > 5 ? contador++:contador
        return contador
    },0);
    console.log(`Alumnos aprobados - condicion TERNARIO ${contadorAprobadosTernario}`);
}