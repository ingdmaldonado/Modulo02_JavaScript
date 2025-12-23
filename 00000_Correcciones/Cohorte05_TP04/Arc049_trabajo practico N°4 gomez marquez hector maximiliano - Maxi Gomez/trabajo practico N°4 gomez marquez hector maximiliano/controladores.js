import {
    unificarCohortes,
    filtrarAprobados,
    filtrarDesaprobados,
    buscarPorDni,
    contarAprobadosIf,
    contarAprobadosTernario
} from "./modelo.js";

import { cohorte01, cohorte02, cohorte03, cohorte04 } from "./datos.js";

const contenedor = document.getElementById("contenedor");

// Unificamos una sola vez
const todos = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);

// ✅ Mostrar tarjetas
document.getElementById("btnTarjetas").addEventListener("click", () => {
    contenedor.innerHTML = `
        <div class="tarjetas">
            ${todos.map(a => `
                <div class="card">
                    <h3>${a.nombre} ${a.apellido}</h3>
                    <p><strong>DNI:</strong> ${a.dni}</p>
                    <p><strong>Nota final:</strong> ${a.nota_final}</p>
                </div>
            `).join("")}
        </div>
    `;
});

// ✅ Mostrar tabla
document.getElementById("btnTabla").addEventListener("click", () => {
    contenedor.innerHTML = `
        <table>
            <tr>
                <th>DNI</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Nota</th>
            </tr>
            ${todos.map(a => `
                <tr>
                    <td>${a.dni}</td>
                    <td>${a.nombre}</td>
                    <td>${a.apellido}</td>
                    <td>${a.nota_final}</td>
                </tr>
            `).join("")}
        </table>
    `;
});

// ✅ Aprobados / Desaprobados
document.getElementById("btnAprobados").addEventListener("click", () => {
    const aprobados = filtrarAprobados(todos);
    const desaprobados = filtrarDesaprobados(todos);

    contenedor.innerHTML = `
        <h2>Aprobados (${aprobados.length})</h2>
        <div class="tarjetas">
            ${aprobados.map(a => `
                <div class="card">
                    <h3>${a.nombre} ${a.apellido}</h3>
                    <p>DNI: ${a.dni}</p>
                    <p>Nota: ${a.nota_final}</p>
                </div>
            `).join("")}
        </div>

        <h2>Desaprobados (${desaprobados.length})</h2>
        <div class="tarjetas">
            ${desaprobados.map(a => `
                <div class="card">
                    <h3>${a.nombre} ${a.apellido}</h3>
                    <p>DNI: ${a.dni}</p>
                    <p>Nota: ${a.nota_final}</p>
                </div>
            `).join("")}
        </div>
    `;
});

// ✅ Buscar por DNI
document.getElementById("btnBuscar").addEventListener("click", () => {
    const dni = prompt("Ingrese un DNI:");
    const encontrado = buscarPorDni(todos, dni);

    contenedor.innerHTML = encontrado
        ? `
            <div class="card">
                <h3>${encontrado.nombre} ${encontrado.apellido}</h3>
                <p>DNI: ${encontrado.dni}</p>
                <p>Nota: ${encontrado.nota_final}</p>
            </div>
        `
        : `<h2>No se encontró el alumno</h2>`;
});

// ✅ Contar aprobados
document.getElementById("btnContar").addEventListener("click", () => {
    const totalIf = contarAprobadosIf(todos);
    const totalTernario = contarAprobadosTernario(todos);

    contenedor.innerHTML = `
        <h2>Resultados</h2>
        <p>Aprobados (if/else): <strong>${totalIf}</strong></p>
        <p>Aprobados (ternario): <strong>${totalTernario}</strong></p>
    `;
});