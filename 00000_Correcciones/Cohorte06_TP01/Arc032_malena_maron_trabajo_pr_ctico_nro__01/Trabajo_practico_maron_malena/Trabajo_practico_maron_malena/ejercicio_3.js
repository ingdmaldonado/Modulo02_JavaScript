/*Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar. 
El primer valor representará los gastos de energía (luz eléctrica), el segundo valor representará los gastos en 
comunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio de agua 
potable. Se estima que para el siguiente mes estos tres valores incrementarán en un 12,5%, 7% y 3% 
respectivamente. El programa debe calcular el gasto futuro a pagar.*/

{
    let luz = 0;
    let internet = 0;
    let agua = 0;
    let totalAPagar1=0;
    let totalAPagar2=0;
    let totalAPagar3=0;
    incremento1= 0;
    incremento2= 0;
    incremento3= 0;


    luz = Number(prompt`Ingrese importe de luz`);
    internet = Number(prompt `Ingrese importe de internet`);
    agua = Number(prompt`Ingrese importe de agua`);
    incremento1= (luz * 12.5)/100;
    incremento2= (internet * 7)/100;
    incremento3= (agua * 3)/100;
    totalAPagar1= luz + incremento1;
    totalAPagar2= internet + incremento2;
    totalAPagar3= agua + incremento3

  


    console.log(`El importe de luz :${luz} - El incremento es de: ${incremento1}  Total a pagar = ${totalAPagar1}`);
    console.log(`El importe de internet: ${internet} - El incremento es de :${incremento2} Total a pagar = ${totalAPagar2} `);
    console.log(`El importe de agua :${agua} - El incremento es de ${incremento3}  Total a pagar = ${totalAPagar3}`);



}