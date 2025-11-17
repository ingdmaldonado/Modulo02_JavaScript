// Archivo "Controlador.js"

// Importar todas las funciones desde "funciones.js"
import {
    calcularPrecioVenta,
    calcularPromedio,
    obtenerEstadoNota,
    calcularSobretasa,
    calcularImporteAgua,
    calcularTasaSubsuelo,
    calcularTasaENRE,
    calcularDosisInsulina,
    contarVocales,
    contarConsonantes,
    tieneDosS,
    tieneTresEspacios,
    noContieneNumeros
} from './funciones.js';

// Bloque principal que se ejecuta cuando el DOM está cargado
window.onload = () => {

    console.log("Aplicación TP03 iniciada.");

    // --- Evento Ejercicio 13 ---
    const e13_importe = document.querySelector('#e13-importe');
    const e13_margen = document.querySelector('#e13-margen');
    const e13_btn = document.querySelector('#btn-e13');
    const e13_res = document.querySelector('#res-e13');

    e13_btn.onclick = () => {
        const importeNum = parseFloat(e13_importe.value);
        const margenNum = parseFloat(e13_margen.value);

        if (isNaN(importeNum) || isNaN(margenNum)) {
            e13_res.textContent = "Error: Ingrese solo números.";
            e13_res.classList.add('error');
            e13_res.classList.remove('success'); 
            return;
        }
        if (importeNum < 0 || margenNum < 0) {
            e13_res.textContent = "Error: Los valores deben ser positivos.";
            e13_res.classList.add('error');
            e13_res.classList.remove('success'); 
            return;
        }
        
        const precio = calcularPrecioVenta(importeNum, margenNum);

        e13_res.textContent = precio.toFixed(2);
        e13_res.classList.remove('error');
        e13_res.classList.add('success'); 
    };

    // --- Evento Ejercicio 14 ---
    const e14_n1 = document.querySelector('#e14-n1');
    const e14_n2 = document.querySelector('#e14-n2');
    const e14_n3 = document.querySelector('#e14-n3');
    const e14_btn = document.querySelector('#btn-e14');
    const e14_res = document.querySelector('#res-e14');

    e14_btn.onclick = () => {
        const n1 = parseFloat(e14_n1.value);
        const n2 = parseFloat(e14_n2.value);
        const n3 = parseFloat(e14_n3.value);
        
        if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
            e14_res.textContent = "Error: Ingrese las 3 notas.";
            e14_res.classList.add('error');
            e14_res.classList.remove('success');
            return;
        }
        if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10) {
            e14_res.textContent = "Error: Las notas deben estar entre 0 y 10.";
            e14_res.classList.add('error');
            e14_res.classList.remove('success');
            return;
        }

        const promedio = calcularPromedio(n1, n2, n3);
        e14_res.textContent = promedio.toFixed(2);
        e14_res.classList.remove('error');
        e14_res.classList.add('success');
    };

    // --- Evento Ejercicio 15 ---
    const e15_promedio = document.querySelector('#e15-promedio');
    const e15_btn = document.querySelector('#btn-e15');
    const e15_res = document.querySelector('#res-e15');

    e15_btn.onclick = () => {
        const promedio = parseFloat(e15_promedio.value);

        if (isNaN(promedio)) {
            e15_res.textContent = "Error: Ingrese una nota.";
            e15_res.classList.add('error');
            e15_res.classList.remove('success');
            return;
        }
        
        const estado = obtenerEstadoNota(promedio);
        
        if (estado === "Nota Inválida") {
                e15_res.textContent = "Error: La nota debe estar entre 0 y 10.";
                e15_res.classList.add('error');
                e15_res.classList.remove('success');
                return;
        }

        e15_res.textContent = estado;
        e15_res.classList.remove('error');
        e15_res.classList.add('success');
    };
    
    // --- Evento Ejercicio 16 ---
    const e16_importe = document.querySelector('#e16-importe');
    const e16_tipo = document.querySelector('#e16-tipo');
    const e16_btn = document.querySelector('#btn-e16');
    const e16_res = document.querySelector('#res-e16');

    e16_btn.onclick = () => {
        const importe = parseFloat(e16_importe.value);
        const tipo = e16_tipo.value;

        if (isNaN(importe)) {
            e16_res.textContent = "Error: Ingrese un importe.";
            e16_res.classList.add('error');
            e16_res.classList.remove('success');
            return;
        }
        if (importe < 0) {
            e16_res.textContent = "Error: El importe debe ser positivo.";
            e16_res.classList.add('error');
            e16_res.classList.remove('success');
            return;
        }

        const sobretasa = calcularSobretasa(importe, tipo);
        e16_res.textContent = sobretasa.toFixed(2);
        e16_res.classList.remove('error');
        e16_res.classList.add('success');
    };

    // --- Evento Ejercicio 17 ---
    const e17_consumo = document.querySelector('#e17-consumo');
    const e17_btn = document.querySelector('#btn-e17');
    const e17_res = document.querySelector('#res-e17');

    e17_btn.onclick = () => {
        const consumo = parseFloat(e17_consumo.value);

        if (isNaN(consumo)) {
            e17_res.textContent = "Error: Ingrese el consumo.";
            e17_res.classList.add('error');
            e17_res.classList.remove('success');
            return;
        }
        if (consumo < 0) {
            e17_res.textContent = "Error: El consumo debe ser positivo.";
            e17_res.classList.add('error');
            e17_res.classList.remove('success');
            return;
        }

        const importe = calcularImporteAgua(consumo);
        e17_res.textContent = importe.toFixed(2);
        e17_res.classList.remove('error');
        e17_res.classList.add('success');
    };

    // --- Evento Ejercicio 18 ---
    const e18_base = document.querySelector('#e18-base');
    const e18_btn = document.querySelector('#btn-e18');
    const e18_res = document.querySelector('#res-e18');

    e18_btn.onclick = () => {
        const importeBase = parseFloat(e18_base.value);

        if (isNaN(importeBase) || importeBase < 0) {
            e18_res.textContent = "Error: Ingrese un importe base válido.";
            e18_res.classList.add('error');
            e18_res.classList.remove('success');
            return;
        }

        const tasa = calcularTasaSubsuelo(importeBase);
        e18_res.textContent = tasa.toFixed(2);
        e18_res.classList.remove('error');
        e18_res.classList.add('success');
    };

    // --- Evento Ejercicio 19 ---
    const e19_base = document.querySelector('#e19-base');
    const e19_btn = document.querySelector('#btn-e19');
    const e19_res = document.querySelector('#res-e19');

    e19_btn.onclick = () => {
        const importeBase = parseFloat(e19_base.value);

        if (isNaN(importeBase) || importeBase < 0) {
            e19_res.textContent = "Error: Ingrese un importe base válido.";
            e19_res.classList.add('error');
            e19_res.classList.remove('success');
            return;
        }

        const tasa = calcularTasaENRE(importeBase);
        e19_res.textContent = tasa.toFixed(2);
        e19_res.classList.remove('error');
        e19_res.classList.add('success');
    };

    // --- Evento Ejercicio 20 ---
    const e20_glucosa = document.querySelector('#e20-glucosa');
    const e20_peso = document.querySelector('#e20-peso');
    const e20_tipo = document.querySelector('#e20-tipo');
    const e20_btn = document.querySelector('#btn-e20');
    const e20_res = document.querySelector('#res-e20');

    e20_btn.onclick = () => {
        const glucosa = parseFloat(e20_glucosa.value);
        const peso = parseFloat(e20_peso.value);
        const tipo = e20_tipo.value;

        if (isNaN(glucosa) || isNaN(peso)) {
            e20_res.textContent = "Error: Ingrese glucosa y peso.";
            e20_res.classList.add('error');
            e20_res.classList.remove('success');
            return;
        }
        if (glucosa <= 0 || peso <= 0) {
            e20_res.textContent = "Error: Los valores deben ser mayores a 0.";
            e20_res.classList.add('error');
            e20_res.classList.remove('success');
            return;
        }

        const dosis = calcularDosisInsulina(glucosa, peso, tipo);
        e20_res.textContent = dosis.toFixed(2) + " unidades";
        e20_res.classList.remove('error');
        e20_res.classList.add('success');
    };

    // --- Evento Ejercicio 21 ---
    const e21_texto = document.querySelector('#e21-texto');
    const e21_btn = document.querySelector('#btn-e21');
    const e21_res = document.querySelector('#res-e21');
    
    e21_btn.onclick = () => {
        const texto = e21_texto.value;
        const cantidad = contarVocales(texto);
        e21_res.textContent = cantidad;
        e21_res.classList.remove('error');
        e21_res.classList.add('success');
    };

    // --- Evento Ejercicio 22 ---
    const e22_texto = document.querySelector('#e22-texto');
    const e22_btn = document.querySelector('#btn-e22');
    const e22_res = document.querySelector('#res-e22');

    e22_btn.onclick = () => {
        const texto = e22_texto.value;
        const cantidad = contarConsonantes(texto);
        e22_res.textContent = cantidad;
        e22_res.classList.remove('error');
        e22_res.classList.add('success');
    };

    // --- Evento Ejercicio 23 ---
    const e23_palabra = document.querySelector('#e23-palabra');
    const e23_btn = document.querySelector('#btn-e23');
    const e23_res = document.querySelector('#res-e23');

    e23_btn.onclick = () => {
        const palabra = e23_palabra.value;
        const resultado = tieneDosS(palabra);
        e23_res.textContent = resultado ? 'Verdadero' : 'Falso';
        e23_res.classList.remove('error');
        e23_res.classList.add('success');
    };

    // --- Evento Ejercicio 24 ---
    const e24_texto = document.querySelector('#e24-texto');
    const e24_btn = document.querySelector('#btn-e24');
    const e24_res = document.querySelector('#res-e24');

    e24_btn.onclick = () => {
        const texto = e24_texto.value;
        const resultado = tieneTresEspacios(texto);
        e24_res.textContent = resultado ? 'Verdadero' : 'Falso';
        e24_res.classList.remove('error');
        e24_res.classList.add('success');
    };
    
    // --- Evento Ejercicio 25 ---
    const e25_texto = document.querySelector('#e25-texto');
    const e25_btn = document.querySelector('#btn-e25');
    const e25_res = document.querySelector('#res-e25');

    e25_btn.onclick = () => {
        const texto = e25_texto.value;
        const resultado = noContieneNumeros(texto);
        e25_res.textContent = resultado ? 'Verdadero' : 'Falso';
        e25_res.classList.remove('error');
        e25_res.classList.add('success');
    };

};