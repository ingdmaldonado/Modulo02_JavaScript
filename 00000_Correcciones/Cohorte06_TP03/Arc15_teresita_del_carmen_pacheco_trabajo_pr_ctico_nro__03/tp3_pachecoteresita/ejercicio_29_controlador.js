import { contieneDosLetrasS } from './ejercicio_29_modelo.js';

// Estado de la aplicación
const estadoAplicacion = {
    palabra: ""
};

// Elementos del DOM
const txtPalabra = document.getElementById("palabra");

const btnVerificar = document.getElementById("btnVerificar");
const btnGuardar = document.getElementById("btnGuardar");
const btnRecuperar = document.getElementById("btnRecuperar");

const resultado = document.getElementById("resultado");

// Actualizar estado
txtPalabra.addEventListener("input", () => {

    estadoAplicacion.palabra = txtPalabra.value;
});

// Verificar palabra
btnVerificar.addEventListener("click", () => {

    const respuesta = contieneDosLetrasS(
        estadoAplicacion.palabra
    );

    resultado.textContent =
        `Resultado: ${respuesta}`;
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

        estadoAplicacion.palabra = datos.palabra;

        txtPalabra.value = datos.palabra;

        alert("Datos recuperados correctamente");
    }
});