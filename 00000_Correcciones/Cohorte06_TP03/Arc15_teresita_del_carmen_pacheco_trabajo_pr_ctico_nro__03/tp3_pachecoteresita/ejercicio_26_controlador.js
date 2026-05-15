import { calcularDosisInsulina } from './ejercicio_26_modelo.js';

// Estado de la aplicación
const estadoAplicacion = {
    glucosa: 0,
    peso: 0,
    tipoDiabetes: 1
};

// Elementos del DOM
const txtGlucosa = document.getElementById("glucosa");
const txtPeso = document.getElementById("peso");
const selectTipoDiabetes = document.getElementById("tipoDiabetes");

const btnCalcular = document.getElementById("btnCalcular");
const btnGuardar = document.getElementById("btnGuardar");
const btnRecuperar = document.getElementById("btnRecuperar");

const resultado = document.getElementById("resultado");

// Actualizar estado
txtGlucosa.addEventListener("input", () => {

    estadoAplicacion.glucosa = Number(txtGlucosa.value);
});

txtPeso.addEventListener("input", () => {

    estadoAplicacion.peso = Number(txtPeso.value);
});

selectTipoDiabetes.addEventListener("change", () => {

    estadoAplicacion.tipoDiabetes = Number(selectTipoDiabetes.value);
});

// Calcular dosis
btnCalcular.addEventListener("click", () => {

    const dosis = calcularDosisInsulina(
        estadoAplicacion.glucosa,
        estadoAplicacion.peso,
        estadoAplicacion.tipoDiabetes
    );

    resultado.textContent =
        `Dosis recomendada: ${dosis.toFixed(2)}`;
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

        estadoAplicacion.glucosa = datos.glucosa;
        estadoAplicacion.peso = datos.peso;
        estadoAplicacion.tipoDiabetes = datos.tipoDiabetes;

        txtGlucosa.value = datos.glucosa;
        txtPeso.value = datos.peso;
        selectTipoDiabetes.value = datos.tipoDiabetes;

        alert("Datos recuperados correctamente");
    }
});