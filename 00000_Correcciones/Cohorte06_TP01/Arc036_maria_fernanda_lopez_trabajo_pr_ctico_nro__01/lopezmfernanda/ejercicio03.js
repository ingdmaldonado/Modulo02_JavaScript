/* Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar.
El primer valor representará los gastos de energía (luz eléctrica), el segundo valor representará los gastos en
comunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio de agua
potable. Se estima que para el siguiente mes estos tres valores incrementarán en un 12,5%, 7% y 3%
respectivamente. El programa debe calcular el gasto futuro a pagar. */


{
   let servicioLuz= 0;
   servicioLuz= Number(prompt(`Ingrese gasto total de servicio de luz`));
   console.log(`Servicio de Luz`,servicioLuz);

   let servicioInternet= 0;
   servicioInternet= Number(prompt(`Ingrese gasto total de servicio de internet`));
   console.log(`Servicio de Internet`,servicioInternet);

   let servicioAgua= 0;
   servicioAgua= Number(prompt(`Ingrese gasto total de servicio de agua `));
   console.log(`Servicio de Agua`, servicioAgua);


   let incrementoLuz=0;
   incrementoLuz= (servicioLuz * 12.5)/100;
   console.log(`El incremento del servicio de Luz será de $ ${incrementoLuz}`);

   let incrementoInternet= 0;
   incrementoInternet= (servicioInternet * 7 )/100;
   console.log(`El incremento del servicio de Internet será de $ ${incrementoInternet}`);

   let incrementoAgua= 0;
   incrementoAgua= (servicioAgua * 3)/100;
   console.log(`El incremento del servicio de Agua serà de $${incrementoAgua}`);

   let totalAPagar= 0;

   totalAPagar= (servicioLuz + incrementoLuz) + ( servicioInternet + incrementoInternet) + (servicioAgua + incrementoAgua);

   console.log(`El total a pagar el mes entrante serà de $ ${totalAPagar}`);




}