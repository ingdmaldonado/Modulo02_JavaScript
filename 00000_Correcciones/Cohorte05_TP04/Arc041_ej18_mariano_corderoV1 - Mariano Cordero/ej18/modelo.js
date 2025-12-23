


// Ejercicio 1: Haremos destructuring directamente en el encabezado del parametro de la funcion

export const frRecorrerCohorte = (cohorteX) => {
                        //Destructuring
    cohorteX.forEach(({apellido,nombre,nota_final}) => { //forEach buscara con esta funcion todos los elementos nombrados, dentro de los objetos al que apliquemos esta funcion
        
        console.log(` Apellido: ${apellido} - Nombres: ${nombre} - Nota Final ${nota_final}`)
    });
};
