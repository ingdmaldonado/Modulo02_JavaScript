import { calcularSobreTasa } from './modelo.js';

// Estado de la aplicación
const estadoAplicacion = {

    importeBase: 0,
    tipoBebida: 1
};

// Referencias DOM
const txtImporte = document.getElementById('txtImporte');
const cmbTipo = document.getElementById('cmbTipo');

const btnCalcular = document.getElementById('btnCalcular');
const btnGuardar = document.getElementById('btnGuardar');
const btnRecuperar = document.getElementById('btnRecuperar');

const resultado = document.getElementById('resultado');

// Actualizar estado
txtImporte.addEventListener('input', () => {

    estadoAplicacion.importeBase = Number(txtImporte.value);
});

cmbTipo.addEventListener('change', () => {

    estadoAplicacion.tipoBebida = Number(cmbTipo.value);
});

// Calcular
btnCalcular.addEventListener('click', () => {

    let sobreTasa = calcularSobreTasa(

        estadoAplicacion.importeBase,
        estadoAplicacion.tipoBebida
    );

    resultado.textContent =
        'Sobre Tasa: $' + sobreTasa.toFixed(2);
});

// Guardar estado
btnGuardar.addEventListener('click', () => {

    localStorage.setItem(

        'estadoSobreTasa',
        JSON.stringify(estadoAplicacion)
    );

    alert('Estado guardado');
});

// Recuperar estado
btnRecuperar.addEventListener('click', () => {

    let datosGuardados =
        localStorage.getItem('estadoSobreTasa');

    if (datosGuardados) {

        let datos = JSON.parse(datosGuardados);

        estadoAplicacion.importeBase =
            datos.importeBase;

        estadoAplicacion.tipoBebida =
            datos.tipoBebida;

        txtImporte.value =
            estadoAplicacion.importeBase;

        cmbTipo.value =
            estadoAplicacion.tipoBebida;

        alert('Estado recuperado');
    }
});