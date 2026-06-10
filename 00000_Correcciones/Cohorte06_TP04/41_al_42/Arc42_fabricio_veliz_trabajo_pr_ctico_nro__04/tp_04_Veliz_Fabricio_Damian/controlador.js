import * as Modelo from './modelo.js';

// armo una variable vacia para meter todos los alumnos aca despues
let todosLosAlumnos = []; 

// pto 1: llamo a la funcion por cada cohorte
document.getElementById('btn1').addEventListener('click', () => {
    console.log("--- COHORTE 01 ---");
    Modelo.mostrarConForEach(Modelo.cohorte01);
    
    console.log("--- COHORTE 02 ---");
    Modelo.mostrarConForEach(Modelo.cohorte02);
    
    console.log("--- COHORTE 03 ---");
    Modelo.mostrarConForEach(Modelo.cohorte03);
    
    console.log("--- COHORTE 04 ---");
    Modelo.mostrarConForEach(Modelo.cohorte04);
});

// pto 2: meto todo en la variable global asi ya me queda armada para los otros botones
document.getElementById('btn2').addEventListener('click', () => {
    todosLosAlumnos = Modelo.unificarVectores(Modelo.cohorte01, Modelo.cohorte02, Modelo.cohorte03, Modelo.cohorte04);
    console.log("--- TODOS LOS ALUMNOS UNIFICADOS ---");
    console.log(todosLosAlumnos);
});

// pto 3
document.getElementById('btn3').addEventListener('click', () => {
    // me aseguro que la lista unificada exista antes de filtrar
    if(todosLosAlumnos.length === 0) todosLosAlumnos = Modelo.unificarVectores(Modelo.cohorte01, Modelo.cohorte02, Modelo.cohorte03, Modelo.cohorte04);
    
    let aprobados = Modelo.filtrarAprobados(todosLosAlumnos);
    let desaprobados = Modelo.filtrarDesaprobados(todosLosAlumnos);
    
    console.log("--- ALUMNOS APROBADOS (> 5) ---");
    console.log(aprobados);
    console.log("--- ALUMNOS DESAPROBADOS (<= 5) ---");
    console.log(desaprobados);
});

// pto 4
document.getElementById('btn4').addEventListener('click', () => {
    if(todosLosAlumnos.length === 0) todosLosAlumnos = Modelo.unificarVectores(Modelo.cohorte01, Modelo.cohorte02, Modelo.cohorte03, Modelo.cohorte04);
    
    let ordenados = Modelo.ordenarPorNota(todosLosAlumnos);
    console.log("--- ALUMNOS ORDENADOS POR NOTA (MENOR A MAYOR) ---");
    console.log(ordenados);
});

// pto 5: le pido el dni por prompt y lo busco
document.getElementById('btn5').addEventListener('click', () => {
    if(todosLosAlumnos.length === 0) todosLosAlumnos = Modelo.unificarVectores(Modelo.cohorte01, Modelo.cohorte02, Modelo.cohorte03, Modelo.cohorte04);
    
    let dniABuscar = prompt("Ingresa el DNI del alumno a buscar (ej: 12345678):");
    let encontrado = Modelo.buscarPorDni(todosLosAlumnos, dniABuscar);
    
    if (encontrado) {
        console.log("--- ALUMNO ENCONTRADO ---");
        console.log(`Nombre: ${encontrado.nombre} ${encontrado.apellido} - Nota: ${encontrado.nota_final}`);
    } else {
        console.log("No se encontró ningún alumno con ese DNI.");
    }
});

// pto 6
document.getElementById('btn6').addEventListener('click', () => {
    if(todosLosAlumnos.length === 0) todosLosAlumnos = Modelo.unificarVectores(Modelo.cohorte01, Modelo.cohorte02, Modelo.cohorte03, Modelo.cohorte04);
    
    let cantidadIf = Modelo.contarAprobadosIfElse(todosLosAlumnos);
    let cantidadTernario = Modelo.contarAprobadosTernario(todosLosAlumnos);
    
    console.log("--- CONTABILIZAR APROBADOS ---");
    console.log(`Usando IF/ELSE: Hay ${cantidadIf} alumnos aprobados.`);
    console.log(`Usando TERNARIO: Hay ${cantidadTernario} alumnos aprobados.`);
});