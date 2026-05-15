import { calcularPrecioVenta } from './ejercicio_19_modelo.js';

const estadoAplicacion = {
    importeCompra: 0,
    margenGanancia: 0
};

const txtImporteCompra = document.getElementById("importeCompra");
const txtMargenGanancia = document.getElementById("margenGanancia");
const resultado = document.getElementById("resultado");

txtImporteCompra.addEventListener("input", () => {
    estadoAplicacion.importeCompra = Number(txtImporteCompra.value);
});

txtMargenGanancia.addEventListener("input", () => {
    estadoAplicacion.margenGanancia = Number(txtMargenGanancia.value);
});

document.getElementById("btnCalcular").addEventListener("click", () => {
    const precio = calcularPrecioVenta(
        estadoAplicacion.importeCompra,
        estadoAplicacion.margenGanancia
    );
    resultado.textContent = `Precio de Venta: $ ${precio}`;
});

document.getElementById("btnGuardar").addEventListener("click", () => {
    localStorage.setItem("estadoAplicacion", JSON.stringify(estadoAplicacion));
});

document.getElementById("btnRecuperar").addEventListener("click", () => {
    const datos = JSON.parse(localStorage.getItem("estadoAplicacion"));

    if (datos) {
        estadoAplicacion.importeCompra = datos.importeCompra;
        estadoAplicacion.margenGanancia = datos.margenGanancia;

        txtImporteCompra.value = datos.importeCompra;
        txtMargenGanancia.value = datos.margenGanancia;
    }
});