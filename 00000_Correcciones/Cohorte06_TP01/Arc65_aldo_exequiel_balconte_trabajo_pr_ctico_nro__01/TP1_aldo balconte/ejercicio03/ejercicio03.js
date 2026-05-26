// Ejercicio Nro. 03: Gastos Futuros en el Hogar

// Ingresar los gastos actuales
let gastoEnergia = parseFloat(prompt("Ingrese el gasto actual de energía (luz eléctrica):"));
let gastoComunicacion = parseFloat(prompt("Ingrese el gasto actual de comunicación (internet):"));
let gastoAgua = parseFloat(prompt("Ingrese el gasto actual de agua potable:"));

// Definir porcentajes de incremento
const incrementoEnergia = 0.125; // 12.5%
const incrementoComunicacion = 0.07; // 7%
const incrementoAgua = 0.03; // 3%

// Calcular gastos futuros
let gastoFuturoEnergia = gastoEnergia * (1 + incrementoEnergia);
let gastoFuturoComunicacion = gastoComunicacion * (1 + incrementoComunicacion);
let gastoFuturoAgua = gastoAgua * (1 + incrementoAgua);

// Calcular el gasto total futuro
let gastoTotalFuturo = gastoFuturoEnergia + gastoFuturoComunicacion + gastoFuturoAgua;

// Mostrar resultados
console.log("Gastos actuales:");
console.log("Energía:", gastoEnergia.toFixed(2));
console.log("Comunicación:", gastoComunicacion.toFixed(2));
console.log("Agua:", gastoAgua.toFixed(2));

console.log("\nGastos futuros estimados:");
console.log("Energía (con 12.5% de incremento):", gastoFuturoEnergia.toFixed(2));
console.log("Comunicación (con 7% de incremento):", gastoFuturoComunicacion.toFixed(2));
console.log("Agua (con 3% de incremento):", gastoFuturoAgua.toFixed(2));
console.log("Gasto total futuro a pagar:", gastoTotalFuturo.toFixed(2));