/* 
    controlador.js
    Interacción con el DOM y enlace con modelo.js
*/

import { cohorte01, cohorte02, cohorte03, cohorte04 } from "./datos/cohortes.js";
import * as modelo from "./modelo.js";

window.addEventListener('DOMContentLoaded', () => {

    let vectorGlobal = []; // Estado de la aplicación

    // Referencias DOM
    const ui = {
        btnMostrar: document.querySelector("#btnMostrarApellidos"),
        btnUnificar: document.querySelector("#btnUnificar"),
        btnFiltrar: document.querySelector("#btnFiltrar"),
        btnOrdenar: document.querySelector("#btnOrdenar"),
        inputDNI: document.querySelector("#inputDNI"),
        btnBuscar: document.querySelector("#btnBuscarDNI"),
        btnContarIf: document.querySelector("#btnContarIf"),
        btnContarTernario: document.querySelector("#btnContarTernario"),
        btnJsonGen: document.querySelector("#btnMostrarJson"),
        btnJsonParse: document.querySelector("#btnParsearJson"),
        output: document.querySelector("#output"),
        jsonOutput: document.querySelector("#jsonOutput")
    };

    // Helper para log en pantalla
    const log = (msg) => {
        ui.output.textContent += msg + "\n";
        ui.output.scrollTop = ui.output.scrollHeight;
    };
    const limpiarLog = () => ui.output.textContent = "";

    // Validación input DNI
    ui.inputDNI.addEventListener("input", (e) => e.target.value = e.target.value.replace(/\D/g, ''));

    // --- PUNTO 1: Recorridos ---
    ui.btnMostrar.addEventListener("click", () => {
        limpiarLog();
        log(">>> 1. RECORRIDO DE COHORTES (Ver Consola)");
        
        [cohorte01, cohorte02, cohorte03, cohorte04].forEach((grupo, i) => {
            log(`\n--- COHORTE 0${i + 1} ---`);
            const lista = modelo.mostrarApellidoNombre(grupo);
            lista.forEach(item => log(` > ${item}`));
        });
    });

    // --- PUNTO 2: Unificación ---
    ui.btnUnificar.addEventListener("click", () => {
        limpiarLog();
        log(">>> 2. UNIFICACIÓN DE VECTORES");
        
        vectorGlobal = modelo.unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);
        
        log(`ÉXITO: Se unificaron ${vectorGlobal.length} registros.`);
        vectorGlobal.forEach(al => log(` [${al.dni}] ${al.apellido}, ${al.nombre} | Nota: ${al.nota_final}`));
    });

    // --- PUNTO 3: Filtrar ---
    ui.btnFiltrar.addEventListener("click", () => {
        limpiarLog();
        if (vectorGlobal.length === 0) return alert("Primero debe UNIFICAR las cohortes (Punto 2).");

        log(">>> 3. FILTRADO (APROBADOS > 5 / DESAPROBADOS <= 5)");

        const aprobados = modelo.filtrarAprobados(vectorGlobal);
        const desaprobados = modelo.filtrarDesaprobados(vectorGlobal);

        log(`\n>> APROBADOS: ${aprobados.length} alumnos`);
        aprobados.forEach(a => log(`  [${a.dni}] ${a.apellido} (${a.nota_final})`));

        log(`\n>> DESAPROBADOS: ${desaprobados.length} alumnos`);
        desaprobados.forEach(d => log(`  [${d.dni}] ${d.apellido} (${d.nota_final})`));
    });

    // --- PUNTO 4: Ordenar ---
    ui.btnOrdenar.addEventListener("click", () => {
        limpiarLog();
        if (vectorGlobal.length === 0) return alert("Primero debe UNIFICAR las cohortes.");

        log(">>> 4. ORDENAMIENTO POR NOTA ASCENDENTE");
        const ordenados = modelo.ordenarPorNota(vectorGlobal);
        
        ordenados.forEach(al => log(` NOTA: ${al.nota_final} | ${al.apellido}, ${al.nombre}`));
    });

    // --- PUNTO 5: Buscar ---
    ui.btnBuscar.addEventListener("click", () => {
        const dni = ui.inputDNI.value.trim();
        if (!dni) return alert("Ingrese un DNI.");
        if (vectorGlobal.length === 0) return alert("Base vacía. Ejecute Punto 2.");

        log(`\n>>> 5. BÚSQUEDA DNI: ${dni}`);
        const alumno = modelo.buscarPorDNI(vectorGlobal, dni);

        if (alumno) {
            log(`ENCONTRADO: ${alumno.apellido}, ${alumno.nombre} (Nota: ${alumno.nota_final})`);
            console.log("Alumno encontrado:", alumno);
        } else {
            log("No se encontró alumno con ese DNI.");
        }
    });

    // --- PUNTO 6: Contabilizar ---
    const ejecutarConteo = (tipo) => {
        if (vectorGlobal.length === 0) return alert("Primero debe UNIFICAR las cohortes.");
        
        const cantidad = (tipo === 'if') 
            ? modelo.contarAprobadosIf(vectorGlobal)
            : modelo.contarAprobadosTernario(vectorGlobal);
            
        const metodo = (tipo === 'if') ? "Condicional IF/ELSE" : "Operador TERNARIO";
        
        log(`\n>>> 6. CONTABILIZAR APROBADOS (${metodo})`);
        log(`TOTAL APROBADOS: ${cantidad}`);
    };

    ui.btnContarIf.addEventListener("click", () => ejecutarConteo('if'));
    ui.btnContarTernario.addEventListener("click", () => ejecutarConteo('ternario'));

    // --- EXTRAS JSON ---
    ui.btnJsonGen.addEventListener("click", () => {
        if (vectorGlobal.length === 0) return alert("Base de datos vacía.");
        ui.jsonOutput.textContent = modelo.generarJSON(vectorGlobal);
        log("\n>>> JSON generado correctamente.");
    });

    ui.btnJsonParse.addEventListener("click", () => {
        const content = ui.jsonOutput.textContent;
        if (!content) return alert("El visor JSON está vacío.");
        try {
            const obj = modelo.parsearJSON(content);
            console.log("Objeto Parseado:", obj);
            alert(`JSON Parseado. ${obj.length} elementos recuperados.`);
        } catch (e) {
            alert("Error de sintaxis JSON.");
        }
    });

});