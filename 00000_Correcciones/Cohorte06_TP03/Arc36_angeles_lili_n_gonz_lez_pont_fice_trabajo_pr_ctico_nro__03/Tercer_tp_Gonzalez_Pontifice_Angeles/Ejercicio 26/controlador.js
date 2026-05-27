
import { calcularDosisInsulina } from './modelo.js';

const calcularDosisInsulina = () => {
    
    //los valores del formulario//
    const glucosa = parseFloat(document.getElementById('glucosa').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const tipoDiabetes = document.getElementById('tipoDiabetes').value;
    
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(glucosa) || isNaN(peso) || tipoDiabetes === "") {

        resultadoDiv.innerHTML = "<strong>❌ Por favor complete todos los campos correctamente.</strong>";
        return;
    }

    if (peso <= 0 || glucosa < 0) {
        resultadoDiv.innerHTML = "Los valores deben ser positivos.";
        return;
    }

    const dosis = calcularDosisInsulina(glucosa, peso, tipoDiabetes);

    //  resultados//
    if (typeof dosis === "string") {
        resultadoDiv.innerHTML = `<strong>${dosis}</strong>`;
    } else {
        resultadoDiv.style.color = "green";
        resultadoDiv.innerHTML = `
            Dosis recomendada de insulina:
            <big>${dosis.toFixed(2)} unidades</big>
        `;
    }
};

// Limpiar resultado cuando cambie algún valor//
document.querySelectorAll('input, select').forEach(elemento => {
    elemento.addEventListener('change', () => {
        document.getElementById('resultado').innerHTML = '';
    });
});