import { 
    cohorte01, cohorte02, cohorte03, cohorte04,
    listarAlumnosConsola, unificarCohortes, obtenerAprobados, 
    obtenerDesaprobados, ordenarPorNotaAsc, buscarPorDni,
    contarAprobadosIf, contarAprobadosTernario 
} from './modelo.js';


console.log("--- PUNTO 1: Listado de alumnos por cohorte ---");
console.log("Cohorte 1:"); listarAlumnosConsola(cohorte01);
console.log("Cohorte 2:"); listarAlumnosConsola(cohorte02);
console.log("Cohorte 3:"); listarAlumnosConsola(cohorte03);
console.log("Cohorte 4:"); listarAlumnosConsola(cohorte04);

const totalAlumnos = unificarCohortes();
console.log("--- PUNTO 2: Vector Unificado (Spread Operator) ---", totalAlumnos);

const aprobados = obtenerAprobados(totalAlumnos);
const desaprobados = obtenerDesaprobados(totalAlumnos);
console.log("--- PUNTO 3: Alumnos Aprobados (>5) ---", aprobados);
console.log("--- PUNTO 3: Alumnos Desaprobados (<=5) ---", desaprobados);

console.log("--- PUNTO 4: Ordenados por Nota (Menor a Mayor) ---", ordenarPorNotaAsc(totalAlumnos));


console.log("--- PUNTO 5: Búsqueda por DNI (12345678) ---", buscarPorDni(totalAlumnos, "12345678"));

console.log("--- PUNTO 6.a: Contar aprobados (IF) ---", contarAprobadosIf(totalAlumnos));
console.log("--- PUNTO 6.b: Contar aprobados (Ternario) ---", contarAprobadosTernario(totalAlumnos));



document.addEventListener('DOMContentLoaded', () => {
   
    const btnUnificar = document.getElementById('btnUnificar');
    const btnFiltrar = document.getElementById('btnFiltrar');
    const btnOrdenar = document.getElementById('btnOrdenar');
    const btnBuscar = document.getElementById('btnBuscar');
    const btnContar = document.getElementById('btnContar');
    
    const txtDni = document.getElementById('txtDni');
    const contenedorResultados = document.getElementById('resultados');

    
    const renderizarLista = (titulo, arrayAlumnos) => {
        let html = `<h3>${titulo} (${arrayAlumnos.length})</h3><ul>`;
        arrayAlumnos.forEach(({ dni, nombre, apellido, nota_final }) => {
            html += `<li><strong>${apellido}, ${nombre}</strong> - DNI: ${dni} | <span class="nota">Nota: ${nota_final}</span></li>`;
        });
        html += '</ul>';
        contenedorResultados.innerHTML = html;
    };

    
    btnUnificar.addEventListener('click', () => {
        renderizarLista('Todos los Alumnos Unificados', totalAlumnos);
    });

    btnFiltrar.addEventListener('click', () => {
        const apr = obtenerAprobados(totalAlumnos);
        const des = obtenerDesaprobados(totalAlumnos);
        
        let html = `<h3>Alumnos Filtrados</h3>`;
        html += `<div class="grid-split"><div><h4>Aprobados</h4><ul>`;
        apr.forEach(a => html += `<li>${a.apellido}, ${a.nombre} (${a.nota_final})</li>`);
        html += `</ul></div><div><h4>Desaprobados</h4><ul>`;
        des.forEach(a => html += `<li>${a.apellido}, ${a.nombre} (${a.nota_final})</li>`);
        html += `</ul></div></div>`;
        
        contenedorResultados.innerHTML = html;
    });

    btnOrdenar.addEventListener('click', () => {
        const ordenados = ordenarPorNotaAsc(totalAlumnos);
        renderizarLista('Alumnos Ordenados por Nota (Ascendente)', ordenados);
    });

    btnBuscar.addEventListener('click', () => {
        const dniBuscado = txtDni.value.trim();
        if(!dniBuscado) {
            contenedorResultados.innerHTML = `<p class="error">Por favor, ingrese un número de DNI.</p>`;
            return;
        }
        
        const alumno = buscarPorDni(totalAlumnos, dniBuscado);
        if(alumno) {
            const { nombre, apellido, dni, nota_final } = alumno;
            contenedorResultados.innerHTML = `
                <h3>Resultado de la Búsqueda</h3>
                <div class="card-alumno">
                    <p><strong>Nombre Completo:</strong> ${apellido}, ${nombre}</p>
                    <p><strong>DNI:</strong> ${dni}</p>
                    <p><strong>Nota Final:</strong> ${nota_final}</p>
                    <p><strong>Estado:</strong> ${nota_final > 5 ? 'Aprobado' : 'Desaprobado'}</p>
                </div>`;
        } else {
            contenedorResultados.innerHTML = `<p class="error">No se encontró ningún alumno con el DNI: ${dniBuscado}</p>`;
        }
    });

    btnContar.addEventListener('click', () => {
        const cantIf = contarAprobadosIf(totalAlumnos);
        const cantTernario = contarAprobadosTernario(totalAlumnos);
        
        contenedorResultados.innerHTML = `
            <h3>Contador de Aprobados (Método Reduce)</h3>
            <p><strong>Resultado con estructura If/Else:</strong> ${cantIf} alumnos.</p>
            <p><strong>Resultado con operador ternario:</strong> ${cantTernario} alumnos.</p>`;
    });
});