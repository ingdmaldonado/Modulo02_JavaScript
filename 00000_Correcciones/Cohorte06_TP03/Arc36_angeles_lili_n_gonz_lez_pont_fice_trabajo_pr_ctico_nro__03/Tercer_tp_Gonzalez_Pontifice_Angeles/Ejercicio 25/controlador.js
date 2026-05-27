

import { calcularTasaENRE } from './modelo.js';

const calcularTasaENRE = () => {
    const importe = parseFloat(document.getElementById('importeBase').value);
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(importe) || importe <= 0) {
        
        resultadoDiv.textContent = " ingreso un importe válido.";
        return;
    }

    //  función del modelo/
    const tasa = calcularTasaENRE(importe);

    // resultado/
    resultadoDiv.textContent = `Tasa ENRE: $${tasa.toFixed(2)}`;
};

// Limpiar resultado al modificar el input
document.getElementById('importeBase').addEventListener('input', () => {
    document.getElementById('resultado').textContent = '10';
});