/* Ejercicio Nro. 03:
Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar. El primer valor representará los gastos de energía (luz eléctrica), el segundo valor representará los gastos en comunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio de agua potable. Se estima que para el siguiente mes estos tres valores incrementarán en un 12,5%, 7% y 3% respectivamente. El programa debe calcular el gasto futuro a pagar.
*/

{
let energia = Number(prompt("Ingrese el gasto de energía eléctrica:"));
let internet = Number(prompt("Ingrese el gasto de conectividad a internet:"));
let agua = Number(prompt("Ingrese el gasto de agua potable:"));

let energiaFuturo = energia + (energia * 12.5) / 100;
let internetFuturo = internet + (internet * 7) / 100;
let aguaFuturo = agua + (agua * 3) / 100;

let totalFuturo = energiaFuturo + internetFuturo + aguaFuturo;

console.log("Gasto actual en energía: $" + energia);
console.log("Gasto futuro en energía (+12,5%): $" + energiaFuturo);

console.log("Gasto actual en internet: $" + internet);
console.log("Gasto futuro en internet (+7%): $" + internetFuturo);

console.log("Gasto actual en agua: $" + agua);
console.log("Gasto futuro en agua (+3%): $" + aguaFuturo);

console.log("TOTAL futuro a pagar: $" + totalFuturo);
}