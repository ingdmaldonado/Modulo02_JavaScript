
export const porcentajeTasa = 0.03;
export const calculosRealizados = [];
export const validarImporte = (importe) => {
    return !isNaN(importe) && importe > 0;
};