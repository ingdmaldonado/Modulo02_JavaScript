import { calcularSobreTasaBebida } from './modelo.js';
export const calcularImpuestoBebida = (importeBase, tipo) => ({ importeBase, tipo, sobreTasa: calcularSobreTasaBebida(importeBase, tipo) });