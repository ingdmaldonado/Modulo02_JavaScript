import {
    tieneDosLetrasS
} from './modelo.js';

// Estado de la aplicación
const estadoAplicacion = {

    palabra: ''
};

// Referencias DOM
const txtPalabra =
    document.getElementById('txtPalabra');

const btnVerificar =
    document.getElementById('btnVerificar');

const btnGuardar =
    document.getElementById('btnGuardar');

const btnRecuperar =
    document.getElementById('btnRecuperar');

const resultado =
    document.getElementById('resultado');

// Actualizar estado
txtPalabra.addEventListener('input', () => {

    estadoAplicacion.palabra =
        txtPalabra.value;
});

// Verificar palabra
btnVerificar.addEventListener('click', () => {

    let resultadoVerificacion =
        tieneDosLetrasS(
            estadoAplicacion.palabra
        );

    resultado.textContent =
        'Resultado: ' +
        resultadoVerificacion;
});

// Guardar estado
btnGuardar.addEventListener('click', () => {

    localStorage.setItem(

        'estadoLetrasS',
        JSON.stringify(estadoAplicacion)
    );

    alert('Estado guardado');
});

// Recuperar estado
btnRecuperar.addEventListener('click', () => {

    let datosGuardados =
        localStorage.getItem(
            'estadoLetrasS'
        );

    if (datosGuardados) {

        let datos = JSON.parse(datosGuardados);

        estadoAplicacion.palabra =
            datos.palabra;

        txtPalabra.value =
            estadoAplicacion.palabra;

        alert('Estado recuperado');
    }
});