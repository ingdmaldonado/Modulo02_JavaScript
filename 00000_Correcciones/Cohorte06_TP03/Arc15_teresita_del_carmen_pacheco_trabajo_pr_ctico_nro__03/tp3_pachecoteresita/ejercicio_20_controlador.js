import { calcularPromedio } from './ejercicio_20_modelo.js';

// Estado de la aplicación
const estadoAplicacion = {
    nota1: 0,
    nota2: 0,
    nota3: 0
};

// Elementos del DOM
const txtNota1 = document.getElementById("nota1");
const txtNota2 = document.getElementById("nota2");
const txtNota3 = document.getElementById("nota3");

const btnCalcular = document.getElementById("btnCalcular");
const btnGuardar = document.getElementById("btnGuardar");
const btnRecuperar = document.getElementById("btnRecuperar");

const resultado = document.getElementById("resultado");

// Actualizar estado en tiempo real
txtNota1.addEventListener("input", () => {
    estadoAplicacion.nota1 = Number(txtNota1.value);
});

txtNota2.addEventListener("input", () => {
    estadoAplicacion.nota2 = Number(txtNota2.value);
});

txtNota3.addEventListener("input", () => {
    estadoAplicacion.nota3 = Number(txtNota3.value);
});

// Calcular promedio
btnCalcular.addEventListener("click", () => {

    const promedio = calcularPromedio(
        estadoAplicacion.nota1,
        estadoAplicacion.nota2,
        estadoAplicacion.nota3
    );

    resultado.textContent = `Promedio: ${promedio}`;
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

        estadoAplicacion.nota1 = datos.nota1;
        estadoAplicacion.nota2 = datos.nota2;
        estadoAplicacion.nota3 = datos.nota3;

        txtNota1.value = datos.nota1;
        txtNota2.value = datos.nota2;
        txtNota3.value = datos.nota3;

        alert("Datos recuperados correctamente");
    }
});