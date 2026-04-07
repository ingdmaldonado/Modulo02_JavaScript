/*
    Ejercicio Nro. 03:

    Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar. 
    El primer valor representará los gastos de energía (luz eléctrica), el segundo valor representará los gastos 
    en comunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio 
    de agua potable. Se estima que para el siguiente mes estos tres valores incrementarán en un 12,5%, 7% y 3% 
    respectivamente. El programa debe calcular el gasto futuro a pagar.
*/

{
    let gastoEnergiaElectrica = 0;
    let gastoInternet = 0;
    let gastoAguaPotable = 0;
    let incrementoEnergiaElectrica = 0;
    let incrementoInternet = 0;
    let incrementoAguaPotable = 0;
   
    //Ingreso de gastos de servicios
    gastoEnergiaElectrica = Number(prompt(`Ingrese el importe de gasto de servicio de Energia eléctrica`));
    gastoInternet = Number(prompt(`Ingrese el importe de gasto de servicio de Internet`));
    gastoAguaPotable = Number(prompt(`Ingrese el importe de gasto servicio de Agua Postable`));

    console.log(`Importe de servicio de Energía eléctrica $${gastoEnergiaElectrica}`);
    console.log(`Importe de servicio de Internet $${gastoInternet}`);
    console.log(`Importe de servicio de Agua potable $${gastoAguaPotable}`);

    //Cálculos de incrementos futuros de los tres servicios
    incrementoEnergiaElectrica = ((gastoEnergiaElectrica*12.5)/100);
    incrementoInternet = ((gastoInternet*7)/100);
    incrementoAguaPotable = ((gastoAguaPotable*3)/100);

    //Muestro los pocentajes de incremento
    console.log('===================INCREMENTOS FUTUROS================');
    console.log(`Incremento del 12,5% de Energía eléctrica $${incrementoEnergiaElectrica}`);
    console.log(`Incremento del 7% de Internet $${incrementoInternet}`);
    console.log(`Incremento del 3% de Agua potable $${incrementoAguaPotable}`);

    //Muestro futuros gastos de servicios incrementados
    console.log('===================GASTOS FUTUROS=================');
    console.log(`Importe de gasto futuro de servicio de Energía eléctrica $${gastoEnergiaElectrica + incrementoEnergiaElectrica}`);
    console.log(`Importe de gasto futuro de servicio de Internet $${gastoInternet + incrementoInternet}`);
    console.log(`Importe de gasto futuro de servicio de Agua potable $${gastoAguaPotable + incrementoAguaPotable}`);

}