import { noContieneDigitos } from './modelo.js';
export const validarSinDigitos = (cadena) => ({ cadena, soloLetras: noContieneDigitos(cadena) });