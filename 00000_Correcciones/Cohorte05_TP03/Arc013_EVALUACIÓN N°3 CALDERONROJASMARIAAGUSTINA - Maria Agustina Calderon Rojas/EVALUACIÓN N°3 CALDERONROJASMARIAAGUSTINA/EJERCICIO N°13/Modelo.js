// =============================
// MODELO: Contiene la lógica del cálculo
// =============================

// Arrow function que calcula el precio de venta sin impuestos
export const calcularPrecioVenta = (importe, margen) => {
    return importe + (importe * margen / 100);
};