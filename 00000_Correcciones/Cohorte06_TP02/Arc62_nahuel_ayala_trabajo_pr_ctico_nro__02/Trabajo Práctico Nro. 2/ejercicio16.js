/*
    Ejercicio Nro. 16:
    El dueño de una concesionaria desea lanzar una promoción de venta de sus vehículos 0 km que tiene en STOCK. Para ello nos cuenta que tiene tres vehículos disponibles para la venta y el precio de los mismos es el siguiente:
        1) Amarok V6 (Oferta: 65.000.000)
        2) TAOS 53.000.000
        3) Polo Nuevo 47.000.000
    El Gerente nos indica se debería realizar una aplicación debe permitir a los interesados (clientes)
        1ro) Selecciona el Vehículo de interés
        2do) Que el cliente pueda ingresar el dinero disponible para la compra del vehículo, sabiendo que el dinero a entregar debe ser mayor al 30% del valor del vehículo y menor al importe total del mismo.
        3ro) El Sistema debe calcular la financiación del dinero restante a pagar, sabiendo que la diferencia a pagar sería equivalente al valor total del vehículo elegido menos el dinero a entregar; esa diferencia será financiada de la siguiente forma:

    12 cuotas - 9.9 % ANUAL
    24 cuotas - 22 % ANUAL
    36 cuotas - 33 % ANUAL
    Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el DOM y cargar los datos de entrada por medio de prompt.

*/

{
    let vehiculo = 0;
    vehiculo = Number(prompt(`Que vehículo Desea Comprar? - 1) Amarok V6 | 2) TAOS | 3) Polo Nuevo`));

    let amarok = 65000000;
    let taos = 53000000;
    let poloNuevo = 47000000;

    let dineroDisponible = Number(prompt(`Ingrese el Dinero Disponible para la Compra del Vehículo`));

    let minimoValorAceptado = 0; // 30% del valor del vehículo

    let restanteAPagar = 0;

    let financiamiento = 0; // Variable para las Cuotas

    let cuotas12 = 0;
    let cuotas24 = 0;
    let cuotas36 = 0;

    let totalAPagar = 0;

    let importeDeCuota = 0;

    let operacionCorrecta = true; // Bandera para definir un vehiculo válido
    let cuotaCorrecta = true; // Bandera para definir una cuota válida

    switch(vehiculo) // Aquí Elegimos el Vehiculo que Deseamos COMPRAR
    {
        case 1: // Amarok V6
        {
            console.log(`Vehiculo Elegido: Amarok V6`);

            minimoValorAceptado = (amarok*30)/100; // 30% del valor del vehiculo

            if(dineroDisponible >= minimoValorAceptado && dineroDisponible < amarok) // Si cumplimos con la condición de tener al menos el 30% del valor del vehiculo, entonces podemos calcular el valor de las cuotas.
            {
                console.log(`Entregado: $${dineroDisponible}`);

                restanteAPagar = amarok - dineroDisponible;

                console.log(`Restante: $${restanteAPagar}`);

                financiamiento = Number(prompt(`En cuantas cuotas desea financiar el resto? - 1) 12 Cuotas | 2) 24 Cuotas | 3) 36 Cuotas`));

                switch(financiamiento) // Elegimos la cantidad de cuotas con las que queremos financiar el vehiculo.
                {
                    case 1: // 12 Cuotas
                    {
                        cuotas12 = (restanteAPagar*9.9)/100;

                        totalAPagar = restanteAPagar + cuotas12;

                        importeDeCuota = totalAPagar/12;

                        console.log(`Financiamiento: 12 Cuotas de $${importeDeCuota} (9,9% ANUAL)`);
                        console.log(`Total a Pagar: $${totalAPagar}`);

                        cuotaCorrecta;

                        break;
                    }

                    case 2: // 24 Cuotas
                    {
                        cuotas24 = (restanteAPagar*22)/100;

                        totalAPagar = restanteAPagar + cuotas24;

                        importeDeCuota = totalAPagar/24;

                        console.log(`Financiamiento: 24 Cuotas de $${importeDeCuota} (22% ANUAL)`);
                        console.log(`Total a Pagar: $${totalAPagar}`);

                        cuotaCorrecta;

                        break;
                    }

                    case 3: // 36 Cuotas
                    {
                        cuotas36 = (restanteAPagar*33)/100;

                        totalAPagar = restanteAPagar + cuotas36;

                        importeDeCuota = totalAPagar/36;

                        console.log(`Financiamiento: 36 Cuotas de $${importeDeCuota} (33% ANUAL)`);
                        console.log(`Total a Pagar: $${totalAPagar}`);

                        cuotaCorrecta;

                        break;
                    }

                    default: // Cuotas NO Válidas.
                    {
                        console.log(`Valor de Cuota NO Válido. Por favor, intente nuevamente.`);

                        cuotaCorrecta = false;

                        break;
                    }
                }
            }
            else{ // Si no cumplimos la condición de tener al menos el 30% del valor total del vehiculo, entonces no podemos calcular las cuotas y cerramos la operación.
                console.log(`Dinero Disponible Insuficiente. Mínimo Valor de Entrega: $${minimoValorAceptado}`);
            }

            operacionCorrecta;

            break;
        }

        // _______________________________________________________ //

        case 2: // TAOS
        {
            console.log(`Vehiculo Elegido: TAOS`);

            minimoValorAceptado = (taos*30)/100; // 30% del valor del vehiculo

            if(dineroDisponible >= minimoValorAceptado && dineroDisponible < taos) // Si cumplimos con la condición de tener al menos el 30% del valor del vehiculo, entonces podemos calcular el valor de las cuotas.
            {
                console.log(`Entregado: $${dineroDisponible}`);

                restanteAPagar = taos - dineroDisponible;

                console.log(`Restante: $${restanteAPagar}`);

                financiamiento = Number(prompt(`En cuantas cuotas desea financiar el resto? - 1) 12 Cuotas | 2) 24 Cuotas | 3) 36 Cuotas`));

                switch(financiamiento) // Elegimos la cantidad de cuotas con las que queremos financiar el vehiculo.
                {
                    case 1: // 12 Cuotas
                    {
                        cuotas12 = (restanteAPagar*9.9)/100;

                        totalAPagar = restanteAPagar + cuotas12;

                        importeDeCuota = totalAPagar/12;

                        console.log(`Financiamiento: 12 Cuotas de $${importeDeCuota} (9,9% ANUAL)`);
                        console.log(`Total a Pagar: $${totalAPagar}`);

                        cuotaCorrecta;

                        break;
                    }

                    case 2: // 24 Cuotas
                    {
                        cuotas24 = (restanteAPagar*22)/100;

                        totalAPagar = restanteAPagar + cuotas24;

                        importeDeCuota = totalAPagar/24;

                        console.log(`Financiamiento: 24 Cuotas de $${importeDeCuota} (22% ANUAL)`);
                        console.log(`Total a Pagar: $${totalAPagar}`);

                        cuotaCorrecta;

                        break;
                    }

                    case 3: // 36 Cuotas
                    {
                        cuotas36 = (restanteAPagar*33)/100;

                        totalAPagar = restanteAPagar + cuotas36;

                        importeDeCuota = totalAPagar/36;

                        console.log(`Financiamiento: 36 Cuotas de $${importeDeCuota} (33% ANUAL)`);
                        console.log(`Total a Pagar: $${totalAPagar}`);

                        cuotaCorrecta;

                        break;
                    }

                    default: // Cuotas NO Válidas
                    {
                        console.log(`Valor de Cuota NO Válido. Por favor, intente nuevamente.`);

                        cuotaCorrecta = false;

                        break;
                    }
                }
            }
            else{ // Si no cumplimos la condición de tener al menos el 30% del valor total del vehiculo, entonces no podemos calcular las cuotas y cerramos la operación.
                console.log(`Dinero Disponible Insuficiente. Mínimo Valor de Entrega: $${minimoValorAceptado}`);
            }

            operacionCorrecta;

            break;
        }

        // _______________________________________________________ //

        case 3: // Polo Nuevo
        {
            console.log(`Vehiculo Elegido: Polo Nuevo`);

            minimoValorAceptado = (poloNuevo*30)/100; // 30% del valor del vehiculo

            if(dineroDisponible >= minimoValorAceptado && dineroDisponible < poloNuevo) // Si cumplimos con la condición de tener al menos el 30% del valor del vehiculo, entonces podemos calcular el valor de las cuotas.
            {
                console.log(`Entregado: $${dineroDisponible}`);

                restanteAPagar = poloNuevo - dineroDisponible;

                console.log(`Restante: $${restanteAPagar}`);

                financiamiento = Number(prompt(`En cuantas cuotas desea financiar el resto? - 1) 12 Cuotas | 2) 24 Cuotas | 3) 36 Cuotas`));

                switch(financiamiento) // Elegimos la cantidad de cuotas con las que queremos financiar el vehiculo.
                {
                    case 1: // 12 Cuotas
                    {
                        cuotas12 = (restanteAPagar*9.9)/100;

                        totalAPagar = restanteAPagar + cuotas12;

                        importeDeCuota = totalAPagar/12;

                        console.log(`Financiamiento: 12 Cuotas de $${importeDeCuota} (9,9% ANUAL)`);
                        console.log(`Total a Pagar: $${totalAPagar}`);

                        cuotaCorrecta;

                        break;
                    }

                    case 2: // 24 Cuotas
                    {
                        cuotas24 = (restanteAPagar*22)/100;

                        totalAPagar = restanteAPagar + cuotas24;

                        importeDeCuota = totalAPagar/24;

                        console.log(`Financiamiento: 24 Cuotas de $${importeDeCuota} (22% ANUAL)`);
                        console.log(`Total a Pagar: $${totalAPagar}`);

                        cuotaCorrecta;

                        break;
                    }

                    case 3: // 36 Cuotas
                    {
                        cuotas36 = (restanteAPagar*33)/100;

                        totalAPagar = restanteAPagar + cuotas36;

                        importeDeCuota = totalAPagar/36;

                        console.log(`Financiamiento: 36 Cuotas de $${importeDeCuota} (33% ANUAL)`);
                        console.log(`Total a Pagar: $${totalAPagar}`);

                        cuotaCorrecta;

                        break;
                    }

                    default: // Cuotas NO Válidas
                    {
                        console.log(`Valor de Cuota NO Válido. Por favor, intente nuevamente.`);

                        cuotaCorrecta = false;

                        break;
                    }
                }
            }
            else{ // Si no cumplimos la condición de tener al menos el 30% del valor total del vehiculo, entonces no podemos calcular las cuotas y cerramos la operación.
                console.log(`Dinero Disponible Insuficiente. Mínimo Valor de Entrega: $${minimoValorAceptado}`);
            }

            operacionCorrecta;

            break;
        }

        // _______________________________________________________ //

        default: // Vehículo NO Válido
        {
            console.log(`Vehículo NO Disponible. Por favor, elija una opción válida.`);

            operacionCorrecta = false;

            break;
        }
    }
}