import { contarConsonantes } from './ejercicio_28_modelo.js';

// Estado de la aplicación
const estadoAplicacion = {
    texto: ""
};

// Elementos del DOM
const txtTexto = document.getElementById("texto");

const btnContar = document.getElementById("btnContar");
const btnGuardar = document.getElementById("btnGuardar");
const btnRecuperar = document.getElementById("btnRecuperar");

const resultado = document.getElementById("resultado");

// Actualizar estado
txtTexto.addEventListener("input", () => {

    estadoAplicacion.texto = txtTexto.value;
});

// Contar consonantes
btnContar.addEventListener("click", () => {

    const cantidad = contarConsonantes(
        estadoAplicacion.texto
    );

    resultado.textContent =
        `Cantidad de consonantes: ${cantidad}`;
});

// Guardar datos
btnGuardar.addEventListener("click", () => {

    localStorage.setItem(
        "estadoAplicacion",
        JSON.stringify(estadoAplicacion)
    );

    alert("Datos guardados correctamente");
});

// Recuperar datos
btnRecuperar.addEventListener("click", () => {

    const datosGuardados =
        localStorage.getItem("estadoAplicacion");

    if (datosGuardados) {

        const datos = JSON.parse(datosGuardados);

        estadoAplicacion.texto = datos.texto;

        txtTexto.value = datos.texto;

        alert("Datos recuperados correctamente");
    }
});