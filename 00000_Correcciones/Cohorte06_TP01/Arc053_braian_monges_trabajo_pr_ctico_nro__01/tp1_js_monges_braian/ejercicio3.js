/*Ejercicio Nro. 03: 
Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar. 
El primer valor representará los gastos de energía (luz eléctrica), el segundo valor representará los gastos en 
comunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio de agua 
potable. Se estima que para el siguiente mes estos tres valores incrementarán en un 12,5%, 7% y 3% 
respectivamente. El programa debe calcular el gasto futuro a pagar. */

{
    // inicializacion
    let luz = 0;
    let internet = 0;
    let agua = 0;
    let totalAPagar = 0;

    luz = Number(prompt(`ingrese total de luz`));
    internet = Number(prompt(`ingrese total de internet`));
    agua = Number(prompt(`ingrese total de agua`));

    let luzFuturo = (luz * 12,5)/100;
    let internetFuturo = (internet * 7)/100;
    let aguaFuturo = (agua * 3)/100;

    totalAPagar = luzFuturo + internetFuturo + aguaFuturo + luz + internet + agua;
    console.log(`total a pagar: ${totalAPagar}`)

    
    
}