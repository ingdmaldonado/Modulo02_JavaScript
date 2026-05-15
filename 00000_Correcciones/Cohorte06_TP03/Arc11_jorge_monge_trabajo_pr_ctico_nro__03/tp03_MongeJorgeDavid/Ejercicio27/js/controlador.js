import {
    contarVocales
} from './modelo.js';

// Estado de la aplicación
const estadoAplicacion = {

    cadena: ''
};

// Referencias DOM
const txtCadena =
    document.getElementById('txtCadena');

const btnContar =
    document.getElementById('btnContar');

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

// Contar vocales
btnContar.addEventListener('click', () => {

    let cantidad = contarVocales(

        estadoAplicacion.cadena
    );

    resultado.textContent =
        'Cantidad de Vocales: ' + cantidad;
});

// Guardar estado
btnGuardar.addEventListener('click', () => {

    localStorage.setItem(

        'estadoVocales',
        JSON.stringify(estadoAplicacion)
    );

    alert('Estado guardado');
});

// Recuperar estado
btnRecuperar.addEventListener('click', () => {

    let datosGuardados =
        localStorage.getItem(
            'estadoVocales'
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