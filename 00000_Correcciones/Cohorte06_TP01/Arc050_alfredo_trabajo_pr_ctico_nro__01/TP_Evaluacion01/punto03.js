/*Ejercicio Nro. 03:
Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar.
El primer valor representará los gastos de energía (luz eléctrica), el segundo valor representará los gastos en
comunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio de agua
potable. Se estima que para el siguiente mes estos tres valores incrementarán en un 12,5%, 7% y 3%
respectivamente. El programa debe calcular el gasto futuro a pagar. */


{

    let luzElec=0;
    let internet=0;
    let agua=0;


    luzElec=Number(prompt(`Ingrese pago de luz`));
    internet=Number(prompt(`Ingrese pago de internet`));
    agua=Number(prompt(`Ingrese pago de agua`));


    let luzMesSig=0;
    let internetMesSig=0;
    let aguaMesSig=0;




    luzMesSig=(luzElec*12.5)/100;
    internetMesSig=(internet*7)/100;
    aguaMesSig=(agua*3)/100;



    let totalLuz=0;
    let totalInternet=0;
    let totalAgua=0;

    totalLuz=luzMesSig+luzElec;

    totalInternet=internetMesSig+internet;

    totalAgua=aguaMesSig+agua;






    console.log(`El pago de luz fue de: $ ${luzElec}, el aumento para el proximo mes es de 12,5% que son:$${luzMesSig} y el total a pagar del proximo mes son:$ ${totalLuz}`);

    console.log(`El pago de internet fue de: $ ${internet}, el aumento para el proximo mes es de 7%, que son: $${internetMesSig} y el total a pagar el proximo mes son: $${totalInternet}`);

     console.log(`El pago de agua fue de: $ ${agua}, el aumento para el proximo mes es de 3%, que son: $${aguaMesSig} y el total a pagar el proximo mes son: $${totalAgua}`);



}