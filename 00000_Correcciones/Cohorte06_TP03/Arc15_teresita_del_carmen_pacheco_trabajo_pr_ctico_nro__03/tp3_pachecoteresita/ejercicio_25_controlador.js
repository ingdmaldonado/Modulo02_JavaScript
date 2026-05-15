import { calcularTasaENRE } from './ejercicio_25_modelo.js';

// Estado de la aplicación
const estadoAplicacion = {
    importeBase: 0
};

// Elementos del DOM
const txtImporteBase = document.getElementById("importeBase");

const btnCalcular = document.getElementById("btnCalcular");
const btnGuardar = document.getElementById("btnGuardar");
const btnRecuperar = document.getElementById("btnRecuperar");

const resultado = document.getElementById("resultado");

// Actualizar estado en tiempo real
txtImporteBase.addEventListener("input", () => {

    estadoAplicacion.importeBase = Number(txtImporteBase.value);
});

// Calcular tasa ENRE
btnCalcular.addEventListener("click", () => {

    const tasa = calcularTasaENRE(
        estadoAplicacion.importeBase
    );

    resultado.textContent = `Tasa ENRE: $ ${tasa.toFixed(2)}`;
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

    const datosGuardados = localStorage.getItem("estadoAplicacion");

    if (datosGuardados) {

        const datos = JSON.parse(datosGuardados);

        estadoAplicacion.importeBase = datos.importeBase;

        txtImporteBase.value = datos.importeBase;

        alert("Datos recuperados correctamente");
    }
});