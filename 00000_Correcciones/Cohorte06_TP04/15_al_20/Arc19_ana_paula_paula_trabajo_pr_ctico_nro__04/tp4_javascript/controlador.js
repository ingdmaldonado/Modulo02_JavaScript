import { 
    cohorte01, 
    cohorte02, 
    cohorte03, 
    cohorte04, 
    mostrarAlumnos 
} from "./modelo.js";

window.onload = () => {

    // ejercicio 1 - mostrar alumnos
    console.log("EJERCICIO 1");

    mostrarAlumnos(cohorte01);
    mostrarAlumnos(cohorte02);
    mostrarAlumnos(cohorte03);
    mostrarAlumnos(cohorte04);

    // ejercicio 2 - unir cohortes
    console.log("EJERCICIO 2");

    const todosLosAlumnos = [
        ...cohorte01,
        ...cohorte02,
        ...cohorte03,
        ...cohorte04
    ];

    console.log(todosLosAlumnos);

    // ejercicio 3 - aprobados y desaprobados
    console.log("EJERCICIO 3");

    const resultadoAprobados = todosLosAlumnos.filter(a => a.nota_final > 5);
    const resultadoDesaprobados = todosLosAlumnos.filter(a => a.nota_final <= 5);

    console.log("Aprobados:", resultadoAprobados);
    console.log("Desaprobados:", resultadoDesaprobados);

    // ejercicio 4 - ordenar por nota
    console.log("EJERCICIO 4");

    const resultadoOrdenado = [...todosLosAlumnos].sort((a, b) => {
        return a.nota_final - b.nota_final;
    });

    console.log(resultadoOrdenado);

    // ejercicio 5 - buscar alumno
    console.log("EJERCICIO 5");

    const resultado = todosLosAlumnos.find(a => a.dni === "12345678");

    if (resultado) {
        console.log("lo encontré:");
        console.log(resultado);
    } else {
        console.log("no se encontró");
    }

    // ejercicio 6 - contar aprobados
    console.log("EJERCICIO 6");

    // forma 1 (con if)
    const resultadoReduce1 = todosLosAlumnos.reduce((acc, alumno) => {
        if (alumno.nota_final > 5) {
            return acc + 1;
        }
        return acc;
    }, 0);

    console.log("aprobados (forma 1):", resultadoReduce1);

    // forma 2 (ternario)
    const resultadoReduce2 = todosLosAlumnos.reduce((acc, alumno) =>
        alumno.nota_final > 5 ? acc + 1 : acc
    , 0);

    console.log("aprobados (forma 2):", resultadoReduce2);

};