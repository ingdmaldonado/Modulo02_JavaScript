import { calcularImporteAgua } from './modelo.js';
export const facturaAgua = (m3) => ({ consumo: m3, importe: calcularImporteAgua(m3) });