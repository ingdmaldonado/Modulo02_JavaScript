export const calcularPrecioVenta = (precioCosto,margenGanancia) =>
{
    let valorAsumar = precioCosto * margenGanancia/100;
    let precioVentaCalculado = precioCosto+ valorAsumar;

    return precioVentaCalculado;

}



