import { tasaFiscalizacionENRE } from './modelo.js';
export const resumenFiscalizacion = (importeBase) => ({ importeBase, fiscalizacionENRE: tasaFiscalizacionENRE(importeBase) });