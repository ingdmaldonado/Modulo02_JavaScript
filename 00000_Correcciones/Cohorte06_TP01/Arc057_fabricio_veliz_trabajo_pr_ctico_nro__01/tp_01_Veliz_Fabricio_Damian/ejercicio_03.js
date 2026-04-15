/*
Ejercicio Nro. 03:
Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar.
El primer valor representará los gastos de energía (luz eléctrica), el segundo valor representará los gastos en
comunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio de agua potable.
Se estima que para el siguiente mes estos tres valores incrementarán en un 12,5%, 7% y 3% respectivamente.
El programa debe calcular el gasto futuro a pagar.
*/
{
    let luz = 0;
    let internet = 0;
    let agua = 0;

    luz = Number(prompt("Ingrese el gasto actual de luz eléctrica:"));
    internet = Number(prompt("Ingrese el gasto actual de internet:"));
    agua = Number(prompt("Ingrese el gasto actual de agua potable:"));

    let futuroLuz = 0;
    let futuroInternet = 0;
    let futuroAgua = 0;
    let gastoFuturo = 0;

    futuroLuz = luz + (luz * 0.125);
    futuroInternet = internet + (internet * 0.07);
    futuroAgua = agua + (agua * 0.03);
    
    gastoFuturo = futuroLuz + futuroInternet + futuroAgua;

    console.log(`El gasto futuro estimado a pagar para el próximo mes será de: $${gastoFuturo}`);
}