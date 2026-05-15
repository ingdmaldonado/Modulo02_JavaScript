import {
    calcularTasaENRE
} from './modelo.js';

// Estado de la aplicación
const estadoAplicacion = {

    importeBase: 0
};

// Referencias DOM
const txtImporteBase =
    document.getElementById('txtImporteBase');

const btnCalcular =
    document.getElementById('btnCalcular');

const btnGuardar =
    document.getElementById('btnGuardar');

const btnRecuperar =
    document.getElementById('btnRecuperar');

const resultado =
    document.getElementById('resultado');

// Actualizar estado
txtImporteBase.addEventListener('input', () => {

    estadoAplicacion.importeBase =
        Number(txtImporteBase.value);
});

// Calcular tasa
btnCalcular.addEventListener('click', () => {

    let tasa = calcularTasaENRE(

        estadoAplicacion.importeBase
    );

    resultado.textContent =
        'Tasa ENRE: $' +
        tasa.toFixed(2);
});

// Guardar estado
btnGuardar.addEventListener('click', () => {

    localStorage.setItem(

        'estadoTasaENRE',
        JSON.stringify(estadoAplicacion)
    );

    alert('Estado guardado');
});

// Recuperar estado
btnRecuperar.addEventListener('click', () => {

    let datosGuardados =
        localStorage.getItem(
            'estadoTasaENRE'
        );

    if (datosGuardados) {

        let datos = JSON.parse(datosGuardados);

        estadoAplicacion.importeBase =
            datos.importeBase;

        txtImporteBase.value =
            estadoAplicacion.importeBase;

        alert('Estado recuperado');
    }
});