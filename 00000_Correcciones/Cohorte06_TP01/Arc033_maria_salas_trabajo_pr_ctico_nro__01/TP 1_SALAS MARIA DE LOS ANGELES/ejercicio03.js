/*
Ejercicio Nro. 03: 
Realizar un programa que permita ingresar los totales que una persona pagó por sus servicios en su hogar. 
El primer valor representará los gastos de energía (luz eléctrica), el segundo valor representará los gastos en 
comunicación (conectividad a internet), el tercer valor representará los gastos ocasionados por el servicio de agua 
potable. Se estima que para el siguiente mes estos tres valores incrementarán en un 12,5%, 7% y 3% 
respectivamente. El programa debe calcular el gasto futuro a pagar.
 */

{
    let servicioDeLuz = 0;
    let servicioDeComunicacion = 0;
    let servicioDeAgua = 0;

    servicioDeLuz = Number(prompt(`ingrese el monto referido al servicio de luz eléctrica`))
    servicioDeComunicacion = Number(prompt(`ingrese el monto referido al servicio de comunicación`))
    servicioDeAgua = Number(prompt(`ingrese el monto referido al servicio de agua potable`))

    let aumentoServicioLuz = (servicioDeLuz*12.5)/100;
    let aumentoServicioComunicacion = (servicioDeComunicacion*7)/100;
    let aumentoServicioAgua = (servicioDeAgua*3)/100;

    let totalAPagarLuz = servicioDeLuz + aumentoServicioLuz;
    let totalAPagarComunicacion = servicioDeComunicacion + aumentoServicioComunicacion;
    let totalAPagarAgua = servicioDeAgua + aumentoServicioAgua;

    console.log(`cada servicio tuve un incremento de:
                  servicio de luz: ${aumentoServicioLuz} 
                  servicio de comunicación: ${aumentoServicioComunicacion}
                  servicio de Agua potable: ${aumentoServicioAgua}`)
                  
    console.log(`el total a pagar de cada servicio es:
                  servicio de luz: ${totalAPagarLuz} 
                  servicio de comunicación: ${totalAPagarComunicacion}
                  servicio de Agua potable: ${totalAPagarAgua}`)
    

}