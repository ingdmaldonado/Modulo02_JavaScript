/*
    Ejercicio Nro. 16:
    El dueño de una concesionaria desea lanzar una promoción de venta de sus vehículos 0 km. que tiene en 
    STOCK. Para ello nos cuenta que tiene tres vehículos disponibles para la venta y el precio de los 
    mismos es el siguiente:

        1) Amarok V6 (Oferta: 65.000.000)
        2) TAOS 53.000.000
        3) Polo Nuevo 47.000.000

    El Gerente nos indica se debería realizar una aplicación debe permitir a los interesados (clientes)

    1ro) Selecciona el Vehículo de interés

    2do) Que el cliente pueda ingresar el dinero disponible para la compra del vehículo, sabiendo que el 
        dinero a entregar debe ser mayor al 30% del valor del vehículo y menor al importe total del mismo.

    3ro) El Sistema debe calcular la financiación del dinero restante a pagar, sabiendo que la diferencia a 
        pagar sería equivalente al valor total del vehículo elegido menos el dinero a entregar; esa 
        diferencia será financiada de la siguiente forma:

        12 cuotas - 9.9 % ANUAL
        24 cuotas - 22 % ANUAL
        36 cuotas - 33 % ANUAL

    Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción 
    con el DOM y cargar los datos de entrada por medio de prompt.
*/

{
    let vehiculo = 0;
    let financiacion = 0;
    let transaccion = true;
    let dineroDisponibleCliente = 0;
    let valorPorcentajeMinimo = 0;
    let valorVehiculo = 0;
    let valorRestanteVehiculo = 0;

    let porcentajeFinanciacion = 0;
    let interesTotal = 0;
    let mesesPago = 0;
    let montoTotalPagar = 0;
    let valorCuotas = 0;

    let tipoVehiculo;
    let opcionFinanciacion;

    //INICIO DE LA TRANSACCION
    while( transaccion )
    {
        vehiculo = Number(prompt(`Seleccione un vehiculo de su interes: 1- Amarok V6 (Oferta: $65.000.000); 2- TAOS $53.000.000; 3- Polo Nuevo $47.000.000`));
        
        //Validamos si selecciono el vehiculo valido
        if( (vehiculo === 1)||(vehiculo === 2)||(vehiculo === 3) )
        {

            //CLINETE INGRESA EL MONTO QUE DISPONE PARA LA TRANSACCION
            while( transaccion )
            {
                dineroDisponibleCliente = Number(prompt(`Ingrese el monto de entrega para el vehiculo:`));
                switch(vehiculo)
                {
                    case 1:{
                        valorVehiculo = 65000000;
                        tipoVehiculo = `Ud. seleccionó un vehiculo Amarok V6 (Oferta: $${valorVehiculo})`;
                        valorPorcentajeMinimo = (valorVehiculo*30)/100;
                        break;
                    }

                    case 2:{
                        valorVehiculo = 53000000;
                        tipoVehiculo = `Ud. seleccionó un vehiculo TAOS $${valorVehiculo}`;
                        valorPorcentajeMinimo = (valorVehiculo*30)/100;
                        break;
                    }

                    case 3:{
                        valorVehiculo = 47000000;
                        tipoVehiculo =`Ud. seleccionó un vehiculo Polo Nuevo $${valorVehiculo}`;
                        valorPorcentajeMinimo = (valorVehiculo*30)/100;
                        break;
                    }
                }//Fin switch dinero de entrega

                 //validamos el porcentaje de entrega
                if( (dineroDisponibleCliente >= valorPorcentajeMinimo)&&(dineroDisponibleCliente <= valorVehiculo) )
                {
                    valorRestanteVehiculo = (valorVehiculo - dineroDisponibleCliente);

                    //OPCIONES DE FINANCIACION
                    while(transaccion)
                    {
                        financiacion = Number(prompt(`Selecciones como quiere financiar el valor restante de la deuda?: 1- 12 cuotas - 9.9 % ANUAL; 2- 24 cuotas - 22 % ANUAL; 3- 36 cuotas - 33 % ANUAL`));

                        if( (financiacion === 1)||(financiacion === 2)||(financiacion === 3) )
                        {
                            //CALCULANDO CON INTERES SIMPLE
                            switch(financiacion)
                            {
                                case 1:{
                                    opcionFinanciacion = `Financiado a 12 cuotas - 9.9 % ANUAL`;
                                    porcentajeFinanciacion = 9.9;
                                    mesesPago = 12;
                                    transaccion = false;
                                    break;
                                }
                                case 2:{
                                    opcionFinanciacion = `Financiado a 24 cuotas - 22 % ANUAL`;
                                    porcentajeFinanciacion = 22;
                                    mesesPago = 24;
                                    transaccion = false;
                                    break;
                                }
                                case 3:{
                                    opcionFinanciacion = `Financiado a  36 cuotas - 33 % ANUAL`;
                                    porcentajeFinanciacion = 22;
                                    mesesPago = 36;
                                    transaccion = false;
                                    break;
                                }
                            }
                        }else
                        {
                            transaccion = confirm(`Seleccion de financiación inválida: ¿Desea continuar la transacción?`);
                        }//Fin else de validacion de la financiacion
                    }
                }else
                {
                    transaccion = confirm(`El dinero que ingreso para la transaccion, no cubre el 30% de valor del vehiculo o sobrepasa del valor total del mismo: ¿Desea continuar la transacción?`);
                }

            }//Fin segundo while
        }else
        {
            transaccion = confirm(`Seleccion de vehículo inválida: ¿Desea continuar la transacción?`);
        }//Else principal
                
    }// Fin while principal

    //CALCULO FINAL DE LA TRANSACCION POR INTERES SIMPLE I = Monto * Tasa interes anual * Nro años
    interesTotal = (valorRestanteVehiculo * (porcentajeFinanciacion/100) * (mesesPago/12));
    //Monto total de la deuda
    montoTotalPagar = (valorRestanteVehiculo + interesTotal);
    //Valor de la cuota
    valorCuotas = ( montoTotalPagar/mesesPago );

    //Muestro por consola
    console.log(tipoVehiculo);
    console.log(`Dinero de entrega por parte del cliente: $${dineroDisponibleCliente}`);
    console.log(opcionFinanciacion);
    console.log(`Monto total a pagar con la financiación elegida: $${montoTotalPagar}`);
    console.log(`Valor de la cuota a ${mesesPago} meses: ${valorCuotas}`);
}