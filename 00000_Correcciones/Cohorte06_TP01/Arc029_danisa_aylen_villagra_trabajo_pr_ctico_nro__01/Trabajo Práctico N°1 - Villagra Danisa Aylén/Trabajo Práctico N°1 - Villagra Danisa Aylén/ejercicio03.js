/*Ejercicio Nro. 03: 
Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar. El primer valor representará los gastos de energía (luz eléctrica), el segundo valor representará los gastos en comunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio de agua potable. Se estima que para el siguiente mes estos tres valores incrementarán en un 12,5%, 7% y 3% respectivamente. El programa debe calcular el gasto futuro a pagar.*/

{
    let luz = Number(prompt(`Ingrese el valor que abonó por el servicio de energía eléctrica: `));
    let internet = Number(prompt(`Ingrese el valor que abonó por el servicio de internet: `));
    let agua = Number(prompt(`Ingrese el valor que abonó por el servicio de agua potable: `));

    let incrementoLuz = (luz * 12.5) / 100;
    let incrementoInternet = (internet * 7) / 100;
    let incrementoAgua = (agua * 3) / 100;

    let proxLuz = luz + incrementoLuz;
    let proxInternet = internet + incrementoInternet;
    let proxAgua = agua + incrementoAgua;

    console.log(`Gasto futuro a pagar por servicio de energía eléctrica: ${proxLuz}`);
    console.log(`Gasto futuro a pagar por servicio de internet: ${proxInternet}`);
    console.log(`Gasto futuro a pagar por servicio de agua potable: ${proxAgua}`);
}