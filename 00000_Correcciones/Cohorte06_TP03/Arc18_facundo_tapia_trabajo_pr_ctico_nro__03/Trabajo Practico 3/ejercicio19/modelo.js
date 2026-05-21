

export const calcularPrecioVenta = (importeCompra, margenGanancia) => {

    let precioVenta = importeCompra + (importeCompra * margenGanancia) / 100;

    return precioVenta;

};




