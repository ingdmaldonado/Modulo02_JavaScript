

/* 
Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar.
El primer valor representará los gastos de energía (luz eléctrica), el segundo valor representará los gastos en
comunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio de agua
potable. Se estima que para el siguiente mes estos tres valores incrementarán en un 12,5%, 7% y 3%
respectivamente. El programa debe calcular el gasto futuro a pagar. 
*/

{
    let luz = 0;
    let internet = 0;
    let agua = 0;
    
    luz = Number(prompt("Ingrese el valor del servicio de luz a pagar"));
    console.log("El valor ingresado del servicio es", luz);
    
    internet = Number(prompt("Ingrese el valor del servicio de internet a pagar"));
    console.log("El valor ingresado del servicio es", internet);
    
    agua = Number(prompt("Ingrese el valor del servicio de agua a pagar"));
    console.log("El valor ingresado del servicio es", agua);
    
    totalApagar = luz + internet + agua;
    
    console.log( `El total de los servicios a pagar es ${totalApagar}`);
    
    incrementoLuz = (luz * 12.5) /100;
    totalLuzConIncremento = luz + incrementoLuz;
    console.log(`El total a pagar el servicio de luz con incremento el proximo mes serian de ${totalLuzConIncremento}`);
    
    incrementoInternet = (internet * 7) /100;
    totalInternetConIncremento = internet + incrementoInternet;
    console.log(`El total a pagar el servicio de internet con incremento el proximo mes serian de ${totalInternetConIncremento}`);

    incrementoAgua = (agua * 3)/100;
    totalIncrementoAgua = agua + incrementoAgua;
    console.log(`El total a pagar el servicio de agua con incremento el proximo mes serian de ${totalIncrementoAgua}`);


    totalProximoMes = totalLuzConIncremento + totalInternetConIncremento + totalIncrementoAgua;
    console.log(`El total de los servicios a pagar el proximo mes con incremento serian de ${totalProximoMes}`);
}
