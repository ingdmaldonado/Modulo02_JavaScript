/*Realizar una arrow function que reciba como parámetro las 3 notas que obtuvo un alumno en los
distintos trabajos prácticos de una materia y que a partir de esas notas obtenga el promedio de las mismas
Nota: Debe devolver un número*/

export const promedioDeNotas=(nota1, nota2, nota3)=>{ //exporta la funcion.
    // se declara una constante y se hace el promedio de los 3 parametros.
    const promedioNotas=(nota1+nota2+nota3)/3;
    return promedioNotas; // se retorna la constante.
};