/* Ejercicio Nro. 03:
Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar.
El primer valor representará los gastos de energía (luz eléctrica), el segundo valor representará los gastos en comunicación (conectividad a internet),
el tercer valor representará los gastos ocasionados por el servicio de agua potable.
Se estima que para el siguiente mes estos tres valores incrementarán en un 12,5%, 7% y 3% respectivamente.
El programa debe calcular el gasto futuro a pagar. */

let gastoEnergia = Number(prompt("Ingrese el gasto de energía:"));
let gastoComunicacion = Number(prompt("Ingrese el gasto en comunicación:"));
let gastoAgua = Number(prompt("Ingrese el gasto por el servicio de agua potable:"));
let gastoEnergiaFuturo = gastoEnergia + (gastoEnergia * 12.5) / 100;
let gastoComunicacionFuturo = gastoComunicacion + (gastoComunicacion * 7) / 100;
let gastoAguaFuturo = gastoAgua + (gastoAgua * 3) / 100;
let gastoTotalFuturo = gastoEnergiaFuturo + gastoComunicacionFuturo + gastoAguaFuturo;
console.log(`El gasto total de energía para el siguiente mes será: ${gastoEnergiaFuturo}`);
console.log(`El gasto total en comunicación para el siguiente mes será: ${gastoComunicacionFuturo}`);
console.log(`El gasto total para el servicio de agua potable para el siguiente mes será: ${gastoAguaFuturo}`);
console.log(`El gasto para el siguiente mes sera: ${gastoTotalFuturo}`);
