export const calcularImporteAgua = (metros) => {
    const m = Number(metros) < 50 ? 50 : Number(metros)
    if (m <= 50) return 50 * 350
    if (m <= 70) return (50 * 350) + ((m - 50) * 555.20)
    return (50 * 350) + (20 * 555.20) + ((m - 70) * 1552.20)
}
