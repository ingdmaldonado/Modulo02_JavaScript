const gastoEnergia = Number(prompt("Ingrese el gasto de energia electrica:"));
const gastoInternet = Number(prompt("Ingrese el gasto de internet:"));
const gastoAgua = Number(prompt("Ingrese el gasto de agua potable:"));

const energiaProxima = gastoEnergia * 1.125;
const internetProximo = gastoInternet * 1.07;
const aguaProxima = gastoAgua * 1.03;
const gastoFuturoTotal = energiaProxima + internetProximo + aguaProxima;

console.log("Gasto actual de energia: $", gastoEnergia);
console.log("Gasto futuro de energia con 12.5% de incremento: $", energiaProxima);
console.log("Gasto actual de internet: $", gastoInternet);
console.log("Gasto futuro de internet con 7% de incremento: $", internetProximo);
console.log("Gasto actual de agua: $", gastoAgua);
console.log("Gasto futuro de agua con 3% de incremento: $", aguaProxima);
console.log("Gasto futuro total a pagar: $", gastoFuturoTotal);
