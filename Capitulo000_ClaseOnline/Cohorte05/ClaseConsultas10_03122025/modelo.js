

/* Ejercicio 18. Punto 1 
aqui estoy haciendo una función que recibe como 
parametro un Vector de cohorte que lo llame cohorteX
y que lo recibe, lo recorre y muestra apellido y nombre
*/ 

export const fnRecorrerCohorte = (cohorteX)=>{

    cohorteX.forEach(alumno => {

         console.log(`Apellido: ${alumno.apellido} - Nombres: ${alumno.nombre} - Nota: ${alumno.nota_final}`);

    })

};

/* Variante 2 - Variante mejorada. utilizando 
Destructuring en el cuerpo de la función */


export const fnRecorrerCohorteV2 = (cohorteX)=>{

    cohorteX.forEach(alumno => {

        // aqui estoy haciendo destructuring - cuerpo de la funcion //
        const {apellido,nombre,nota_final} = alumno;

        console.log(`Apellido: ${apellido} - Nombres: ${nombre} - Nota: ${nota_final}`);

    })

};

/* Hacemos la variante 03. donde haremos
destructuring directamente en el encabezado
del parametro de la arrow function */

export const fnRecorrerCohorteV3 = (cohorteX)=>{

    cohorteX.forEach(({apellido,nombre,nota_final}) => {

        // aqui estoy haciendo destructuring - cuerpo de la funcion //
       
        console.log(`Apellido: ${apellido} - Nombres: ${nombre} - Nota: ${nota_final}`);

    })
};