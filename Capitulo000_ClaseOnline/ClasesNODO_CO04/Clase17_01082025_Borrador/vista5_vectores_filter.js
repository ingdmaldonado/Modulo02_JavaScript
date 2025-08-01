const consumosDeEnergia = [
  100, 300, 400, 55, 280, 250, 400.25, 280, 300, 75, 22, 77.8,
];

window.addEventListener("load", () => {
  console.log(consumosDeEnergia);

  /* Consumos Bajos < 80 */

  const bajosConsumos = consumosDeEnergia.filter((consumo) => consumo < 80);
  console.log("Bajos Consumos:", bajosConsumos);

  const altosConsumos = consumosDeEnergia
    .filter((consumo) => consumo >= 80)
    .forEach((ConsumoAlto) => console.log(`Alto Consumo ${ConsumoAlto}`));
});
