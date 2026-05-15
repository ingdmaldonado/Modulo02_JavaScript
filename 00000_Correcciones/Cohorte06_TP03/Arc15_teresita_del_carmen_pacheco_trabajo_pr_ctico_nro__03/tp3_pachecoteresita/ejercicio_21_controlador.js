import { evaluarNota } from './ejercicio_21_modelo.js';

// Estado de la aplicación
const estadoAplicacion = {
    notaPromedio: 0
};

// Elementos del DOM
const txtNotaPromedio = document.getElementById("notaPromedio");

const btnEvaluar = document.getElementById("btnEvaluar");
const btnGuardar = document.getElementById("btnGuardar");
const btnRecuperar = document.getElementById("btnRecuperar");

const resultado = document.getElementById("resultado");

// Actualizar estado en tiempo real
txtNotaPromedio.addEventListener("input", () => {
    estadoAplicacion.notaPromedio = Number(txtNotaPromedio.value);
});

// Evaluar nota
btnEvaluar.addEventListener("click", () => {

    const mensaje = evaluarNota(
        estadoAplicacion.notaPromedio
    );

    resultado.textContent = mensaje;
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

        estadoAplicacion.notaPromedio = datos.notaPromedio;

        txtNotaPromedio.value = datos.notaPromedio;

        alert("Datos recuperados correctamente");
    }
});