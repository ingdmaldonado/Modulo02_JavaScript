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

    let MontoPeajeCamion = 22000;
    let MontoPeajeCamioneta = 12000;
    let MontoPeajeAuto = 4000;
    let MontoPeajeMoto = 1500;

    let TotalCamiones = 0;
    let TotalCobradoCamion = 0;
    let TotalCamionetas = 0;
    let TotalCobradoCamionetas = 0;
    let TotalAutos = 0;
    let TotalCobradoAutos = 0;
    let TotalMotos = 0;
    let TotalCobradoMotos = 0;

    let TotalVehiculosAtendidos = 0;
    let TotalCobradoPeaje = 0;

    let TipoVehiculo = 0;
    let SeguirCobrando = 'S';


    while(SeguirCobrando === 'S' || SeguirCobrando === 's')
    {
        TipoVehiculo = Number(prompt(`Ingrese Tipo de Vehiculo 1-> CAMION - 2-> CAMIONETA - 3-> AUTO - 4-> MOTO`));
        switch(TipoVehiculo)
        {
            case 1: //Camion
                {
                    console.log(`Peaje de Camion`);
                    TotalCamiones++;
                    TotalCobradoCamion = TotalCamiones * MontoPeajeCamion;
                    break;
                }
            case 2: //Camioneta
                {
                    console.log(`Peaje de Camioneta`);
                    TotalCamionetas++;
                    TotalCobradoCamionetas = TotalCamionetas * MontoPeajeCamioneta;
                    break;
                } 
            case 3: //Auto
                {
                    console.log(`Peaje de Auto`);
                    TotalAutos++;
                    TotalCobradoAutos = TotalAutos * MontoPeajeAuto;
                    break;
                }
            case 4: //Moto
                {
                    console.log(`Peaje de Moto`);
                    TotalMotos++;
                    TotalCobradoMotos = TotalMotos * MontoPeajeMoto;
                    break;
                }
            default:
                {
                    break;
                }                                                               
        }
        SeguirCobrando = prompt(`Desea seguir Cobrando Peajes (S/N)`);
        TotalVehiculosAtendidos = TotalCamiones + TotalCamionetas + TotalAutos + TotalMotos;
        TotalCobradoPeaje = TotalCobradoCamion + TotalCobradoCamionetas + TotalCobradoAutos + TotalCobradoMotos;
    }
    console.log(`El total de AUTOS atendidos es ${TotalAutos} -- El monto total de Peajes cobrados es ${TotalCobradoAutos}`);

    console.log(`El total de CAMIONES atendidos es ${TotalCamiones} -- El monto total de Peajes cobrados es ${TotalCobradoCamion}`);

    console.log(`El total de CAMIONETAS atendidas es ${TotalCamionetas} -- El monto total de Peajes cobrados es ${TotalCobradoCamionetas}`);

    console.log(`El total de MOTOS atendidas es ${TotalMotos} -- El monto total de Peajes cobrados es ${TotalCobradoMotos}`);
    

    console.log(`El total de vehiculos atendidos es ${TotalVehiculosAtendidos} -- El monto total de Peajes cobrados es ${TotalCobradoPeaje}`);

    if( TotalAutos > TotalCamionetas)
    {
        console.log(`Pasaron por el peaje mas AUTOS que CAMIONETAS`);
    }
    else
    {
        if(TotalCamionetas > TotalAutos)
        {
            console.log(`Pasaron por el peaje mas CAMIONETAS que AUTOS`);
        }
        else
        {
            console.log(`Pasaron por el peaje la MISMA cantidad de CAMIONETAS y AUTOS`);    
        }
           

    } 
}