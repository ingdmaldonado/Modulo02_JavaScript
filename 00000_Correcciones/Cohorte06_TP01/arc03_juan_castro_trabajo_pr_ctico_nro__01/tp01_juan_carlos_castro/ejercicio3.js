/*

Ejercicio Nro. 03: 
Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar. 
El  primer  valor  representará  los  gastos  de  energía  (luz  eléctrica),  el  segundo  valor  representará  los  gastos  en 
comunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio de agua 
potable. Se estima que  para  el siguiente mes estos tres valores incrementarán en  un 12,5%, 7% y 3% 
respectivamente. El programa debe calcular el gasto futuro a pagar.

 */

{

    let energia = 0;
    let internet = 0;
    let agua = 0;
    let totalEnergia = 0;
    let totalInternet = 0;
    let totalAgua = 0;

    energia = Number(prompt(`Ingrese el monto de luz electrica:`));
    internet = Number(prompt(`Ingrese el monto de internet:`));
    agua = Number(prompt(`Ingrese el monto de agua`));

    totalEnergia = energia + (energia*12.5)/100; 
    totalInternet = internet + (internet*7)/100;
    totalAgua = agua + (agua*3)/100;

    console.log(`El monto a pagar el proximo mes de luz electrica es: ${totalEnergia}, internet: ${totalInternet}, agua: ${totalAgua}`);

}