
export const fnCalcular = (importeCompra,margen) => {
    let precioVenta = Number(importeCompra) + Number(importeCompra * margen / 100);
    return precioVenta;
};