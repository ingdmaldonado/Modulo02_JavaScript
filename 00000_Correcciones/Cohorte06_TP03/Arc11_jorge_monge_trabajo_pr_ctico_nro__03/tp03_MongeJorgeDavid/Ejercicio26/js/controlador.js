import {
    calcularInsulina
} from './modelo.js';

// Estado de la aplicación
const estadoAplicacion = {

    glucosa: 0,
    peso: 0,
    tipoDiabetes: 1
};

// Referencias DOM
const txtGlucosa =
    document.getElementById('txtGlucosa');

const txtPeso =
    document.getElementById('txtPeso');

const cmbTipo =
    document.getElementById('cmbTipo');

const btnCalcular =
    document.getElementById('btnCalcular');

const btnGuardar =
    document.getElementById('btnGuardar');

const btnRecuperar =
    document.getElementById('btnRecuperar');

const resultado =
    document.getElementById('resultado');

// Actualizar estado
txtGlucosa.addEventListener('input', () => {

    estadoAplicacion.glucosa =
        Number(txtGlucosa.value);
});

txtPeso.addEventListener('input', () => {

    estadoAplicacion.peso =
        Number(txtPeso.value);
});

cmbTipo.addEventListener('change', () => {

    estadoAplicacion.tipoDiabetes =
        Number(cmbTipo.value);
});

// Calcular dosis
btnCalcular.addEventListener('click', () => {

    let dosis = calcularInsulina(

        estadoAplicacion.glucosa,
        estadoAplicacion.peso,
        estadoAplicacion.tipoDiabetes
    );

    resultado.textContent =
        'Dosis Recomendada: ' +
        dosis.toFixed(2);
});

// Guardar estado
btnGuardar.addEventListener('click', () => {

    localStorage.setItem(

        'estadoInsulina',
        JSON.stringify(estadoAplicacion)
    );

    alert('Estado guardado');
});

// Recuperar estado
btnRecuperar.addEventListener('click', () => {

    let datosGuardados =
        localStorage.getItem(
            'estadoInsulina'
        );

    if (datosGuardados) {

        let datos = JSON.parse(datosGuardados);

        estadoAplicacion.glucosa =
            datos.glucosa;

        estadoAplicacion.peso =
            datos.peso;

        estadoAplicacion.tipoDiabetes =
            datos.tipoDiabetes;

        txtGlucosa.value =
            estadoAplicacion.glucosa;

        txtPeso.value =
            estadoAplicacion.peso;

        cmbTipo.value =
            estadoAplicacion.tipoDiabetes;

        alert('Estado recuperado');
    }
});