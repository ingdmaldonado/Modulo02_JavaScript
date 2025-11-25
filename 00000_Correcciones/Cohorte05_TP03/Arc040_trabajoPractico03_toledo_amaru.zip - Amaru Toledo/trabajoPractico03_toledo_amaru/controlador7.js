/**
 * EJERCICIO NRO. 20
 * Calcula la dosis de insulina recomendada para un paciente diabético según su tipo de diabetes.
 * @param {number} glucosa Nivel de glucosa en sangre.
 * @param {number} peso Peso corporal en kilogramos.
 * @param {number} tipoDiabetes 1 para Tipo 1, 2 para Tipo 2.
 * @returns {number} La dosis de insulina recomendada.
 */

window.addEventListener('load', () => {
    console.log('controlador7 cargado y listo.');
});

// VARIABLE PRINCIPAL



export const calcularDosisInsulina = (glucosa, peso, tipoDiabetes) => {
    let dosis = 0;
    const ajusteGlucosa = glucosa > 180 ? (glucosa * 0.50) : 0; // 50% de la glucosa si es > 180 [cite: 84, 85]

    if (tipoDiabetes === 1) { // Tipo 1 [cite: 77]
        // 50% del Peso + 50% del nivel de glucosa (si es > 180) [cite: 84]
        dosis = (peso * 0.50) + ajusteGlucosa;
    } else if (tipoDiabetes === 2) { // Tipo 2 [cite: 82]
        // 20% del Peso + 50% del nivel de glucosa (si es > 180) [cite: 85]
        dosis = (peso * 0.20) + ajusteGlucosa;
    } else {
        // En un caso real se devolvería un error o un valor seguro.
        return 0;
    }
    console.log(`Dosis de insulina calculada: ${dosis}`); 
    return dosis;
};