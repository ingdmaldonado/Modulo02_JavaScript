import { calcularPromedio } from './modelo.js';

// Estado de la aplicación
const estadoAplicacion = {
    nota1: 0,
    nota2: 0,
    nota3: 0
};

// Referencias DOM
const txtNota1 = document.getElementById('txtNota1');
const txtNota2 = document.getElementById('txtNota2');
const txtNota3 = document.getElementById('txtNota3');

const btnCalcular = document.getElementById('btnCalcular');
const btnGuardar = document.getElementById('btnGuardar');
const btnRecuperar = document.getElementById('btnRecuperar');

const resultado = document.getElementById('resultado');

// Actualizar estado automáticamente
txtNota1.addEventListener('input', () => {
    estadoAplicacion.nota1 = Number(txtNota1.value);
});

txtNota2.addEventListener('input', () => {
    estadoAplicacion.nota2 = Number(txtNota2.value);
});

txtNota3.addEventListener('input', () => {
    estadoAplicacion.nota3 = Number(txtNota3.value);
});

// Calcular promedio
btnCalcular.addEventListener('click', () => {

    let promedio = calcularPromedio(
        estadoAplicacion.nota1,
        estadoAplicacion.nota2,
        estadoAplicacion.nota3
    );

    resultado.textContent =
        'Promedio Final: ' + promedio.toFixed(2);
});

// Guardar estado
btnGuardar.addEventListener('click', () => {

    localStorage.setItem(
        'estadoAplicacionNotas',
        JSON.stringify(estadoAplicacion)
    );

    alert('Estado guardado correctamente');
});

// Recuperar estado
btnRecuperar.addEventListener('click', () => {

    let datosGuardados = localStorage.getItem('estadoAplicacionNotas');

    if (datosGuardados) {

        let datos = JSON.parse(datosGuardados);

        estadoAplicacion.nota1 = datos.nota1;
        estadoAplicacion.nota2 = datos.nota2;
        estadoAplicacion.nota3 = datos.nota3;

        txtNota1.value = estadoAplicacion.nota1;
        txtNota2.value = estadoAplicacion.nota2;
        txtNota3.value = estadoAplicacion.nota3;

        alert('Estado recuperado correctamente');
    }
});