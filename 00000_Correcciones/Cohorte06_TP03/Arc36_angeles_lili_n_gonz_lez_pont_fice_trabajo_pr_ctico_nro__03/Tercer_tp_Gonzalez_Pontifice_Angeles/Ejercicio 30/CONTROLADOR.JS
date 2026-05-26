

import { tieneTresEspacios } from './modelo';

// Función que se llama desde el botón//
const verificarEspacios = () => {
    
    const texto = document.getElementById('texto').value;
    const resultado = document.getElementById('resultado');

    if (texto.trim() === "") {
        resultado.textContent = "Por favor ingrese un texto";
        return;
    }

    const tieneTres = tieneTresEspacios(texto);
    
    // Mostramos el resultado
    if (tieneTres) {
        resultado.textContent = "True - El texto tiene al menos 3 espacios en blanco";
    } else {
        resultado.textContent = "False - El texto tiene menos de 3 espacios en blanco";
    }
};

document.getElementById('texto').addEventListener('input', () => {
    document.getElementById('resultado').textContent = '';
});