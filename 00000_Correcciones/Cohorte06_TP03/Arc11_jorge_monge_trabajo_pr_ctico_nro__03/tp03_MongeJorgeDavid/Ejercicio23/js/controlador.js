import { calcularImporteAgua } from './modelo.js';

// Estado de la aplicación
const estadoAplicacion = {

    metrosCubicos: 0
};

// Referencias DOM
const txtConsumo =
    document.getElementById('txtConsumo');

const btnCalcular =
    document.getElementById('btnCalcular');

const btnGuardar =
    document.getElementById('btnGuardar');

const btnRecuperar =
    document.getElementById('btnRecuperar');

const resultado =
    document.getElementById('resultado');

// Actualizar estado
txtConsumo.addEventListener('input', () => {

    estadoAplicacion.metrosCubicos =
        Number(txtConsumo.value);
});

// Calcular importe
btnCalcular.addEventListener('click', () => {

    let importe = calcularImporteAgua(

        estadoAplicacion.metrosCubicos
    );

    resultado.textContent =
        'Importe Base: $' +
        importe.toLocaleString('es-AR', {
            minimumFractionDigits: 2
        });
});

// Guardar estado
btnGuardar.addEventListener('click', () => {

    localStorage.setItem(

        'estadoAgua',
        JSON.stringify(estadoAplicacion)
    );

    alert('Estado guardado');
});

// Recuperar estado
btnRecuperar.addEventListener('click', () => {

    let datosGuardados =
        localStorage.getItem('estadoAgua');

    if (datosGuardados) {

        let datos = JSON.parse(datosGuardados);

        estadoAplicacion.metrosCubicos =
            datos.metrosCubicos;

        txtConsumo.value =
            estadoAplicacion.metrosCubicos;

        alert('Estado recuperado');
    }
});