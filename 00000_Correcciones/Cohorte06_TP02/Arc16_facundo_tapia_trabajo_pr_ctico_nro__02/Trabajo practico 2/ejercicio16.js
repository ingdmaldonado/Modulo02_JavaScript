/*El dueño de una concesionaria desea lanzar una promoción de venta de sus vehículos 0 km. que tiene en
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

    12 cuotas - 9.9 % ANUAl
    24 cuotas - 22 % ANUAL
    36 cuotas - 33 % ANUAL
Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el
DOM y cargar los datos de entrada por medio de prompt.
*/
{
let vehiculo = Number(prompt(`Seleccione el vehiculo de interes:
1) Amarok V6 (Oferta: 65.000.000)
2) Taos (53.000.000)
3) Polo Nuevo (47.000.000)`));



let precioVehiculo = 0;
let montoTotal = 0;
let montoCuota = 0;


switch (vehiculo){
    case 1:
    {
        precioVehiculo = 65000000;
        break;
    }
    case 2:
        {
            precioVehiculo = 53000000;
            break; 
        }
        case 3:
            {
                precioVehiculo = 47000000;
                break;
            }
            default:
                {
                    console.log(`Opcion no valida`);
                }
            }

        if (precioVehiculo > 0){
            let dineroDisponible = Number(prompt(`Ingrese el dinero disponible para la compra del vehiculo tiene que ser mayor al 30% del valor del vehiculo y menor al importe total del mismo`));

                    

            if (dineroDisponible > precioVehiculo * 0.3 && dineroDisponible <precioVehiculo){

                
                let diferencia = precioVehiculo - dineroDisponible;

                let opcionCuotas = Number(prompt(`Seleccione la cantidad de cuotas para financiar el dinero restante a pagar:
                    1) 12 cuotas - 9.9 % ANUAL
                    2) 24 cuotas - 22 % ANUAL
                    3) 36 cuotas - 33 % ANUAL`));

                
                        
                
            
                switch (opcionCuotas)
                {
                    case 1:
                        {
                            montoTotal = diferencia + (diferencia * 0.099);
                            montoCuota = montoTotal / 12;
                            break;
                        }
                        case 2:
                            {
                                montoTotal = diferencia + (diferencia * 0.22);
                                montoCuota = montoTotal / 24;
                                break;
                            }
                            case 3:
                                {
                                    montoTotal = diferencia + (diferencia * 0.33);
                                    montoCuota = montoTotal / 36;
                                    break;
                                }
                                default:
                                    {
                                        console.log(`Opcion no valida`)
                                    }
                                        
                
            }
                                        console.log(`Total a pagar: ${montoTotal}`);
                                        console.log(`Valor de cada cuota: ${montoCuota}`);
                }

                else{
                    console.log(`El dinero disponible no cumple con los requisitos para la compra del vehiculo`);
                }
            
            
            
            
            }
        }
        

