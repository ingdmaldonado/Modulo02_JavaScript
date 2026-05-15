import {
    contarConsonantes
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

// Contar consonantes
btnContar.addEventListener('click', () => {

    let cantidad = contarConsonantes(

        estadoAplicacion.cadena
    );

    resultado.textContent =
        'Cantidad de Consonantes: ' + cantidad;
});

// Guardar estado
btnGuardar.addEventListener('click', () => {

    localStorage.setItem(

        'estadoConsonantes',
        JSON.stringify(estadoAplicacion)
    );

    alert('Estado guardado');
});

// Recuperar estado
btnRecuperar.addEventListener('click', () => {

    let datosGuardados =
        localStorage.getItem(
            'estadoConsonantes'
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