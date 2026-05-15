import { noContieneNumeros } from './ejercicio_31_modelo.js';

// Estado de la aplicación
const estadoAplicacion = {
    texto: ""
};

// Elementos del DOM
const txtTexto = document.getElementById("texto");

const btnVerificar = document.getElementById("btnVerificar");
const btnGuardar = document.getElementById("btnGuardar");
const btnRecuperar = document.getElementById("btnRecuperar");

const resultado = document.getElementById("resultado");

// Actualizar estado
txtTexto.addEventListener("input", () => {

    estadoAplicacion.texto = txtTexto.value;
});

// Verificar texto
btnVerificar.addEventListener("click", () => {

    const respuesta = noContieneNumeros(
        estadoAplicacion.texto
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

        estadoAplicacion.texto = datos.texto;

        txtTexto.value = datos.texto;

        alert("Datos recuperados correctamente");
    }
});