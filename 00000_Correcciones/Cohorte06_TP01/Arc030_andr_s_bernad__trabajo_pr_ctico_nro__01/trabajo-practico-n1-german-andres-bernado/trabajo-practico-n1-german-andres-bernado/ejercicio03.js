/* Ejercicio Nro. 03:

Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar.
El primer valor representará los gastos de energía (luz eléctrica), el segundo valor representará los gastos en
comunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio de agua
potable. Se estima que para el siguiente mes estos tres valores incrementarán en un 12,5%, 7% y 3%
respectivamente. El programa debe calcular el gasto futuro a pagar.

*/ 


let luz = 0;
luz = Number(prompt("Ingrese el gasto de luz:"));

let internet = 0;
internet = Number(prompt("Ingrese el gasto de internet:"));

let agua = 0;
agua = Number(prompt("Ingrese el gasto de agua:"));

let luzFutura = 0;
luzFutura = luz + (luz * 0.125);

let internetFuturo = 0;
internetFuturo = internet + (internet * 0.07);

let aguaFutura = 0;
aguaFutura = agua + (agua * 0.03);

console.log("Gasto actual de luz:", luz , "Gasto futuro luz:", luzFutura);
console.log("Gasto actual de internet:", internet , "Gasto futuro internet:", internetFuturo);
console.log("Gasto actual de agua:", agua , "Gasto futuro agua:", aguaFutura);