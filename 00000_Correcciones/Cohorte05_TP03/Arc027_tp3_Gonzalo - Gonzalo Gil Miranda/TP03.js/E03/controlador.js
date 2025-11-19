import { clasificarNota } from './modelo.js';
export const estadoPromedio = (promedio) => ({ promedio, estado: clasificarNota(promedio) });