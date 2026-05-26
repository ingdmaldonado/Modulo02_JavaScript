
import { calcularSobreTasa } from './modelo';

const calcularSobreTasa = () => {
    
    const importe = parseFloat(document.getElementById('importeBase').value);
    const tipo = document.getElementById('tipoBebida').value;
    const resultado = document.getElementById('resultado');

    if (isNaN(importe) || importe <= 0 || tipo === "") {
        resultado.textContent = "Por favor ingrese un importe válido y seleccione un tipo de bebida";
        return;
    }

    const tasa = calcularSobreTasa(importe, tipo);
    
    resultado.textContent = "La sobre tasa es: $" + tasa.toFixed(2);
};

document.getElementById('importeBase').addEventListener('input', () => {
    document.getElementById('resultado').textContent = '';
});
document.getElementById('tipoBebida').addEventListener('change', () => {
    document.getElementById('resultado').textContent = '';
});