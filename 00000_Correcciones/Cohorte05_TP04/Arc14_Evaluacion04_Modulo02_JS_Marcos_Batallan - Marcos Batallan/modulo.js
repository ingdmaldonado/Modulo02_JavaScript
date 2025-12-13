
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

/* Aquí defino la función que va a recibir como
parámetro el vector de una Cohorte "N". A ese
vector lo voy a recorrer y luego voy a mostrar
por consola los datos solicitados en el enunciado */

/***** FUNCIÓN Versión 1 ******/
export const fnAlumnosCohortesVer1 = (cohorteN)=>{ //La fn recibe el parámetro

    cohorteN.forEach(alumno =>{ //La recorro con el método forEach

        console.log(`Apellido y Nombres: ${alumno.apellido} ${alumno.nombre}`); // Muestro los datos solicitados
    });
};

/* Aquí voy a agregar 2 maneras más de expresar la
función anterior aplicando el ella un destructuring,
tanto en el encabezado de la arrow function, como
así tambien en el cuerpo de la misma */

/* Esto surje luego de haber participado en la clase de consultas 10,
que me ayudó a comprender la importancia y la funcionalidad de
aplicar destructuring en las funciones */

/***** FUNCIÓN Versión 2 (destructuring en el encabezado de la arrow function *****/

export const fnAlumnosCohortesVer2 = (cohorteN)=>{ //La fn recibe el parámetro

    cohorteN.forEach(({apellido,nombre}) =>{ //Aplico destructuring en el encabezado de la arrow function

        console.log(`Apellido y Nombres: ${apellido} ${nombre}`); // Muestro los datos solicitados
    });
};

/***** FUNCIÓN Versión 3 (destructuring en el cuerpo de la arrow function *****/

export const fnAlumnosCohorteVer3 = (cohorteN)=>{

    cohorteN.forEach((alumno)=>{
        
        let {apellido,nombre} = alumno; //Creo este vector y aplico el destructuring en el cuerpo de la arrow function

        console.log(`Apellido y Nombres: ${apellido} ${nombre}`); // Muestro los datos solicitados
    });
};

/* Creo esta función para que recorra todos los vectores y me muestre datos puntuales (nombre, apellido y nota)
Luego voy a invocarla en los ejercicios en donde necesito mostrar sólo esos datos */

export const fnTodasLasCohortes = (cohorteN)=>{

    cohorteN.forEach(({apellido,nombre,nota_final})=>{
        
        console.log(`Apellido y Nombre: ${apellido} ${nombre} - Nota Final: ${nota_final}`);
    });
};


