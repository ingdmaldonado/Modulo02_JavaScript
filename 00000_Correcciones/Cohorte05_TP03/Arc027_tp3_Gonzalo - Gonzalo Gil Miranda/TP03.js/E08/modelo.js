export const dosisInsulina = (glucosa, peso, tipoDiabetes) => {
const aporteGlucosa = glucosa > 180 ? 0.5 * glucosa : 0;
if (tipoDiabetes === 1) return Number((0.5 * peso + aporteGlucosa).valueOf());
if (tipoDiabetes === 2) return Number((0.2 * peso + aporteGlucosa).valueOf());
return 0;
};