/*Ejercicio Nro. 14:
Una empresa de Peajes del SUR S.A. desea realizar una aplicación que permita cobrar y otorgar los
comprobantes a los clientes que circulan por las autopistas concesionadas por la empresa, para ello se necesita
realizar un programa que el cajero del puesto pueda realizar el cobro y levantado de la barrera.
Los precios establecidos son los siguientes
 CAMION = 22.000,00 PESOS
 CAMIONETA = 12.000,00 PESOS
 AUTOMOVIL = 4.000,00 PESOS
 MOTOS = 1.500,00 PESOS
La aplicación debe permitirle al cajero registrar todas las operaciones y al finalizar su jornada laboral realizar el
cierre donde le deberá mostrar la siguiente información.
 Cantidad de AUTOS
 Total Cobrado de AUTOS
 Cantidad de CAMIONETAS
 Total de CAMIONETAS
 Cantidad de AUTOMOVILES
 Total de Automóviles
 Cantidad de MOTOS
 Total de MOTOS
 Total GENERAL cobrado.
Compare al final si pasaron más camionetas que autos o fue al revés ¿?. O quizás hayan pasado la misma
cantidad. Compare estas cantidades únicamente entre autos y camionetas.
Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el
DOM y cargar los datos de entrada por medio de prompt.*/


{

    let continua = `S`;

    let precioCamion = 22000;
    let precioCamioneta = 12000;
    let precioAutomovil = 4000;
    let precioMotos = 1500;




    let cantidadAutomoviles = 0;
    let totalCobradoAutomoviles = 0;
    let cantidadCamion = 0;
    let totalCobradoCamion = 0;
    let cantidadCamionetas = 0;
    let totalCobradoCamionetas = 0;
    let cantidadMotos = 0;
    let totalCobradoMotos = 0;
    let totalGeneralCobrado = 0;


    while (continua === 'S' || continua === 's')
        {
        let tipoVehiculo = Number( prompt(`ingrese el tipo de vehiculo
            1 - Camion , 2 - Camioneta, 3 - Automovil, 4 - Motos, `));
            
            switch (tipoVehiculo){
                case 1:
                    {
                        cantidadCamion = cantidadCamion + 1;
                        totalCobradoCamion = totalCobradoCamion + precioCamion;
                        totalGeneralCobrado = totalGeneralCobrado + 
                        precioCamion;
                        break;
                        
                    }
                    case 2:
                        {
                            cantidadCamionetas = cantidadCamionetas + 1;
                            totalCobradoCamionetas = totalCobradoCamionetas + precioCamioneta;
                            totalGeneralCobrado = totalGeneralCobrado + precioCamioneta;
                            break;
                        }
                        case 3:
                            {
                                cantidadAutomoviles = cantidadAutomoviles + 1;
                                totalCobradoAutomoviles = totalCobradoAutomoviles + precioAutomovil;
                                totalGeneralCobrado = totalGeneralCobrado + precioAutomoovil;
                                    break;
                            }
                            case 4 :
                                {
                                    cantidadMotos = cantidadMotos + 1;
                                    totalCobradoMotos = totalCobradoMotos + precioMotos;
                                    totalGeneralCobrado = totalGeneralCobrado + precioMotos;
                                    break;
                                }
                                default:
                                    {
                                        alert(`Tipo de vehiculo no valido`);
                                        break;
                                    }
                                    

            }
            continua = prompt(`Desea continuar? (S/N)`);
    }
    console.log(`Cantidad de Camion : ${cantidadCamion}, Total Cobrado de camion : ${totalCobradoCamion}`);
    console.log(`Cantidad de Camionetas : ${cantidadCamionetas}, Total Cobrado de camionetas : ${totalCobradoCamionetas}`);
    console.log(`Cantidad de Automoviles :${cantidadAutomoviles}, Total Cobrado de Automoviles : ${totalCobradoAutomoviles}`);
    console.log(`Cantida de Motos : ${cantidadMotos}, Total Cobrado de Motos : ${totalCobradoMotos}`);
    console.log(`Total General Cobrado : ${totalGeneralCobrado}`);

    if (cantidadCamionetas > cantidadAutomoviles)
    {
        console.log(`Pasaron mas camionetas que automoviles`);
    }
    else if (cantidadCamionetas < cantidadAutomoviles)
    {
        console.log(`Pasaron mas automoviles que camionetas`);

    }
    else
    {
        console.log(`Pasaron la misma cantidad de camionetas y automoviles`);
    }
}