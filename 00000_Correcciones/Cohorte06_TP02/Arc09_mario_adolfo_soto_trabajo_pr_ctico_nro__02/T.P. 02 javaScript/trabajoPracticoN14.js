/*Una empresa de Peajes del SUR S.A. desea realizar una aplicación que permita cobrar y otorgar los
comprobantes a los clientes que circulan por las autopistas concesionadas por la empresa, para ello se necesita
realizar un programa 
que el cajero del puesto pueda realizar el cobro y levantado de la barrera.
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
DOM y cargar los datos de entrada por medio de prompt. */

{
   let continua = "s";
    let veiculo = 0 ;
    let camiones=0;
   let camioneta=0;
   let automoviles=0;
   let motos=0;
   let peajeCamiones= 22000;
   let peajeCamionetas= 12000;
    let peajeAutomoviles = 4000;
    let peajeMoto = 1500;
  
    while (continua === "S" || continua === "s")
    {
        veiculo=Number(prompt(`1 camion 2 camioneta 3 automovil 4 moto`));
    
        switch(veiculo)
        {
                //camiones
            case 1:{
                camiones= camiones + 1;
                ;
                
                break;

            }
                //camionetas
            case 2:{ 
                camioneta= camioneta + 1;
                
                break;

            }
                //automoviles
            case 3:{
                automoviles= automoviles + 1;
                
                break;

            }
                //motos
            case 4:{
                motos= motos + 1;
                
                break;

            }
            default:{console.log(`Ud. ingreso un codigoo incorrecto `);
                break;
            }
            

        }
            continua = prompt(`quiere continuar S/n`);

    }
     
    //contador de veiculos
    console.log(`cantidad de camiones  ${camiones}`);
    console.log(`cantidad de camionetas ${camioneta}`);
    console.log(`cantidad de automoviles ${automoviles}`);
    console.log(`cantidad de motos ${motos}`);

    //total peaje 
    totalCobradoCamiones = camiones * peajeCamiones;
    totalCobradoCamionetas = peajeCamionetas * camioneta;
    totalCobradoAutomoviles = peajeAutomoviles * automoviles;
    totalCobradoMoto = peajeMoto * motos;



    console.log(`Total cobrado CAMIONES ${totalCobradoCamiones}`);
    console.log(`Total cobrado CAMIONETAS ${totalCobradoCamionetas}`);
    console.log(`Total cobrado AUTOMOVILES ${totalCobradoAutomoviles}`);
    console.log(`Total cobrado MOTOS ${totalCobradoMoto}`);

    //total general
    totalGeneralCobrado = totalCobradoCamiones + totalCobradoCamionetas + totalCobradoAutomoviles + totalCobradoMoto;
    console.log(`el cierre total de caja es ${totalGeneralCobrado}`);

    //comparacion
    
    if(automoviles > camioneta)
        {
    
        console.log(`pasaron mas automoviles`);
        
    }
    else if (automoviles< camioneta)
        {
        
        console.log(`pasaron mas camionetas`);

    }
    else console.log(`paso la misma cantidad de autos y camionetas`);
}
