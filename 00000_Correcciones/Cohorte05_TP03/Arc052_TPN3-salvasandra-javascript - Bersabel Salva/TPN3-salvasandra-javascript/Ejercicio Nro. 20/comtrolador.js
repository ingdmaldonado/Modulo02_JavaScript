
// controlador.js
import { calcularDosisInsulina } from "./modelo.js";

window.onload = () => {
  console.log(`La página está cargada correctamente.`);

  let nivelGlucosa = Number(prompt(`Ingrese el nivel de glucosa en sangre (mg/dL):`));
  let pesoCorporal = Number(prompt(`Ingrese el peso corporal del paciente (kg):`));
  let tipoDiabetes = Number(prompt(`Ingrese el tipo de diabetes (1 para Tipo 1, 2 para Tipo 2):`));

  let resultadoDosis = calcularDosisInsulina(nivelGlucosa, pesoCorporal, tipoDiabetes);

  console.log(`El paciente con tipo de diabetes ${tipoDiabetes} y ${nivelGlucosa} mg/dL de glucosa, tiene una dosis recomendada de insulina de: ${resultadoDosis.toFixed(2)} unidades.`);
};


