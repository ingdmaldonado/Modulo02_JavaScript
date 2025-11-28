// ...existing code...

/**
 * calcularDosisInsulina
 * Parámetros:
 *  - glucosa: nivel de glucosa en sangre (mg/dL)
 *  - peso: peso corporal en kg
 *  - tipo: '1' o '2' (tipo de diabetes)
 *
 * Reglas:
 *  - Tipo 1: 50% del peso + 50% del nivel de glucosa (este último solo si glucosa > 180)
 *  - Tipo 2: 20% del peso + 50% del nivel de glucosa (este último solo si glucosa > 180)
 *
 * Devuelve un número (NaN si entradas inválidas).
 */
export const calcularDosisInsulina = (glucosa, peso, tipo) => {
  const g = Number(glucosa);
  const p = Number(peso);
  const t = String(tipo).trim();

  if (!Number.isFinite(g) || !Number.isFinite(p) || p < 0 || g < 0) return NaN;
  if (t !== '1' && t !== '2') return NaN;

  const aporteGlucosa = g > 180 ? 0.5 * g : 0;
  const aportePeso = t === '1' ? 0.5 * p : 0.2 * p;

  const dosis = aportePeso + aporteGlucosa;
  return Number(dosis);
};