/*
Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar. El primer valor representará los gastos de energía (luz eléctrica), el segundo valor representará los gastos en comunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio de agua potable. Se estima que para el siguiente mes estos tres valores incrementarán en un 12,5%, 7% y 3% respectivamente. El programa debe calcular el gasto futuro a pagar. 
*/

let gatosEnergia = 0;
let gastosComunicacion = 0;
let gastosAgua = 0;


let gatosEnergiaFuturo = 0;
let gastosComunicacionFuturo = 0;
let gastosAguaFuturo = 0;

gatosEnergia = Number(prompt(`Ingrese los gastos de Energia de este mes:`));
gastosComunicacion = Number(prompt(`Ingrese los gastos de Comunicacion de este mes;`));
gastosAgua = Number(prompt(`Ingrese los gastos de Agua de este mes:`));

gatosEnergiaFuturo = gatosEnergia + (gatosEnergia * 12.5) / 100;
gastosComunicacionFuturo = gastosComunicacion + (gastosComunicacion * 7) / 100;
gastosAguaFuturo = gastosAgua + (gastosAgua * 3) / 100;

console.log(`El gasto de Energia del mes es: $${gatosEnergia}`)
console.log(`El gasto de Energia del siguinte mes ser: $${gatosEnergiaFuturo}`)

console.log(`El gasto de Comunicaion del mes es: $${gastosComunicacion}`)
console.log(`El gasto de Comunicaion del siguinte mes ser: $${gastosComunicacionFuturo}`)

console.log(`El gasto de Agua del mes es: $${gastosAgua}`)
console.log(`El gasto de Agua del siguinte mes ser: $${gastosAguaFuturo}`)
