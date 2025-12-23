/* Ejercicio N18 aqui estoy haciendo una función que recibe como parametro un vector de cohorte que lo llame cohortex *que lo recibe lo recorre y muestra el apellido y nombre*/
// aqui es la definición de la funcion//
export const fnRecorrerCohorteV2 = (cohorteX)=>{

    cohorteX.forEach(alumno => {

// Aqui estoy haciendo destructuring - en el cuerpo de la función//
    const {apellido,nombre,nota_final}=alumno;

    console.log(`Apellido: ${apellido}- Nombre:${nombre}- Nota Final ${nota_final}` );

    
    });

};