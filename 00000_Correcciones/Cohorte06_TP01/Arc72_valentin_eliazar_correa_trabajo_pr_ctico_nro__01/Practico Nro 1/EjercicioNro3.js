/*
Ejercicio Nro. 03: 
Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar. 
El primer valor representará los gastos de energía (luz eléctrica), el segundo valor representará los gastos en 
comunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio de agua 
potable. Se estima que para el siguiente mes estos tres valores incrementarán en un 12,5%, 7% y 3% 
respectivamente. El programa debe calcular el gasto futuro a pagar. 

Orden de las facturas
    -Luz incremento del 12,5%
    -Internet incremento del 7%
    -Agua incremento del 3%


*/

{
    let electricidad = 0;
    let internet = 0;
    let agua = 0;
    let totalServicios = 0;
    let incrementoElectricidad = 0
    let incrementoInternet = 0
    let incrementoAgua = 0

    electricidad = Number(prompt(`Ingrece el importe de Electricidad`));
    internet  = Number(prompt(`Ingrece el importe de Internet`));
    agua  = Number(prompt(`Ingrece el importe de Agua`));

    console.log(`El importe es de la Electricidad es de ${electricidad} `);
    console.log(`El importe es de la Electricidad es de ${internet} `);
    console.log(`El importe es de la Electricidad es de ${agua} `);

    totalServicios = (electricidad + internet + agua);
    console.log(totalServicios);

    incrementoElectricidad = (electricidad * 12.5)/100;
    incrementoInternet = (internet *7)/100;
    incrementoAgua = (agua *3)/100;

    console.log(`El incremento proximo de luz sera de: ${incrementoElectricidad + electricidad}`);

    console.log(`El incremento proximo del agua sera de: ${incrementoAgua + agua}`);

    console.log(`El incremento proximo del internet sera de: ${incrementoInternet + internet}`);

    console.log(`Total el incremento del proximo mes: ${incrementoElectricidad+incrementoAgua+incrementoInternet}`);



    //console.log(`Los incrementos de luz, internet y agua para el proximo mes seran de: ${incrementoElectricidad}, ${incrementoInternet}, ${incrementoAgua}`)
    


}