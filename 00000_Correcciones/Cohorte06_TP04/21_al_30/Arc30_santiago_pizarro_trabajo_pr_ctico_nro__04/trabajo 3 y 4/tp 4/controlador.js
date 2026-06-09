import {
    cohorte01, cohorte02, cohorte03, cohorte04,
    mostrarAlumnos,
    unificarCohortes,
    filtrarAprobados,
    filtrarDesaprobados,
    ordenarPorNota,
    buscarPorDni,
    contarAprobadosIfElse,
    contarAprobadosTernario
} from './modelo.js';

const obtenerTotalAlumnos = () => unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);

document.getElementById('btn-mostrar').addEventListener('click', () => {
    console.log("--- Cohorte 01 ---");
    mostrarAlumnos(cohorte01);
    console.log("--- Cohorte 02 ---");
    mostrarAlumnos(cohorte02);
    console.log("--- Cohorte 03 ---");
    mostrarAlumnos(cohorte03);
    console.log("--- Cohorte 04 ---");
    mostrarAlumnos(cohorte04);
    
    document.getElementById('out-mostrar').textContent = "Los nombres se muestran en la consola del navegador.";
});

document.getElementById('btn-unificar').addEventListener('click', () => {
    const totalAlumnos = obtenerTotalAlumnos();
    console.log("--- Alumnos Unificados ---");
    console.log(totalAlumnos);
    
    document.getElementById('out-unificar').textContent = `Todas las Cohortes están unificadas con spread operator.\nEl total de alumnos es de: ${totalAlumnos.length}\nRevisar la consola para ver el vector completo.`;
});

document.getElementById('btn-filtrar').addEventListener('click', () => {
    const totalAlumnos = obtenerTotalAlumnos();
    const aprobados = filtrarAprobados(totalAlumnos);
    const desaprobados = filtrarDesaprobados(totalAlumnos);
    
    let texto = `Aprobados (> 5): ${aprobados.length} alumnos.\n`;
    texto += `Desaprobados (<= 5): ${desaprobados.length} alumnos.`;
    
    document.getElementById('out-filtrar').textContent = texto;
});

document.getElementById('btn-ordenar').addEventListener('click', () => {
    const totalAlumnos = obtenerTotalAlumnos();
    const ordenados = ordenarPorNota(totalAlumnos);
    
    let texto = "Alumnos ordenados por nota de menor a mayor:\n\n";
    ordenados.forEach(a => {
        texto += `Nota: ${a.nota_final} - ${a.apellido}, ${a.nombre}\n`;
    });
    
    document.getElementById('out-ordenar').textContent = texto;
});

document.getElementById('btn-buscar').addEventListener('click', () => {
    const totalAlumnos = obtenerTotalAlumnos();
    const dni = document.getElementById('inp-dni').value.trim();
    
    if (dni === '') {
        document.getElementById('out-buscar').textContent = "Por favor ingrese un DNI válido.";
        return;
    }

    const alumno = buscarPorDni(totalAlumnos, dni);
    
    if (alumno) {
        document.getElementById('out-buscar').textContent = `Encontrado: ${alumno.nombre} ${alumno.apellido} - Nota: ${alumno.nota_final}`;
    } else {
        document.getElementById('out-buscar').textContent = "No se encontró ningún alumno con ese DNI.";
    }
});

document.getElementById('btn-contar').addEventListener('click', () => {
    const totalAlumnos = obtenerTotalAlumnos();
    
    const cantidadConIfElse = contarAprobadosConIfElse(totalAlumnos);
    const cantidadConTernario = contarAprobadosTernario(totalAlumnos);
    
    let texto = `Resultado usando if/else: ${cantidadConIfElse} alumnos aprobados.\n`;
    texto += `Resultado usando operador ternario: ${cantidadConTernario} alumnos aprobados.\n`;
    texto += (cantidadConIfElse === cantidadConTernario) ? "\n Ambos métodos arrojan el mismo resultado." : "\n Error en el cálculo.";
    
    document.getElementById('out-contar').textContent = texto;
});