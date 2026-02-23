/* 
Ejercicio Nro. 5:
Realizar un programa que permita ingresar los totales 
que una persona pagó por sus servicios en su hogar. 
El primer valor representará los gastos de energía 
(luz eléctrica), 
el segundo valor representará 
los gastos en comunicación (conectividad a internet), 
el tercer valor representará 
los gastos ocasionados por el servicio de agua potable. 
Se estima que para el siguiente mes 
estos tres valores incrementarán en
 un 12,5%, 7% y 3% respectivamente.
  El programa debe calcular el gasto futuro a pagar.
*/

{
  

    let costoDeEnergia = 0 // declaro e inicializo el costo de energia.

    let costoDeConectividad = 0 // declaro e inicializo el costo de conectividad.

    let costoDeAgua = 0 // declaro e inicializo el costo de agua

    /* a todas estas variables las vamos a ingresar por teclado */

    costoDeEnergia = Number(prompt(`Sr. Usuario Ingrese su costo de energia`));

    console.log(costoDeEnergia);

    costoDeConectividad = Number(prompt("Sr. Usuario Ingrese su costo de conectividad"));

    console.log(costoDeConectividad);

    costoDeAgua = Number(prompt("Sr. Usuario Ingrese su costo de agua"));

    console.log(costoDeAgua);

    /* Voy a realizar los calculos de incremento */

    let incrementoDeEnergia = 0 ; 
    let incrementoDeConectividad = 0;
    let incrementoDeAgua = 0;

    incrementoDeEnergia = (costoDeEnergia * 12.5)/100;
    incrementoDeConectividad = (costoDeConectividad * 7)/100;
    incrementoDeAgua = (costoDeAgua * 3)/100;

    console.log(`incremento energia ${incrementoDeEnergia} incremento de conectividad ${incrementoDeConectividad} incremento agua ${incrementoDeAgua}`);


    /* voy a calcular los totales */

    let costoDeEnergiaConIncremento = 0;
    costoDeEnergiaConIncremento = costoDeEnergia + incrementoDeEnergia;

    let costoDeConectividadConIncremento = 0;
    costoDeConectividadConIncremento = costoDeConectividad + incrementoDeConectividad;

    let costoDeAguaConIncremento = 0;
    costoDeAguaConIncremento = costoDeAgua + incrementoDeAgua;

    console.log(`Energia ${costoDeEnergiaConIncremento} Conectividad ${costoDeConectividadConIncremento} Agua ${costoDeAguaConIncremento}`);

    let costoTotalEstimado = 0;

    costoTotalEstimado = costoDeEnergiaConIncremento + costoDeConectividadConIncremento + costoDeAguaConIncremento;

    console.log(`Costo Total Estimado Futuro ${costoTotalEstimado}`);

}