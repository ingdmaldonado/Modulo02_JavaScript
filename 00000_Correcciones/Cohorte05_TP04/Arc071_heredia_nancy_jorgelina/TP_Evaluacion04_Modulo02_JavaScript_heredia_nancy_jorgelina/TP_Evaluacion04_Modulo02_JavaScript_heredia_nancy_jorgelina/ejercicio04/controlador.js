import { cohorte01, cohorte02, cohorte03, cohorte04 } from './datos.js';
import { 
    unificarCohortes, 
    filtrarAprobados, 
    filtrarDesaprobados, 
    ordenarPorNota, 
    buscarPorDni, 
    contarAprobadosIf, 
    contarAprobadosTernario 
} from './modelo.js';

window.onload = () => {
    const contenedorResultados = document.getElementById('contenedorResultados');
    let alumnosGlobal = [];

    const limpiarResultados = () => {
        contenedorResultados.innerHTML = '';
    };

    const crearTabla = (titulo, datos) => {
        const caja = document.createElement('div');
        caja.className = 'resultado-box';

        const h3 = document.createElement('h3');
        h3.textContent = titulo;
        caja.appendChild(h3);

        if (datos.length === 0) {
            const p = document.createElement('p');
            p.textContent = "No hay datos para mostrar.";
            caja.appendChild(p);
            contenedorResultados.appendChild(caja);
            return;
        }

        const tabla = document.createElement('table');
        const thead = document.createElement('thead');
        thead.innerHTML = `
            <tr>
                <th>DNI</th>
                <th>Apellido</th>
                <th>Nombre</th>
                <th>Nota</th>
            </tr>
        `;
        tabla.appendChild(thead);

        const tbody = document.createElement('tbody');
        datos.forEach(alumno => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${alumno.dni}</td>
                <td>${alumno.apellido}</td>
                <td>${alumno.nombre}</td>
                <td class="${alumno.nota_final > 5 ? 'aprobado' : 'desaprobado'}">
                    ${alumno.nota_final}
                </td>
            `;
            tbody.appendChild(tr);
        });
        tabla.appendChild(tbody);
        caja.appendChild(tabla);
        contenedorResultados.appendChild(caja);
    };

    const mostrarMensaje = (titulo, mensaje) => {
        const caja = document.createElement('div');
        caja.className = 'resultado-box';
        caja.innerHTML = `<h3>${titulo}</h3><p class="texto-grande">${mensaje}</p>`;
        contenedorResultados.appendChild(caja);
    };

    document.getElementById('btnPunto1').addEventListener('click', () => {
        limpiarResultados();
        crearTabla("Cohorte 01", cohorte01);
        crearTabla("Cohorte 02", cohorte02);
        crearTabla("Cohorte 03", cohorte03);
        crearTabla("Cohorte 04", cohorte04);
    });

    document.getElementById('btnPunto2').addEventListener('click', () => {
        limpiarResultados();
        alumnosGlobal = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);
        crearTabla("Todos los Alumnos Unificados", alumnosGlobal);
    });

    document.getElementById('btnPunto3').addEventListener('click', () => {
        limpiarResultados();
        if (alumnosGlobal.length === 0) {
            mostrarMensaje("Error", "Primero ejecute el Punto 2 para unificar los datos.");
            return;
        }
        const aprobados = filtrarAprobados(alumnosGlobal);
        const desaprobados = filtrarDesaprobados(alumnosGlobal);
        
        crearTabla(`Aprobados (Nota > 5) - Cant: ${aprobados.length}`, aprobados);
        crearTabla(`Desaprobados (Nota <= 5) - Cant: ${desaprobados.length}`, desaprobados);
    });

    document.getElementById('btnPunto4').addEventListener('click', () => {
        limpiarResultados();
        if (alumnosGlobal.length === 0) {
            mostrarMensaje("Error", "Primero ejecute el Punto 2 para unificar los datos.");
            return;
        }
        const ordenados = ordenarPorNota(alumnosGlobal);
        crearTabla("Alumnos Ordenados por Nota (Ascendente)", ordenados);
    });

    document.getElementById('btnPunto5').addEventListener('click', () => {
        limpiarResultados();
        if (alumnosGlobal.length === 0) {
            mostrarMensaje("Error", "Primero ejecute el Punto 2 para unificar los datos.");
            return;
        }
        
        const dniInput = prompt("Ingrese el DNI a buscar (ej: 45678901):", "45678901");
        if (!dniInput) return;

        const encontrado = buscarPorDni(alumnosGlobal, dniInput);

        if (encontrado) {
            crearTabla("Alumno Encontrado", [encontrado]);
        } else {
            mostrarMensaje("Búsqueda", `No se encontró ningún alumno con DNI: ${dniInput}`);
        }
    });

    document.getElementById('btnPunto6').addEventListener('click', () => {
        limpiarResultados();
        if (alumnosGlobal.length === 0) {
            mostrarMensaje("Error", "Primero ejecute el Punto 2 para unificar los datos.");
            return;
        }
        
        const cantIf = contarAprobadosIf(alumnosGlobal);
        const cantTernario = contarAprobadosTernario(alumnosGlobal);

        mostrarMensaje("Contabilizar Aprobados (Reduce)", 
            `Método If/Else: <strong>${cantIf}</strong> alumnos.<br>
             Método Ternario: <strong>${cantTernario}</strong> alumnos.`);
    });
};