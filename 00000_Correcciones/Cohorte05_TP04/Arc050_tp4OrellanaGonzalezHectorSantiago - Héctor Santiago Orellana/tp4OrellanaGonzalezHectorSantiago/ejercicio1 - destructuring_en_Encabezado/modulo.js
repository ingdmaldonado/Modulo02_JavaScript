/* Ejercicio N18 aqui estoy haciendo una función que recibe como parametro un vector de cohorte que lo llame cohortex *que lo recibe lo recorre y muestra el apellido y nombre*/
// aqui es la definición de la funcion//

// aqui hago la variante 03 donde hacemos destructuring directamente en el encabezado del parametro de la arrow fusion//
export const fnRecorrerCohorteV3 = (cohorteX)=>{

    cohorteX.forEach(({nombre,apellido,nota_final}) => {

    console.log(`Apellido: ${apellido} Nombre:${nombre} Nota:${nota_final}`);
      
    })

};
