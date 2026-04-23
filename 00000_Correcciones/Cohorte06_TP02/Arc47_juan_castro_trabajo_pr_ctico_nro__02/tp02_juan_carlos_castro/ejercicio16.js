/* 

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
    36 cuotas - 33 % ANUAL 
 
Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el 
DOM y cargar los datos de entrada por medio de prompt.

*/

{

    let preciovehiculo = 0;
    let tipoVehiculo = 0;
    let dineroDisponible = 0;
    let minimoEntrega = 0;
    let diferenciaAPagar = 0;
    let cantidadCuotas = 0;
    let totalAPagar = 0;
    let valorCuota = 0;


    tipoVehiculo = Number(prompt(`Elija el tipo de vehiculo: 1-Amarok(65.000.000) 2-TAOS(53.000.000) 3-Polo(47.000.000)`));

    switch (tipoVehiculo) {
        case 1:
            preciovehiculo = 65000000;
            minimoEntrega = preciovehiculo * 0.3;
            break;
        case 2:
            preciovehiculo = 53000000;
            minimoEntrega = preciovehiculo * 0.3;
            break;
        case 3:
            preciovehiculo = 47000000;
            minimoEntrega = preciovehiculo * 0.3;
            break;
        default:
            console.log(`Elija una opcion correcta.`);
            break;
    }

    dineroDisponible = Number(prompt(`Ingrese su dinero disponible para la compra del vehiculo (el dinero a entregar debe ser mayor al 30% del valor del vehículo y menor al importe total del mismo.)`));

    while (dineroDisponible <= minimoEntrega || dineroDisponible >= preciovehiculo) {

        dineroDisponible = Number(prompt(`Ingrese su dinero disponible para la compra del vehiculo (el dinero a entregar debe ser mayor al 30% del valor del vehículo y menor al importe total del mismo.)`));

    }

    diferenciaAPagar = preciovehiculo - dineroDisponible;

    cantidadCuotas = prompt(`Cuantas cuotas desea pagar? a-12 cuotas b-24 cuotas c-36 cuotas`)

    switch (cantidadCuotas) {
        case "a":
            totalAPagar = diferenciaAPagar + (diferenciaAPagar * 9.9 / 100);
            valorCuota = totalAPagar / 12;
            cantidadCuotas = 12;
            break;
        case "b":
            totalAPagar = diferenciaAPagar + (diferenciaAPagar * 22 / 100);
            valorCuota = totalAPagar / 24;
            cantidadCuotas = 24;
            break;
        case "c":
            totalAPagar = diferenciaAPagar + (diferenciaAPagar * 33 / 100);
            valorCuota = totalAPagar / 36;
            cantidadCuotas = 36;
            break;
        default:
            console.log(`Elija una opcion correcta.`);
            break;
    }

    console.log(`El total a pagar es: ${totalAPagar}.`);
    console.log(`La cantidad de cuotas elegidas es: ${cantidadCuotas}`);    
    console.log(`El valor de la cuota es: ${valorCuota}.`);

}