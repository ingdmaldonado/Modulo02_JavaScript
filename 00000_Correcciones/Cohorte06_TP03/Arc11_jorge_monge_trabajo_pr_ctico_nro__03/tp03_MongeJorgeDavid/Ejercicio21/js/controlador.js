import { clasificarNota } from './modelo.js';

// Estado de la aplicación
const estadoAplicacion = {
    nota: 0
};

// Referencias DOM
const txtNota = document.getElementById('txtNota');
const btnEvaluar = document.getElementById('btnEvaluar');
const btnGuardar = document.getElementById('btnGuardar');
const btnRecuperar = document.getElementById('btnRecuperar');
const resultado = document.getElementById('resultado');

// Actualizar estado
txtNota.addEventListener('input', () => {
    estadoAplicacion.nota = Number(txtNota.value);
});

// Evaluar nota
btnEvaluar.addEventListener('click', () => {

    let mensaje = clasificarNota(estadoAplicacion.nota);

    resultado.textContent = 'Resultado: ' + mensaje;
});

// Guardar estado
btnGuardar.addEventListener('click', () => {

    localStorage.setItem(
        'estadoClasificacionNota',
        JSON.stringify(estadoAplicacion)
    );

    alert('Estado guardado correctamente');
});

// Recuperar estado
btnRecuperar.addEventListener('click', () => {

    let datosGuardados = localStorage.getItem('estadoClasificacionNota');

    if (datosGuardados) {

        let datos = JSON.parse(datosGuardados);

        estadoAplicacion.nota = datos.nota;

        txtNota.value = estadoAplicacion.nota;

        alert('Estado recuperado correctamente');
    }
});