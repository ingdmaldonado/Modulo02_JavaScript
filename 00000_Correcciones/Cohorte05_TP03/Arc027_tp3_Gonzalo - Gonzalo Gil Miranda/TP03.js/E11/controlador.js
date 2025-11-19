import { tieneAlMenosDosS } from './modelo.js';
export const analizarS = (palabra) => ({ palabra, tiene2s: tieneAlMenosDosS(palabra) });