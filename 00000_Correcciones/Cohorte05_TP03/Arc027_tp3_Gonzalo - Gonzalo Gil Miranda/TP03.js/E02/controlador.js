import { promedioTresNotas } from './modelo.js';
export const procesarNotas = (n1, n2, n3) => ({ n1, n2, n3, promedio: promedioTresNotas(n1, n2, n3) });