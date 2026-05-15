// Arrow Function
export const calcularPrecioVenta = (importeCompra, margenGanancia) => {

    let ganancia = importeCompra * (margenGanancia / 100);

    let precioVenta = importeCompra + ganancia;

    return precioVenta;
};

