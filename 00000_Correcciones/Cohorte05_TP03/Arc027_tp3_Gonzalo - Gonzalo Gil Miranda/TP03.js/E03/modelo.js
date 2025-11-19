export const clasificarNota = (promedio) => {
if (promedio <= 4) return 'Desaprobado';
if (promedio > 4 && promedio <= 7) return 'Aprobado';
if (promedio > 7 && promedio <= 9) return 'Muy Bueno';
if (promedio === 10) return 'Excelente';
return 'Valor fuera de rango';
};