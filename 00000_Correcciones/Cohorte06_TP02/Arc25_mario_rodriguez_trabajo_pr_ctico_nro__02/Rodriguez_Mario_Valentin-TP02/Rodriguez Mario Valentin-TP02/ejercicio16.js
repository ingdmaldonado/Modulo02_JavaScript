/*
Ejercicio Nro. 16: 

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

*/

{
    // inicializacion 

    let amarokV6 = 65000000;
    let taos = 53000000;
    let poloNuevo = 47000000;

    let limiteMenorAmarokV6 = amarokV6 * 0.30;
    let limiteMenorTaos = taos * 0.30;
    let limiteMenorPoloNuevo = poloNuevo * 0.30;

    let saldo = 0;

    // parte 1 - seleccionar el vehiculo de interes

    let vehiculoSeleccionado = 0;
    vehiculoSeleccionado = Number(prompt(`Seleccione el vehiculo de interes: 1 - Amarok V6 ($65.000.000); 2 - TAOS ($53.000.000) ; 3 - Polo Nuevo ($47.000.000)`));

    // parte 2 - ingresar el dinero disponible

    let dineroDisponible = 0;
    dineroDisponible = Number(prompt(`Ingrese el dinereo disponible para la compra del vehiculo:`));

    // compruebo si cumple con la condicion de la entrega de dinero 

    if((vehiculoSeleccionado === 1) && (dineroDisponible > limiteMenorAmarokV6) && (dineroDisponible < amarokV6)){
        saldo = amarokV6 - dineroDisponible;

        console.log(`Cumple con la condicion  de la entrega del dinero correctamente`);
    } 
    else if((vehiculoSeleccionado === 2) && (dineroDisponible > limiteMenorTaos) && (dineroDisponible < taos)){
        saldo = taos - dineroDisponible;

        console.log(`Cumple con la condicion  de la entrega del dinero correctamente`);
    } 
    else if((vehiculoSeleccionado === 3) && (dineroDisponible > limiteMenorPoloNuevo) && (dineroDisponible < poloNuevo)){
        saldo = poloNuevo - dineroDisponible;

        console.log(`Cumple con la condicion  de la entrega del dinero correctamente`);
    } 
    else {
        console.log(`Usted no cumple con los requisitos de la entrega de dinero, el dinero a entregar debe ser mayor al 30% del valor del vehiculo y menor al importe total del mismo.`);
    }

    // parte 3 - financiacion del dinero restante a pagar
    if(saldo !== 0){
        
        let cuotas = 0;
        cuotas = Number(prompt(`Seleccione las cuotas: 12 cuotas - 9.9% ANUAL ; 24 cuotas - 22% ANUAL ; 36 cuotas - 33% ANUAL`));

        let totalFinanciacion = 0;
        let valorCuotas = 0;

        if(cuotas === 12){
            totalFinanciacion = saldo + (saldo * 0.099);

            console.log(`Usted selecciono 12 cuotas - 9.9% ANUAL`);
        }
        else if (cuotas === 24){
            totalFinanciacion = saldo + (saldo * 0.22 * 2);

            console.log(`Usted selecciono 24 cuotas - 22% ANUAL`);
        }
        else if(cuotas === 36){
            totalFinanciacion = saldo + (saldo * 0.33 * 3);

            console.log(`Usted selecciono 36 cuotas - 33% ANUAL`);
        }
        else {
            console.log(`Opcion incorrecta de cuotas, intente nuevamente.`);
        }

        if(cuotas === 12 || cuotas === 24 || cuotas === 36){
            valorCuotas = totalFinanciacion / cuotas;

            console.log(`El valor de las cuotas son de; ${valorCuotas}`);
        }

    }
}