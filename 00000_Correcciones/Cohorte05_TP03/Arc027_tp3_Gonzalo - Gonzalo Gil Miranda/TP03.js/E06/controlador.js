import { tasaSubsuelo } from './modelo.js';
export const resumenSubsuelo = (importeBase) => ({ importeBase, subsuelo: tasaSubsuelo(importeBase) });