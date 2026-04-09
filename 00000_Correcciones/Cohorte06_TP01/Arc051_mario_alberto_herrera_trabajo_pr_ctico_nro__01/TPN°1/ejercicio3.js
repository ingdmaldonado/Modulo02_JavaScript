/*
Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar. 
El primer valor representará los gastos de energía (luz eléctrica), el segundo valor representará los gastos en 
comunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio de agua 
potable. Se estima que para el siguiente mes estos tres valores incrementarán en un 12,5%, 7% y 3% 
respectivamente. El programa debe calcular el gasto futuro a pagar.
*/
let luz = Number(prompt("Ingrese el gasto de energía eléctrica"));
let internet = Number(prompt("Ingrese el gasto de internet"));
let agua = Number(prompt("Ingrese el gasto de agua potable"));


let luzaum = luz + (luz * 0.125);
let internetaum = internet + (internet * 0.07);
let aguaaum = agua + (agua * 0.03);


let totalaum = luzaum + internetaum + aguaaum;

console.log("Servicio en el próximo mes de luz: " + luzaum);
console.log("Servicio en el próximo mes de internet: " + internetaum);
console.log("Servicio en el próximo mes de agua: " + aguaaum);
console.log("Total a pagar el próximo mes: " + totalaum);