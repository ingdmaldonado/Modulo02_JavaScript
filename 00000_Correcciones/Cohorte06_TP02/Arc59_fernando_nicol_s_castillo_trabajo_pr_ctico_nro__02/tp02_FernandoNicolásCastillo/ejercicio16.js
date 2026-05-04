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
*/
{
let vehiculo = 0;
let precioVehiculo = 0 ;
let precioAmarok = 65000000;
let precioTaos = 53000000;
let precioPoloNuevo = 47000000;
let entrega = 0;
let diferenciaAbonar = 0;
let plan = 0;
let cuotas = 0;
let interes = 0;
let valorCuota = 0;
let precioCuota = 0;
let totalPagado = 0;
 
vehiculo = Number(prompt(`¿Que vehiculo quiere comprar?: (1)AMAROK, (2)TAOS, (3) POLO NUEVO`));

switch (vehiculo)
    {
        case 1: 
            {
                console.log (`Seleccionó AMAROK V6 $${precioAmarok}`);
                precioVehiculo = precioAmarok;
                entrega = Number(prompt(`Entrega:`));
                    if ((entrega >= precioAmarok * 0.3)&&(entrega < precioAmarok))
                    {
                     diferenciaAbonar = (precioAmarok - entrega);
                     console.log (`Diferencia a Financiar:$${diferenciaAbonar}`);
                    } 
                    else
                    {
                    console.log (`Ingrese un Valor Permitido (mayor al 30% del valor del vahículo y menor al total del mismo)`);
                    }                      
                break;
            };
        case 2: 
            {
                console.log (`Seleccionó TAOS $${precioTaos}`);
                precioVehiculo = precioTaos;
                entrega = Number(prompt(`Entrega:`));
                    if ((entrega >= precioTaos * 0.3)&&(entrega < precioTaos))
                    {
                     diferenciaAbonar = (precioTaos - entrega);
                     console.log (`Diferencia a Financiar:$${diferenciaAbonar}`);
                    } 
                    else
                    {
                    console.log (`Ingrese un Valor Permitido (mayor al 30% del valor del vahículo y menor al total del mismo)`);
                    }                      
                break;
            };
        case 3: 
            {
                console.log (`Seleccionó POLO NUEVO $${precioPoloNuevo}`);
                precioVehiculo = precioPoloNuevo;
                entrega = Number(prompt(`Entrega:`));
                    if ((entrega >= precioPoloNuevo * 0.3)&&(entrega < precioPoloNuevo))
                    {
                     diferenciaAbonar = (precioPoloNuevo - entrega);
                     console.log (`Diferencia a Financiar:$${diferenciaAbonar}`);
                    } 
                    else
                    {
                    console.log (`Ingrese un Valor Permitido (mayor al 30% del valor del vahículo y menor al total del mismo)`);
                    }                      
                break;
            };
        default:
            {
                console.log (`Ingrese un modelo válido`);
                break;
            }
    }
 plan = Number(prompt(`¿Seleccione un plan de financiacion?: (1)12 Cuotas, (2)24 Cuotas, (3)36 Cuotas`));
switch (plan)
    {
        case 1:
        cuotas = 12;
        interes = 0.099;
        valorCuota = (diferenciaAbonar/cuotas);
        precioCuota = (valorCuota * (1+interes));
        console.log(`Cuotas seleccionadas:${cuotas}, intereses:${interes}, valor cuotas:${precioCuota}, valor del vehículo: ${precioVehiculo}, precio financiado total:${precioVehiculo + (precioCuota*12)} `)
        break;

        case 2:
        cuotas = 24;
        interes = 0.44;
        valorCuota = (diferenciaAbonar/cuotas);
        precioCuota = (valorCuota * (1+interes));
        console.log(`Cuotas seleccionadas:${cuotas}, intereses:${interes}, valor cuotas:${precioCuota}, valor del vehículo: ${precioVehiculo}, precio financiado total:${precioVehiculo + (precioCuota*24)} `)
        break;

        case 3:
        cuotas = 36;
        interes = 0.99;
        valorCuota = (diferenciaAbonar/cuotas);
        precioCuota = (valorCuota * (1+interes));
        console.log(`Cuotas seleccionadas:${cuotas}, intereses:${interes}, valor cuotas:${precioCuota}, valor del vehículo: ${precioVehiculo}, precio financiado total:${precioVehiculo + (precioCuota*36)} `)
        break;

        default:
            {
            console.log (`Ingrese un numero de cuotas válido`);
                break;
            }
    }
    





}
