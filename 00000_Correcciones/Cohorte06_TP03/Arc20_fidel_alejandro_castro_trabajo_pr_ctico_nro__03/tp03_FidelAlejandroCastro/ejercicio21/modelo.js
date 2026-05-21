export const fnMensajeDevolucion = (notasPromedio) =>{
    
    if (notasPromedio <= 4) return `Desaprobado`;
    if (notasPromedio > 4 && notasPromedio <= 7) return `Aprobado`;
    if (notasPromedio > 7 && notasPromedio <= 9) return `Muy Bueno`;
    if (notasPromedio === 10) return `Excelente`;
};