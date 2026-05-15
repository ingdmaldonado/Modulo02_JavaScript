import {
    calcularTasaSubsuelo
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

    let tasa = calcularTasaSubsuelo(

        estadoAplicacion.importeBase
    );

    resultado.textContent =
        'Tasa de Subsuelo: $' +
        tasa.toFixed(2);
});

// Guardar estado
btnGuardar.addEventListener('click', () => {

    localStorage.setItem(

        'estadoTasaSubsuelo',
        JSON.stringify(estadoAplicacion)
    );

    alert('Estado guardado');
});

// Recuperar estado
btnRecuperar.addEventListener('click', () => {

    let datosGuardados =
        localStorage.getItem(
            'estadoTasaSubsuelo'
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