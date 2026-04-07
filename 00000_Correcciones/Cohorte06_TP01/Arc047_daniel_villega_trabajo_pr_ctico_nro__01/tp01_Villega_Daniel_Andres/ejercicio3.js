/*Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar.
El primer valor representará los gastos de energía (luz eléctrica), el segundo valor representará los gastos en
comunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio de agua
potable. Se estima que para el siguiente mes estos tres valores incrementarán en un 12,5%, 7% y 3%
respectivamente. El programa debe calcular el gasto futuro a pagar.*/

{

    let gastosDeEnergia = 0;

    gastosDeEnergia = Number(prompt(`ingrese pago de luz`));

    let gastosDeInternet = 0;

    gastosDeInternet = Number(prompt(`ingrese pago de internet`));

    let gastosDeAgua = 0;

    gastosDeAgua = Number(prompt(`ingrese pago de agua`));

    let incrementoDeEnergia = (gastosDeEnergia*12.5)/100;

    let incrementroDeInternet = (gastosDeInternet * 7)/100;

    let incrementoDeAgua = (gastosDeAgua * 3)/100;

    let luzFutura=incrementoDeEnergia+gastosDeEnergia;

    let internetFutura=incrementroDeInternet+gastosDeInternet;

    let aguaFutra=incrementoDeAgua+gastosDeAgua;

    console.log(`luz ${luzFutura }internet ${internetFutura} agua ${aguaFutra}`);



}