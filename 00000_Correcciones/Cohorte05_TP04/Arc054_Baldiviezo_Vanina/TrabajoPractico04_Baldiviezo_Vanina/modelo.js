//Ejercicio 18 - Punto 1 - forEach
export const cohortes =  (numeroDeCohorte) =>{
    numeroDeCohorte.forEach (alumno => {
        console.log(`Apellido: ${alumno.apellido} - Nombre: ${alumno.nombre}`);
    })
};

//Punto 2 - spread operator
export const unificarCohortes = (cohorte1, cohorte2, cohorte3, cohorte4) => {
  return [...cohorte1, ...cohorte2, ...cohorte3, ...cohorte4];
};

// Punto 3 - filter -  Alumnos Aprobados
export const aprobados = (alumnos) => {
  return alumnos.filter(alumno => alumno.nota_final > 5);
};

// Punto 3 - filter -  Alumnos Desaprobados
export const desaprobados = (alumnos) => {
  return alumnos.filter(alumno => alumno.nota_final <= 5);
}

// Punto 4 - sort
export const NotasOrdenadasDeMenorAMayor = (alumnosDeTodasLasCohortes) =>{
  return [...alumnosDeTodasLasCohortes].sort((a,b)=> a.nota_final-b.nota_final);
}

// Punto 5 - find
export const alumnoDni = (alumnos, dniABuscar) => {
  return alumnos.find(alumno => alumno.dni === dniABuscar);
};

// Punto 6a - Contar aprobados con if/else
export const contarAprobadosIf = (alumnos) => {
  return alumnos.reduce((contador, alumno) => {
    if (alumno.nota_final > 5) {
      return contador + 1;
    } else {
      return contador;
    }
  }, 0);
};

// Punto 6b - Contar aprobados con ternario
export const contarAprobadosTernario = (alumnos) => {
  return alumnos.reduce(
    (contador, alumno) =>
      alumno.nota_final > 5 ? contador + 1 : contador,
    0
  );
};