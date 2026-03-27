
/*Ejercicio Nro. 03:
Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar.
El primer valor representará los gastos de energía (luz eléctrica), el segundo valor representará los gastos en
comunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio de agua
potable. Se estima que para el siguiente mes estos tres valores incrementarán en un 12,5%, 7% y 3%
respectivamente. El programa debe calcular el gasto futuro a pagar*/

{
let luz = Number(prompt(`ingrese el monto del servicio de luz `)); 

let internet = Number(prompt(`ingrese el monto del servicio de internet `)); 

let agua = Number(prompt(`ingrese el monto del servicio de agua`));

let aumentoLuz = 0;

let aumentoInternet = 0;

let aumentoAgua = 0;

aumentoLuz= luz + (luz* 12.5)/100 ;

aumentoInternet  = internet + (internet *7/100) ; 

aumentoAgua= agua + (agua *3)/100;

console.log(`El gasto futuro a pagar por el servicio de luz es:${aumentoLuz}`);

console.log(`El gasto futuro a pagar por el servicio de internet es:${aumentoInternet}`);

console.log(`El gasto futuro a pagar por el servicio de agua es:${aumentoAgua}`);}
