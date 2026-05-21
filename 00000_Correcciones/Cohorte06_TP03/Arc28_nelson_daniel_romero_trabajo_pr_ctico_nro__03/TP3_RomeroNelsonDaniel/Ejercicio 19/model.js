export const calcularPrecioVenta = (precio, porcentaje) => {
    return precio + (precio * porcentaje) / 100
}