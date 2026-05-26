
import { calcularTasaSubsuelo } from './modelo';

// Función que maneja el cálculo cuando el usuario presiona el botón//
const calcularTasaSubsuelo = () => {
    
    // Capturamos el importe que ingresó el usuario//
    const importeIngresado = parseFloat(document.getElementById('importeBase').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(importeIngresado) || importeIngresado <= 0) {
        resultado.textContent = "Por favor ingrese un importe válido mayor a 0";
        return;
    }
    const tasaCalculada = calcularTasaSubsuelo(importeIngresado);
    resultado.textContent = `La Tasa de Subsuelo es: $${tasaCalculada.toFixed(2)}`;
};


document.getElementById('importeBase').addEventListener('input', () => {
    document.getElementById('resultado').textContent = '';
});