/*
    Ejercicio Nro. 14:
    Una empresa de Peajes del SUR S.A. desea realizar una aplicación que permita cobrar y otorgar los comprobantes a los clientes que circulan por las autopistas concesionadas por la empresa, para ello se necesita realizar un programa que el cajero del puesto pueda realizar el cobro y levantado de la barrera.
    Los precios establecidos son los siguientes
         CAMION = 22.000,00 PESOS
         CAMIONETA = 12.000,00 PESOS
         AUTOMOVIL = 4.000,00 PESOS
         MOTOS = 1.500,00 PESOS
    La aplicación debe permitirle al cajero registrar todas las operaciones y al finalizar su jornada laboral realizar el cierre donde le deberá mostrar la siguiente información.
         Cantidad de AUTOS
         Total Cobrado de AUTOS
         Cantidad de CAMIONETAS
         Total de CAMIONETAS
         Cantidad de AUTOMOVILES
         Total de Automóviles
         Cantidad de MOTOS
         Total de MOTOS
         Total GENERAL cobrado.
    Compare al final si pasaron más camionetas que autos o fue al revés ¿?. O quizás hayan pasado la misma cantidad. Compare estas cantidades únicamente entre autos y camionetas.
    Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el DOM y cargar los datos de entrada por medio de prompt.
*/

{
    let continua = `S`;

    let contadorClientes = 0;

    let precioPeaje = 0;

    let operacionCorrecta = true;

    let cantidadCamion = 0;
    let cantidadCamionetas = 0;
    let cantidadAutos = 0;
    let cantidadMotos = 0;

    let totalCobradoCamion = 0;
    let totalCobradoCamionetas = 0;
    let totalCobradoAutos = 0;
    let totalCobradoMotos = 0;

    let totalGeneralCobrado = 0;
    let totalClientes = 0;

    // aquí empiezo el día atendiendo (abre la cabina de peaje)
    while(continua === `S` || continua === `s`)
    {

        let atenderCliente = `S`;

        // aquí atiendo a los clientes que vayan llegando
        while(atenderCliente === `S` || atenderCliente === `s`)
        {
            contadorClientes = contadorClientes + 1;

            console.log(`Cliente Nro. ${contadorClientes}`);

            // aquí identifico el vehiculo que está a punto de entrar al Peaje
            let identificarVehiculo = Number(prompt(`Tipo de Vehiculo: 1) Camión | 2) Camioneta | 3) Automovil | 4) Moto`));

            switch(identificarVehiculo){
                case 1: // CAMIÓN
                {
                    precioPeaje = 22000;

                    console.log(`Tipo de Vehiculo: CAMIÓN`);

                    operacionCorrecta;

                    break;
                }

                case 2: // CAMIONETA
                {
                    precioPeaje = 12000;

                    console.log(`Tipo de Vehiculo: CAMIONETA`);

                    operacionCorrecta;

                    break;
                }

                case 3: // AUTOMOVIL
                {
                    precioPeaje = 4000;

                    console.log(`Tipo de Vehiculo: AUTO`);

                    operacionCorrecta;

                    break;
                }
                
                case 4: // MOTO
                {
                    precioPeaje = 1500;

                    console.log(`Tipo de Vehiculo: MOTO`);

                    operacionCorrecta;

                    break;
                }

                default:
                {
                    console.log(`Error de entrada. Ingrese un vehiculo válido.`);

                    operacionCorrecta = false;

                    break;
                }
            }

            let pagarPeaje = 0;

            // aquí compruebo sí el pago del cliente es correcto para levantar la barrera
            let levantarBarrera = `N`;

            if(identificarVehiculo >= 1 && identificarVehiculo <= 4)
            {
                while(levantarBarrera === `N`|| levantarBarrera === `n`)
                {
                    pagarPeaje = Number(prompt(`Ingrese la cantidad de Dinero dado por el Cliente:`));

                    let faltaDinero = precioPeaje - pagarPeaje;
                    let cambio = pagarPeaje - precioPeaje;

                    if(pagarPeaje === precioPeaje)
                    {
                        levantarBarrera = `S`;

                        console.log(`Pagado: $${pagarPeaje} | Barrera Levantada, continue por favor.`);
                    }
                    else{
                        if(pagarPeaje < precioPeaje)
                        {
                            let pagoIncompleto = `S`;

                            while(pagoIncompleto === `S` || pagoIncompleto === `s`)
                            {
                                console.log(`Pagado: $${pagarPeaje} | Pago Incompleto`);

                                pagarPeaje = pagarPeaje + Number(prompt(`Por favor, complete el resto del pago.`));

                                if(pagarPeaje < precioPeaje)
                                {
                                    pagoIncompleto = `S`;
                                }
                                else{
                                    if(pagarPeaje > precioPeaje)
                                    {
                                        cambio = pagarPeaje - precioPeaje;

                                        console.log(`Pagado: $${pagarPeaje} | Su Cambio: $${cambio} | Barrera levantada, continue por favor.`);

                                        pagoIncompleto = `N`;
                                    }
                                    else
                                    {
                                        console.log(`Pagado: $${pagarPeaje} | Barrera levantada, continue por favor.`);

                                        pagoIncompleto = `N`;
                                    }
                                }
                            }

                            levantarBarrera = `S`;
                        }
                        else
                        {
                            console.log(`Pagado: $${pagarPeaje} | Su Cambio: $${cambio} | Barrera levantada, continue por favor.`);

                            pagarPeaje = pagarPeaje - cambio;

                            levantarBarrera = `S`;
                        }
                    }
                }
            }
            else
            {
                contadorClientes = contadorClientes - 1;
            }

            // aquí contabilizo la cantidad de vehiculos que pasaron por el peaje
            cantidadCamion = identificarVehiculo === 1? cantidadCamion + 1 : cantidadCamion;
            cantidadCamionetas = identificarVehiculo === 2? cantidadCamionetas + 1 : cantidadCamionetas;
            cantidadAutos = identificarVehiculo === 3? cantidadAutos + 1 : cantidadAutos;
            cantidadMotos = identificarVehiculo === 4? cantidadMotos + 1 : cantidadMotos;

            // aquí sumo las cantidades de dinero cobrado según el vehiculo
            totalCobradoCamion = identificarVehiculo === 1? totalCobradoCamion + pagarPeaje : totalCobradoCamion;
            totalCobradoCamionetas = identificarVehiculo === 2? totalCobradoCamionetas + pagarPeaje : totalCobradoCamionetas;
            totalCobradoAutos = identificarVehiculo === 3? totalCobradoAutos + pagarPeaje : totalCobradoAutos;
            totalCobradoMotos = identificarVehiculo === 4? totalCobradoMotos + pagarPeaje : totalCobradoMotos;

            atenderCliente = prompt(`Continua atendiendo? (S/N)`);
        }

        // aquí sumo la recaudación total del día
        totalGeneralCobrado = totalCobradoCamion + totalCobradoCamionetas + totalCobradoAutos + totalCobradoMotos;

        totalClientes = contadorClientes;

        continua = prompt(`Cierra la Caja/Cabina? (S/N)`);
    }

    // muestro por consola las cantidades de vehiculos que pasaron
    console.log(`  `);
    console.log(`DATOS DEL DÍA`);
    console.log(`Cantidad de Camiones: ${cantidadCamion} | Total Cobrado de Camiones: $${totalCobradoCamion}`);
    console.log(`Cantidad de Camionetas: ${cantidadCamionetas} | Total Cobrado de Camionetas: $${totalCobradoCamionetas}`);
    console.log(`Cantidad de Autos: ${cantidadAutos} | Total Cobrado de Autos: $${totalCobradoAutos}`);
    console.log(`Cantidad de Motos: ${cantidadMotos} | Total Cobrado de Motos: $${totalCobradoMotos}`);

    // aquí muestro por consola si un tipo de vehiculo paso más veces que otro o si pasaron en iguales cantidades
    console.log(`   `);
    if(cantidadAutos > cantidadCamionetas)
    {
        console.log(`Pasaron más Autos que Camionetas.`);
    }
    else{
        if(cantidadAutos < cantidadCamionetas)
        {
            console.log(`Pasaron más Camionetas que Autos.`);
        }
        else
        {
            console.log(`La cantidad de Autos y Camionetas que pasaron son iguales.`);
        }
    }

    // muestro por consola la recaudación total del día
    console.log(`   `);
    console.log(`Total GENERAL Cobrado: $${totalGeneralCobrado} | Total Clientes: ${totalClientes}`);
}