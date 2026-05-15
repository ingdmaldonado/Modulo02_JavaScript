import { calcularSobreTasa } from './ejercicio_22_modelo.js';

// Estado de la aplicación
const estadoAplicacion = {
    importeBase: 0,
    tipoBebida: 1
};

// Elementos del DOM
const txtImporteBase = document.getElementById("importeBase");
const selectTipoBebida = document.getElementById("tipoBebida");

const btnCalcular = document.getElementById("btnCalcular");
const btnGuardar = document.getElementById("btnGuardar");
const btnRecuperar = document.getElementById("btnRecuperar");

const resultado = document.getElementById("resultado");

// Actualizar estado en tiempo real
txtImporteBase.addEventListener("input", () => {
    estadoAplicacion.importeBase = Number(txtImporteBase.value);
});

selectTipoBebida.addEventListener("change", () => {
    estadoAplicacion.tipoBebida = Number(selectTipoBebida.value);
});

// Calcular sobre tasa
btnCalcular.addEventListener("click", () => {

    const sobreTasa = calcularSobreTasa(
        estadoAplicacion.importeBase,
        estadoAplicacion.tipoBebida
    );

    resultado.textContent = `Sobre Tasa: $ ${sobreTasa}`;
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

        estadoAplicacion.importeBase = datos.importeBase;
        estadoAplicacion.tipoBebida = datos.tipoBebida;

        txtImporteBase.value = datos.importeBase;
        selectTipoBebida.value = datos.tipoBebida;

        alert("Datos recuperados correctamente");
    }
});