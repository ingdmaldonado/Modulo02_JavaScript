// 1. IMPORTAR TODAS LAS FUNCIONES DESDE MODELO.JS
import {
    obtenerPromedio,
    clasificarNota
} from './modelo.js'; 

window.addEventListener('load', () => {
    console.log('Controlador2 cargado y listo.');
});

// VARIABLE PRINCIPAL
document.addEventListener('DOMContentLoaded', () => {

    // 2. FUNCIÓN DE AYUDA para validar y parsear números
    const getNum = (id) => parseFloat(document.getElementById(id).value);
    const getCheckedValue = (name) => document.querySelector(`input[name="${name}"]:checked`).value;
    const formatCurrency = (num) => `$${num.toFixed(2)}`;
    const formatBoolean = (bool) => bool ? 'Sí (true)' : 'No (false)';
    console.log('Funciones de ayuda definidas.');

    // 3. E14 y E15: Promedio y Clasificación de Notas
    const btnE1415 = document.querySelector('#seccion-e14-e15 button');
    const manejarE14E15 = () => {
        const n1 = getNum('nota1');
        const n2 = getNum('nota2');
        const n3 = getNum('nota3');
        console.log(`Notas ingresadas: ${n1}, ${n2}, ${n3}`);
        // Llama a las funciones del Modelo
        const promedio = obtenerPromedio(n1, n2, n3);
        const clasificacion = clasificarNota(promedio);

        // Actualiza el DOM (Vista)
        document.getElementById('resE14').textContent = promedio.toFixed(2);
        document.getElementById('resE15').textContent = clasificacion;
        console.log(`Promedio calculado: ${promedio}, Clasificación: ${clasificacion}`);
    };
    btnE1415.addEventListener('click', manejarE14E15);
    });