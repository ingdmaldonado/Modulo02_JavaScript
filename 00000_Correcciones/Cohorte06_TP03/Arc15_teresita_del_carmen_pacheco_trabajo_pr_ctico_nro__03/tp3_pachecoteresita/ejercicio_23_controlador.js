import { calcularImporteAgua } from './ejercicio_23_modelo.js';

// Estado de la aplicación
const estadoAplicacion = {
    metrosCubicos: 0
};

// Elementos del DOM
const txtMetrosCubicos = document.getElementById("metrosCubicos");

const btnCalcular = document.getElementById("btnCalcular");
const btnGuardar = document.getElementById("btnGuardar");
const btnRecuperar = document.getElementById("btnRecuperar");

const resultado = document.getElementById("resultado");

// Actualizar estado en tiempo real
txtMetrosCubicos.addEventListener("input", () => {

    estadoAplicacion.metrosCubicos = Number(txtMetrosCubicos.value);
});

// Calcular importe
btnCalcular.addEventListener("click", () => {

    const importe = calcularImporteAgua(
        estadoAplicacion.metrosCubicos
    );

    resultado.textContent = `Importe Base: $ ${importe.toFixed(2)}`;
});

// Guardar en localStorage
btnGuardar.addEventListener("click", () => {

    localStorage.setItem(
        "estadoAplicacion",
        JSON.stringify(estadoAplicacion)
    );

    alert("Datos guardados correctamente");
});

// Recuperar datos
btnRecuperar.addEventListener("click", () => {

    const datosGuardados = localStorage.getItem("estadoAplicacion");

    if (datosGuardados) {

        const datos = JSON.parse(datosGuardados);

        estadoAplicacion.metrosCubicos = datos.metrosCubicos;

        txtMetrosCubicos.value = datos.metrosCubicos;

        alert("Datos recuperados correctamente");
    }
});