


//ejercicio1

export const fnRecorrerCohorteSinDestructuring = (cohorteX) => {

    let salida = "";

    cohorteX.forEach(alumno => {
        salida += `Apellido: ${alumno.apellido} - Nombres: ${alumno.nombre} - Nota final: ${alumno.nota_final}\n`;
    });

    return salida;
};



export const fnRecorrerCohorteConDestructuring = (cohorteX) => {
    
         let salida = "";
    cohorteX.forEach(alumno => {

        // Usando Destructuring....
        const { apellido, nombre, nota_final } = alumno;

        salida +=`Apellido: ${apellido} - Nombres: ${nombre} - Nota final: ${nota_final}\n`;
    });
      return salida;

};

export const fnRecorrerCohorteConDestructuringComoParametro = (cohorteX) => {
    
     let salida = "";
    cohorteX.forEach(({ apellido, nombre, nota_final }) => {

       

        salida+= `Apellido: ${apellido} - Nombres: ${nombre} - Nota final: ${nota_final}\n`;
    });
      return salida;

};





//ejercicio 2

export const buscarAprobados = (cohorteX) => {
    const alumnosAprobados = cohorteX.filter(alumno => alumno.nota_final >= 5);//forma corta
    return alumnosAprobados; 
};

export const buscarDesprobados = (cohorteX) => {
    const alumnosDesaprobados = cohorteX.filter(alumno => alumno.nota_final < 5);
    return alumnosDesaprobados; 
};

//ejercico3

export const ordenarPorNotaASC = (cohorteX) => {
    // copia para no modificar el vector original 
    
    const copia = [...cohorteX];

    copia.sort((a, b) => a.nota_final - b.nota_final);

    return copia; 
};

export const ordenarPorNotaDESC = (cohorteX) => {
    
    
    const copia = [...cohorteX];

    copia.sort((a, b) => b.nota_final - a.nota_final);

    return copia; 
};

// ejercicio 4

export const buscarPorDni = (cohorteX, dniBuscado) => {
    const alumno = cohorteX.find(al => al.dni === dniBuscado);
    return alumno;
};








//ejercicio 6

export const contarAprobadosUsandoIfElse = (cohorteX) => {
    return cohorteX.reduce((contador, alumno) => {
        if (alumno.nota_final >= 5) 
        {
            return contador + 1;
        } 
        else 
        {
            return contador;
        }
    }, 0);
};



export const contarAprobadosUsandoOperadorTernario = (cohorteX) => {
    return cohorteX.reduce(
        (contador, alumno) => alumno.nota_final >= 5 ? contador + 1 : contador,
        0
    );
};










