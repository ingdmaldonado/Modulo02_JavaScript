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
 
Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el 
DOM y cargar los datos de entrada por medio de prompt.

*/


{
    // constantes
    const AmarokV6 = 65000000;
    const TAOS = 53000000;
    const PoloNuevo = 47000000;

    let continuarCargando = `si`;
    let seleccionarVehiculo = 0;
    let dineroEntrega = 0;
    let dineroMinimoEntrega = 0;
    let dineroRestanteAPAgar = 0;
    let interesAnual = 0;
    let cuotasMensuales = 0;

    // resetear al final del ciclo
    let vehiculoValido = true;
    let dineroValido = false;
    


    
    while (continuarCargando === `si` || continuarCargando === `SI`) {

        // ingresar opción de vehículo
        seleccionarVehiculo = Number(prompt(`Ingrese la opcioón del vehículo interesado, 1 Amarok V6 (Oferta: 65.000.000) - 2 TAOS 53.000.000 - 3 Polo Nuevo 47.000.000`));
    
        switch(seleccionarVehiculo)
        {
            case 1: {  // Amarok V6 (Oferta: 65.000.000)

                dineroMinimoEntrega = (AmarokV6 * 30) / 100;

                while (dineroValido != true) {

                    dineroEntrega = Number(prompt(`Ingrese dinero disponible para la compra del vehículo: `));

                    if ((dineroEntrega >= dineroMinimoEntrega) && (dineroEntrega <= AmarokV6)) {
                        
                        dineroRestanteAPAgar = AmarokV6 - dineroEntrega;
                        console.log(`VEHÍCULO - AMAROK V6`);
                        dineroValido = true;

                    } else {
                        
                        alert(`Error!, Ingrese un monto de dinero disponible entre $${dineroMinimoEntrega} y $${AmarokV6} del valor de la Amarok V6`);
                        console.log(`Error!, Ingrese un monto de dinero disponible entre $${dineroMinimoEntrega} y $${AmarokV6} del valor de la Amarok V6`);
                    }
                }
                break;

            }
            case 2:{ // TAOS 53.000.000
            
                dineroMinimoEntrega = (TAOS * 30) / 100;

                while (dineroValido != true) {

                    dineroEntrega = Number(prompt(`Ingrese dinero disponible para la compra del vehículo: `));

                    if ((dineroEntrega >= dineroMinimoEntrega) && (dineroEntrega <= TAOS)) {
                        
                        dineroRestanteAPAgar = TAOS - dineroEntrega;
                        console.log(`VEHÍCULO - TAOS`);
                        dineroValido = true;

                    } else {
                        
                        alert(`Error!, Ingrese un monto de dinero disponible entre $${dineroMinimoEntrega} y $${TAOS} del valor de la TAOS`);
                        console.log(`Error!, Ingrese un monto de dinero disponible entre $${dineroMinimoEntrega} y $${TAOS} del valor de la TAOS`);
                    }
                }
                break;

            }
            case 3:{ // Polo Nuevo 47.000.000
                
                dineroMinimoEntrega = (PoloNuevo * 30) / 100;

                while (dineroValido != true) {

                    dineroEntrega = Number(prompt(`Ingrese dinero disponible para la compra del vehículo: `));

                    if ((dineroEntrega >= dineroMinimoEntrega) && (dineroEntrega <= PoloNuevo)) {
                        
                        dineroRestanteAPAgar = PoloNuevo - dineroEntrega;
                        console.log(`VEHÍCULO - POLO NUEVO`);
                        dineroValido = true;

                    } else {
                        
                        alert(`Error!, Ingrese un monto de dinero disponible entre $${dineroMinimoEntrega} y $${PoloNuevo} del valor de la Polo Nuevo`);
                    }
                }
                break;

            }
            default:{
                alert(`Error!, ingrese nuevamente un valor válido!`)
                vehiculoValido = false;
                break;
            }
        }
    

        if (vehiculoValido) {
            
            console.log(`Entregando $${dineroEntrega}, la diferencia puede ser financiada de la siguiente manera:`);

            // 12 cuotas - 9.9 % ANUAL 
            interesAnual = (dineroRestanteAPAgar * 9.9) / 100
            totalPagar = dineroEntrega+dineroRestanteAPAgar+interesAnual;
            cuotasMensuales = (dineroRestanteAPAgar + interesAnual)/12;
            console.log(`FINANCIADO EN 12 CUOTAS`);
            console.log(`Interés aplicado - 9.9%`);
            console.log(`Total a pagar: $${totalPagar}`);
            console.log(`Valor de cada cuota: $${cuotasMensuales}`);

            // 24 cuotas - 22 % ANUAL
            interesAnual = (dineroRestanteAPAgar * 22) / 100
            totalPagar = dineroEntrega+dineroRestanteAPAgar+interesAnual;
            cuotasMensuales = (dineroRestanteAPAgar + interesAnual)/24;
            console.log(`FINANCIADO EN 24 CUOTAS`);
            console.log(`Interés aplicado - 22%`);
            console.log(`Total a pagar: $${totalPagar}`);
            console.log(`Valor de cada cuota: $${cuotasMensuales}`);

            // 36 cuotas - 33 % ANUAL
            interesAnual = (dineroRestanteAPAgar * 33) / 100
            totalPagar = dineroEntrega+dineroRestanteAPAgar+interesAnual;
            cuotasMensuales = (dineroRestanteAPAgar + interesAnual)/36;
            console.log(`FINANCIADO EN 36 CUOTAS`);
            console.log(`Interés aplicado - 33%`);
            console.log(`Total a pagar: $${totalPagar}`);
            console.log(`Valor de cada cuota: $${cuotasMensuales}`);
        }
        
        vehiculoValido = true
        dineroValido = false;

        // preguntar si quiere ver financiamiento de otro vehiculo
        continuarCargando = prompt(`Necesita ver financiamiento de otro vehículo? (SI/NO)`);
    }

}