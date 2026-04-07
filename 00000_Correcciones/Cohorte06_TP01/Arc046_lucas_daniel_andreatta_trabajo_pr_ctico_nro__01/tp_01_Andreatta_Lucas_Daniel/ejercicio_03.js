/*

Ejercicio Nro. 03: 
Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar. 
El  primer  valor  representará  los  gastos  de  energía  (luz  eléctrica),  el  segundo  valor  representará  los  gastos  en 
comunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio de agua 
potable. Se estima que  para  el siguiente mes estos tres valores incrementarán en  un 12,5%, 7% y 3% 
respectivamente. El programa debe calcular el gasto futuro a pagar.

*/

{
    let gastoEnergia = 0;
    let gastoComunicacion = 0;
    let gastoAgua = 0;

    gastoEnergia = Number(prompt(`Ingrese gastos en energia:`));
    gastoComunicacion = Number(prompt(`Ingrese gastos en comunicación:`));
    gastoAgua = Number(prompt(`Ingrese gastos en agua potable:`));

    let gastoFuturoEnergia = 0;
    let gastoFuturoComunicacion = 0;
    let gastoFuturoAgua = 0;

    gastoFuturoEnergia = (gastoEnergia*112.5)/100;
    gastoFuturoComunicacion = (gastoComunicacion*107)/100;
    gastoFuturoAgua = (gastoAgua*103)/100;

    console.log(`El valor estimado de los gastos en energia del proximo mes sera de ${gastoFuturoEnergia}`);
    console.log(`El valor estimado de los gastos en comunicacion del proximo mes sera de ${gastoFuturoComunicacion}`);
    console.log(`El valor estimado de los gastos en agua potable del proximo mes sera de ${gastoFuturoAgua}`);


}