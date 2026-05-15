import { calcularPrecioVenta } from './modelo.js';

// Estado de la aplicación
const estadoAplicacion = {
    importeCompra: 0,
    margenGanancia: 0
};

// Referencias DOM
const txtImporte = document.getElementById('txtImporte');
const txtMargen = document.getElementById('txtMargen');
const btnCalcular = document.getElementById('btnCalcular');
const btnGuardar = document.getElementById('btnGuardar');
const btnRecuperar = document.getElementById('btnRecuperar');
const resultado = document.getElementById('resultado');

// Actualizar estado automáticamente
txtImporte.addEventListener('input', () => {
    estadoAplicacion.importeCompra = Number(txtImporte.value);
});

txtMargen.addEventListener('input', () => {
    estadoAplicacion.margenGanancia = Number(txtMargen.value);
});

// Calcular precio de venta
btnCalcular.addEventListener('click', () => {

    let precioVenta = calcularPrecioVenta(
        estadoAplicacion.importeCompra,
        estadoAplicacion.margenGanancia
    );

    resultado.textContent =
        'Precio de Venta: $' + precioVenta.toFixed(2);
});

// Guardar estado en localStorage
btnGuardar.addEventListener('click', () => {

    localStorage.setItem(
        'estadoAplicacion',
        JSON.stringify(estadoAplicacion)
    );

    alert('Estado guardado correctamente');
});

// Recuperar estado desde localStorage
btnRecuperar.addEventListener('click', () => {

    let estadoGuardado = localStorage.getItem('estadoAplicacion');

    if (estadoGuardado) {

        let datos = JSON.parse(estadoGuardado);

        estadoAplicacion.importeCompra = datos.importeCompra;
        estadoAplicacion.margenGanancia = datos.margenGanancia;

        txtImporte.value = estadoAplicacion.importeCompra;
        txtMargen.value = estadoAplicacion.margenGanancia;

        alert('Estado recuperado correctamente');
    }
});