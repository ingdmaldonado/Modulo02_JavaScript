/*Ejercicio Nro. 16:
El dueño de una concesionaria desea lanzar una promoción de venta de sus vehículos 0 km. que tiene en
STOCK. Para ello nos cuenta que tiene tres vehículos disponibles para la venta
y el precio de los mismos es el siguiente:
1) Amarok V6 (Oferta: 65.000.000)
2) TAOS 53.000.000
3) Polo Nuevo 47.000.000
El Gerente nos indica se debería realizar una aplicación debe permitir a los interesados (clientes)
1ro) Selecciona el Vehículo de interés
2do) Que el cliente pueda ingresar el dinero disponible para la compra del vehículo, sabiendo que el
dinero a entregar debe ser mayor al 30% del valor del vehículo y menor al importe total del mismo.
3ro) El Sistema debe calcular la financiación del dinero restante a pagar, sabiendo que la diferencia a
pagar sería equivalente al valor total del vehículo elegido menos el dinero a entregar; esa diferencia será
financiada de la siguiente forma:
12 cuotas - 9.9 % ANUAL
24 cuotas - 22 % ANUAL
36 cuotas - 33 % ANUAL*/

{
    let tipoDeVehiculo = 0;
    let precioAmarokV6 = 65000000;
    let precioTaos = 53000000;
    let precioPoloNuevo = 47000000;
    let minimoDeEntrega = 0;
    let precioVehiculo = 0;
    let diferenciaPagar = 0;
    let valorCuotas = 0;
    let cantidadCuotas = 0;
    let totalInteresCuotas = 0;
    let dineroDisponible = 0;


    tipoDeVehiculo = Number(prompt(`Ingrese el tipo de vehiculo que desea comprar: 1- Amarok V6, 2- TAOS, 3- Polo Nuevo`));

     switch (tipoDeVehiculo) {
    case 1:
        precioVehiculo = precioAmarokV6; 
        minimoDeEntrega = precioAmarokV6 * 30 / 100;
        break;
    case 2:
        precioVehiculo = precioTaos;
        minimoDeEntrega = precioTaos * 30 / 100;
        break;
    case 3:
        precioVehiculo = precioPoloNuevo;
        minimoDeEntrega = precioPoloNuevo * 30 / 100;
        break;
    default:
        console.log(`Ingresó un número equivocado`);
        break;
}
    
    dineroDisponible = Number(prompt(`Ingrese el dinero disponible para la compra del vehículo (el dinero a entregar debe ser mayor al 30% del valor del vehículo y menor al importe total del mismo)`));
    while ((dineroDisponible <= minimoDeEntrega) || (dineroDisponible >= precioVehiculo)) {

        dineroDisponible = Number(prompt(`Ingrese el dinero disponible para la compra del vehículo (el dinero a entregar debe ser mayor al 30% del valor del vehículo y menor al importe total del mismo)`));

        
    }
    
    diferenciaPagar = precioVehiculo - dineroDisponible;

    console.log(`diferencia a pagar ${diferenciaPagar}`);
    
    cantidadCuotas = Number(prompt(`Ingrese la cantidad de cuotas para financiar el dinero restante a pagar: 1) 12  2) 24 3) 36`));
    switch (cantidadCuotas) {
        case 1:
            totalInteresCuotas = diferenciaPagar + (diferenciaPagar * 9.9 / 100);
             valorCuotas = totalInteresCuotas / 12;
            console.log(`Valor de cada cuota: ${valorCuotas}`);
            break;
        case 2:
            totalInteresCuotas = diferenciaPagar + (diferenciaPagar * 22 / 100);
            valorCuotas = totalInteresCuotas / 24;
            console.log(`Valor de cada cuota: ${valorCuotas}`);
            break;
        case 3:
            totalInteresCuotas = diferenciaPagar + (diferenciaPagar * 33 / 100);
            valorCuotas = totalInteresCuotas / 36;
            console.log(`Valor de cada cuota: ${valorCuotas}`);
            break;
        default: console.log(`ingreso un numero equivocado`);
    }
}