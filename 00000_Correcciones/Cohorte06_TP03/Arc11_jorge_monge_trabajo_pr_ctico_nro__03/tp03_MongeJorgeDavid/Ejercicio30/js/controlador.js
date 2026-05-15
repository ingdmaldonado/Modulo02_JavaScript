import {
    tieneTresEspacios
} from './modelo.js';

// Estado de la aplicación
const estadoAplicacion = {

    cadena: ''
};

// Referencias DOM
const txtCadena =
    document.getElementById('txtCadena');

const btnVerificar =
    document.getElementById('btnVerificar');

const btnGuardar =
    document.getElementById('btnGuardar');

const btnRecuperar =
    document.getElementById('btnRecuperar');

const resultado =
    document.getElementById('resultado');

// Actualizar estado
txtCadena.addEventListener('input', () => {

    estadoAplicacion.cadena =
        txtCadena.value;
});

// Verificar espacios
btnVerificar.addEventListener('click', () => {

    let resultadoVerificacion =
        tieneTresEspacios(
            estadoAplicacion.cadena
        );

    resultado.textContent =
        'Resultado: ' +
        resultadoVerificacion;
});

// Guardar estado
btnGuardar.addEventListener('click', () => {

    localStorage.setItem(

        'estadoEspacios',
        JSON.stringify(estadoAplicacion)
    );

    alert('Estado guardado');
});

// Recuperar estado
btnRecuperar.addEventListener('click', () => {

    let datosGuardados =
        localStorage.getItem(
            'estadoEspacios'
        );

    if (datosGuardados) {

        let datos = JSON.parse(datosGuardados);

        estadoAplicacion.cadena =
            datos.cadena;

        txtCadena.value =
            estadoAplicacion.cadena;

        alert('Estado recuperado');
    }
});