/*
Ejercicio Nro. 03:
Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar.
El primer valor representará los gastos de energía (luz eléctrica), el segundo valor representará los gastos en comunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio de agua
potable. Se estima que para el siguiente mes estos tres valores incrementarán en un 12,5%, 7% y 3% respectivamente. El programa debe calcular el gasto futuro a pagar.


*/
{
    let gastoDeLuz = 0;
    let gastoDeInternet = 0;
    let gastoDelAgua = 0;

    let aumentoLuz = 12.5;
    let aumentoInternet = 7;
    let aumentoAgua = 3;

    gastoDeLuz = Number(prompt(`Ingrese el monto por el servicio de energia`));
    gastoDeInternet = Number(prompt(`Ingrese el monto por el servicio de Internet`));
    gastoDelAgua = Number(prompt(`Ingrese el monto por el servicio de agua`));

    let gastoTotal = gastoDeLuz + gastoDelAgua + gastoDeInternet;
    
    console.log(`Gastos de luz: ${gastoDeLuz} Gastos de Intenet: ${gastoDeInternet} Gastos de agua: ${gastoDelAgua}  Gasto total: ${gastoTotal}`);


    let gastoFuturoLuz = gastoDeLuz + ((gastoDeLuz * aumentoLuz)/100);

    let gastoFuturoInternet = gastoDeInternet + ((gastoDeInternet * aumentoInternet)/100);

    let gastoFuturoAgua = gastoDelAgua + ((gastoDelAgua * aumentoAgua)/100);

    let gastoFuturoTotal = gastoFuturoLuz + gastoFuturoInternet + gastoDelAgua;

    

    console.log(`Gastos Futuros de los servicios del hogar`);
    console.log(`Gasto Futuro del servicio de luz: ${gastoFuturoLuz}`);
    console.log(`Gasto Futuro del servicio de Internet: ${gastoFuturoInternet}`);
    console.log(`Gasto Futuro del servicio de agua: ${gastoFuturoAgua}`);
    console.log(`Gasto Futuro de los servicios: ${gastoFuturoTotal}`)


}