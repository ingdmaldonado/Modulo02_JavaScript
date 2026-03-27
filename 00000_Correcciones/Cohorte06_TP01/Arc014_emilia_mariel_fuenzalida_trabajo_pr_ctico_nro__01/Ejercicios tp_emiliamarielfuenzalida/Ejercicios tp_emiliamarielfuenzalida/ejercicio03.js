/*Ejercicio Nro. 03: 
Realizar un programa que permita ingresar los totales
que una persona pagó por sus servicios en su hogar. 
-1er valor representará los gastos de energía (luz eléctrica),
-2do valor representará los gastos en comunicación (conectividad a internet), 
-3er valor representará los gastos ocasionados por el servicio de agua potable. 

*Se estima que para el siguiente mes estos 
tres valores incrementarán en un 12,5%, 7% y 3% 
respectivamente. 
El programa debe calcular el gasto futuro a pagar.
 */
{
    let gastoServicios = 0;
    let servicios = 0;
    let incremento = 0;
    let gastoTotal = 0;

    servicios = Number(prompt(`Seleccionar servicio a pagar el próximo mes: 1-Luz 2-Conexión a internet 3-Agua potable`));

    switch (servicios)
    {
        case 1: /*LUZ*/
        {
            gastoServicios = Number(prompt(`Ingrese el monto a pagar:`));

            incremento = (gastoServicios * 12.5)/100;
            gastoTotal = gastoServicios + incremento;

            console.log(`Servicio de Luz. Monto a pagar: $${gastoTotal}`);
            break;
        }
        case 2:/*Conexion a internet*/
        {
            gastoServicios = Number(prompt(`Ingrese el monto a pagar:`));

            incremento = (gastoServicios * 7)/100;
            gastoTotal = gastoServicios + incremento;

            console.log(`Servicio Conexión a internet. Monto a pagar: $${gastoTotal}`);
            break;
        }
        case 3:/*AGUA POTABLE*/
        {
            gastoServicios = Number(prompt(`Ingrese el monto a pagar:`));

            incremento = (gastoServicios * 3)/100;
            gastoTotal = gastoServicios + incremento;

            console.log(`Servicio de Agua Potable. Monto a pagar: $${gastoTotal}`);
            break;
        }
        default:
        {
            console.log(`Elegir una opcion valida`);
            break;
        }

    }

    
}