export const calcularSobreTasa = (importeBase, tipo) => {
    const tasas = {
        1: 5 / 1000,
        2: 1 / 1000,
        3: 7 / 1000,
        4: 2 / 1000,
        5: 15 / 1000,
        6: 1 / 1000
    }
    const tasa = tasas[Number(tipo)] || tasas[6]
    return Number(importeBase) * tasa
}
