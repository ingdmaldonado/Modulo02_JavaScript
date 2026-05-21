export const calcular = (valorProducto, margenGanancia) => {
    const margen = (Number(valorProducto) * Number(margenGanancia)) / 100
    const resultado = margen + Number(valorProducto)
    return resultado
}

