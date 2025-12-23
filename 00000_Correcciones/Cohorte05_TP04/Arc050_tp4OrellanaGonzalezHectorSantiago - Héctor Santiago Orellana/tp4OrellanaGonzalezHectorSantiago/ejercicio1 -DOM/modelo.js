// en este sector tengo contenida la función//

/* Ejercicio N18 aqui estoy haciendo una función que recibe como parametro un vector de cohorte que lo llame cohortex *que lo recibe lo recorre y muestra el apellido y nombre*/
// aqui es la definición de la funcion//
export const fnRecorrerCohorte = (cohorteX)=>{
 
    cohorteX.forEach(alumno => {

    console.log(`Apellido: ${alumno.apellido}- Nombre:${alumno.nombre}` );
       
    
    });

};
