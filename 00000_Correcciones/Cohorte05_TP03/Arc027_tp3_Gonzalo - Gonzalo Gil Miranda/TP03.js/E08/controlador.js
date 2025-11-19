import { dosisInsulina } from './modelo.js';
export const planInsulina = (glucosa, peso, tipoDiabetes) => ({ glucosa, peso, tipoDiabetes, dosis: dosisInsulina(glucosa, peso, tipoDiabetes) });