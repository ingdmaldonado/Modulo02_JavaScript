import { calcularPrecioVenta } from "./modelo.js";
const estadoAplicacion = {
    importe: 0,
    margen: 0
};
const inputImporte = document.getElementById("importe");
const inputMargen = document.getElementById("margen");
const btnCalcular = document.getElementById("calcular");
const btnGuardar = document.getElementById("guardar");
const btnRecuperar = document.getElementById("recuperar");
const resultado = document.getElementById("resultado");

inputImporte.addEventListener("input", () => {
    estadoAplicacion.importe = Number(inputImporte.value);
});

inputMargen.addEventListener("input", () => {
    estadoAplicacion.margen = Number(inputMargen.value);
});

btnCalcular.addEventListener("click", () => {
    const precio = calcularPrecioVenta(
        estadoAplicacion.importe,
        estadoAplicacion.margen
    );

    resultado.textContent = `Precio de venta: $` + precio;
});

btnGuardar.addEventListener("click", () => {
    localStorage.setItem("estado", JSON.stringify(estadoAplicacion));
});


btnRecuperar.addEventListener("click", () => {
    const data = JSON.parse(localStorage.getItem("estado"));

    if (data) {
        estadoAplicacion.importe = data.importe;
        estadoAplicacion.margen = data.margen;

        inputImporte.value = data.importe;
        inputMargen.value = data.margen;
    }
})