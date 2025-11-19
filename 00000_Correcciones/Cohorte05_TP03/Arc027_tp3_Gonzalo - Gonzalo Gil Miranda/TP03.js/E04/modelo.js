export const calcularSobreTasaBebida = (importeBase, tipo) => {
const tasas = {1: 0.005, 2: 0.001, 3: 0.007, 4: 0.002, 5: 0.015, 6: 0.001};
const tasa = tasas[tipo] ?? 0.001;
return Number((importeBase * tasa).valueOf());
};