/* Ejercicio Nro. 03:
Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar.
El primer valor representará los gastos de energía (luz eléctrica), el segundo valor representará los gastos en
comunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio de agua
potable. Se estima que para el siguiente mes estos tres valores incrementarán en un 12,5%, 7% y 3%
respectivamente. El programa debe calcular el gasto futuro a pagar. */


let gastoEnergia = Number(prompt("Ingrese el gasto de energía (luz eléctrica):"));
let gastoComunicacion = Number(prompt("Ingrese el gasto en comunicación (conectividad a internet):"));
let gastoAgua = Number(prompt("Ingrese el gasto por el servicio de agua potable:"));

let gastos= [gastoEnergia, gastoComunicacion, gastoAgua];
let incrementos = [0.125, 0.07, 0.03];
let gastosFuturos = [];

for (let i = 0; i < gastos.length; i++) {
    let gastoFuturo = gastos[i] + (gastos[i] * incrementos[i]);
    gastosFuturos.push(gastoFuturo);
}

console.log(`El gasto futuro a pagar por energía (luz eléctrica) es: ${gastosFuturos[0]}`);
console.log(`El gasto futuro a pagar por comunicación (conectividad a internet) es: ${gastosFuturos[1]}`);
console.log(`El gasto futuro a pagar por el servicio de agua potable es: ${gastosFuturos[2]}`);
console.log(`El gasto futuro total a pagar es: ${gastosFuturos[0] + gastosFuturos[1] + gastosFuturos[2]}`);
