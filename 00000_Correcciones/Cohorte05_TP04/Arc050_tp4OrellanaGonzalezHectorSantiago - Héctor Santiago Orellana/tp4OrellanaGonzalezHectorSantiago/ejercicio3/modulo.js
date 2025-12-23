// en este modulo se realizo una función que recibe como parametro un vector que se llamo cohortex y que lo recibe, lo recorre y que muesta el "nombre, el apellido y la nota final"  //
export const fnRecorrerCohorteV3 = (cohorteX)=>{

    cohorteX.forEach(({nombre,apellido,nota_final}) => {

    console.log(`Apellido: ${apellido} Nombre:${nombre} Nota:${nota_final}`);
      
    })

};

