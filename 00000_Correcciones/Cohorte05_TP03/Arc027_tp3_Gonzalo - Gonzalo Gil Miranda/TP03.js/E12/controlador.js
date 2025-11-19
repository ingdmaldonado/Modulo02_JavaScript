import { tieneTresEspacios } from './modelo.js';
export const analizarEspacios = (cadena) => ({ cadena, tiene3espacios: tieneTresEspacios(cadena) });