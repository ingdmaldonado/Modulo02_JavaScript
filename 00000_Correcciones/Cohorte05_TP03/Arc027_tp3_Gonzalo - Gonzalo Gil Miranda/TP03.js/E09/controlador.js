import { contarVocales } from './modelo.js';
export const analizarVocales = (cadena) => ({ cadena, vocales: contarVocales(cadena) });