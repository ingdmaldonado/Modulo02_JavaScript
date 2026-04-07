// Pedir gastos al usuario
let gastoEnergia = parseFloat(prompt("Ingrese el gasto de energía eléctrica:"));
let gastoComunicacion = parseFloat(prompt("Ingrese el gasto de comunicación (Internet):"));
let gastoAgua = parseFloat(prompt("Ingrese el gasto de agua potable:"));

// Calcular incremento para el siguiente mes
let gastoEnergiaFuturo = gastoEnergia * 1.125;       // +12.5%
let gastoComunicacionFuturo = gastoComunicacion * 1.07; // +7%
let gastoAguaFuturo = gastoAgua * 1.03;             // +3%

// Calcular total futuro
let totalFuturo = gastoEnergiaFuturo + gastoComunicacionFuturo + gastoAguaFuturo;

// Mostrar resultados
console.log("Gasto futuro de energía: $" + gastoEnergiaFuturo.toFixed(2));
console.log("Gasto futuro de comunicación: $" + gastoComunicacionFuturo.toFixed(2));
console.log("Gasto futuro de agua: $" + gastoAguaFuturo.toFixed(2));
console.log("Total a pagar el próximo mes: $" + totalFuturo.toFixed(2));