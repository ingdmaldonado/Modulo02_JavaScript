/* 
    controlador.js
    Interacción DOM y lógica de presentación.
*/

import { cohorte01, cohorte02, cohorte03, cohorte04 } from "./datos/cohortes.js";
import * as modelo from "./modelo.js";

window.addEventListener('DOMContentLoaded', () => {

    console.log("Inicializando Matrix Controller...");
    
    // Estado de la aplicación
    let vectorGlobal = [];

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

    // --- Helpers de UI ---
    const log = (msg) => {
        ui.output.textContent += msg + "\n";
        ui.output.scrollTop = ui.output.scrollHeight;
    };
    const limpiarLog = () => ui.output.textContent = "";

    // Validación input DNI (Solo números)
    ui.inputDNI.addEventListener("input", (e) => e.target.value = e.target.value.replace(/\D/g, ''));

    // --- 1. RECORRIDO (forEach) ---
    ui.btnMostrar.addEventListener("click", () => {
        limpiarLog();
        log(">>> [1] RECORRIDO DE DATOS (Ver Consola F12)");
        
        const cohortes = [cohorte01, cohorte02, cohorte03, cohorte04];
        cohortes.forEach((grupo, i) => {
            log(`\n--- COHORTE 0${i + 1} ---`);
            const visual = modelo.mostrarApellidoNombre(grupo);
            visual.forEach(t => log(` > ${t}`));
        });
    });

    // --- 2. UNIFICACIÓN (Spread) ---
    ui.btnUnificar.addEventListener("click", () => {
        limpiarLog();
        log(">>> [2] UNIFICACIÓN DE VECTORES");
        
        vectorGlobal = modelo.unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);
        
        log(`STATUS: Éxito. ${vectorGlobal.length} registros cargados en memoria.`);
        vectorGlobal.forEach(al => log(` [${al.dni}] ${al.apellido}, ${al.nombre} | Nota: ${al.nota_final}`));
    });

    // --- 3. FILTRADO (Filter) ---
    ui.btnFiltrar.addEventListener("click", () => {
        limpiarLog();
        if (vectorGlobal.length === 0) return alert("ERROR: Ejecute la Unificación [2] primero.");

        log(">>> [3] FILTRADO DE ALUMNOS");
        const aprobados = modelo.filtrarAprobados(vectorGlobal);
        const desaprobados = modelo.filtrarDesaprobados(vectorGlobal);

        log(`\n>> APROBADOS (>5): ${aprobados.length}`);
        aprobados.forEach(a => log(`  [${a.dni}] ${a.apellido} (${a.nota_final})`));

        log(`\n>> DESAPROBADOS (<=5): ${desaprobados.length}`);
        desaprobados.forEach(d => log(`  [${d.dni}] ${d.apellido} (${d.nota_final})`));
    });

    // --- 4. ORDENAMIENTO (Sort) ---
    ui.btnOrdenar.addEventListener("click", () => {
        limpiarLog();
        if (vectorGlobal.length === 0) return alert("ERROR: Base de datos vacía.");

        log(">>> [4] ORDENAMIENTO ASCENDENTE (NOTA)");
        const ordenados = modelo.ordenarPorNota(vectorGlobal);
        ordenados.forEach(al => log(` NOTA: ${al.nota_final} | ${al.apellido}, ${al.nombre}`));
    });

    // --- 5. BÚSQUEDA (Find) ---
    ui.btnBuscar.addEventListener("click", () => {
        const dni = ui.inputDNI.value.trim();
        if (!dni) return alert("Ingrese un DNI numérico.");
        if (vectorGlobal.length === 0) return alert("Base de datos vacía.");

        log(`\n>>> [5] BÚSQUEDA DNI: ${dni}`);
        const found = modelo.buscarPorDNI(vectorGlobal, dni);

        if (found) {
            log(`ENCONTRADO: ${found.apellido}, ${found.nombre}`);
            log(`DETALLES: Nota ${found.nota_final} | DNI ${found.dni}`);
            console.log("Registro encontrado:", found);
        } else {
            log("RESULTADO: No se encontró coincidencia.");
        }
    });

    // --- 6. CONTABILIZAR (Reduce) ---
    const ejecutarConteo = (tipo) => {
        if (vectorGlobal.length === 0) return alert("Base de datos vacía.");
        
        const count = (tipo === 'if') 
            ? modelo.contarAprobadosIf(vectorGlobal)
            : modelo.contarAprobadosTernario(vectorGlobal);
            
        const tecnica = (tipo === 'if') ? "Condicional IF" : "Op. TERNARIO";
        
        log(`\n>>> [6] CONTABILIZAR APROBADOS (${tecnica})`);
        log(`TOTAL: ${count} alumnos.`);
    };

    ui.btnContarIf.addEventListener("click", () => ejecutarConteo('if'));
    ui.btnContarTernario.addEventListener("click", () => ejecutarConteo('ternario'));

    // --- EXTRA: JSON ---
    ui.btnJsonGen.addEventListener("click", () => {
        if (vectorGlobal.length === 0) return alert("No hay datos.");
        ui.jsonOutput.textContent = modelo.generarJSON(vectorGlobal);
        log("\n>>> JSON Generado.");
    });

    ui.btnJsonParse.addEventListener("click", () => {
        const content = ui.jsonOutput.textContent;
        if (!content) return alert("Visor JSON vacío.");
        try {
            const obj = modelo.parsearJSON(content);
            console.log("Objeto recuperado:", obj);
            alert(`JSON Parseado OK. ${obj.length} registros recuperados.`);
        } catch (e) {
            alert("Error de sintaxis JSON.");
        }
    });

    iniciarEfectoMatrix();
});

// --- EFECTO VISUAL MATRIX (Optimizado con requestAnimationFrame) ---
const iniciarEfectoMatrix = () => {
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');
    
    // Ajuste dinámico de tamaño
    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const chars = 'ABCDEF0123456789JAVASCRIPT';
    const fontSize = 14;
    let columns = canvas.width / fontSize;
    let drops = [];
    
    // Inicializar gotas
    const initDrops = () => {
        columns = canvas.width / fontSize;
        drops = [];
        for(let x = 0; x < columns; x++) drops[x] = 1;
    };
    initDrops();
    window.addEventListener('resize', initDrops);

    const draw = () => {
        // Fondo semi-transparente para efecto de estela
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0F0'; // Color texto
        ctx.font = fontSize + 'px monospace';
        
        for(let i = 0; i < drops.length; i++) {
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            // Reiniciar gota aleatoriamente
            if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
        requestAnimationFrame(draw);
    };
    draw();
};