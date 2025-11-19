import { contarConsonantes } from './modelo.js';
export const analizarConsonantes = (cadena) => ({ cadena, consonantes: contarConsonantes(cadena) });