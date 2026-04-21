/*Una empresa de Peajes del SUR S.A. desea realizar una aplicación que permita cobrar y otorgar los
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

    let camion = 22000;
    let automovil = 12000;
    let camioneta = 4000;
    let moto = 1500;

    let pagoCamion = 0;
    let pagoCamioneta = 0;
    let pagoAutomovil = 0;
    let pagoMoto = 0;

    let cantidadDeCamion = 0;
    let cantidadAutomovil = 0;
    let cantidadDeCamioneta = 0;
    let cantidadDeMoto = 0;

    let continuar = `s`; 

    while (continuar ===`S` || continuar === 's')

     {   
    
   let automotor = Number (prompt (`ingresar tipo de vehiculo 1 - camion, 2- automovil, 3 - camioneta, 4 - motos`));

        switch (automotor)
      {

        case 1:
            console.log  ("USTED CARGO CAMION");

            pagoCamion = pagoCamion + camion; 

            cantidadDeCamion = cantidadDeCamion + 1 ;

            console.log (`pagoCamion ${pagoCamion}`);

            console.log (`pasaron ${cantidadDeCamion} `);

        break; 
        
        case 2:
            console.log  ("USTED CARGO AUTOMOVIL");

            pagoAutomovil = pagoAutomovil + automovil;

            cantidadAutomovil = cantidadAutomovil + 1;

            console.log (`pago automovil ${pagoAutomovil}`);

            console.log (`pasaron ${cantidadAutomovil} `);

        break; 

        case 3:
            console.log  ("USTED CARGO CAMIONETA");

            pagoCamioneta = pagoCamioneta + camioneta; 

            cantidadDeCamioneta = cantidadDeCamioneta + 1 ;

            console.log (`pago camioneta ${pagoCamioneta}`);

            console.log (`pasaron ${cantidadDeCamioneta} `);

        break; 

         case 4:
            console.log  ("USTED CARGO MOTO");

            pagoMoto= pagoMoto + moto; 

            cantidadDeMoto= cantidadDeMoto + 1 ;

            console.log (`pago moto ${pagoMoto}`);

            console.log (`pasaron ${cantidadDeMoto} `);

        break; 


        default :

        let cargaVehiculo = "s";
        cargaVehiculo = Number (prompt("cargo mal  ? (del 1 al 4)"));
        
 
        break;
             
        
                
     }
           

        continuar = (prompt(`desea cargar otro ?. (s/n)`));
    
        let totalGeneralCobrado = pagoMoto + pagoAutomovil + pagoCamion + pagoCamioneta;
    
        console.log (`total cobrado ${totalGeneralCobrado}`);
    }

    if (cantidadAutomovil > cantidadDeCamion)
    {
         
        console.log(`pasaron mas autos ${cantidadAutomovil}`);

    }    



         else if (cantidadAutomovil === cantidadDeCamion) {
    console.log(`Pasó la misma cantidad de autos y camiones: ${cantidadAutomovil}`);
}
 else {
    console.log(`Pasaron más camiones: ${cantidadDeCamion}`);


        
       // console.log(`pasaron misma cantidad de autos y camiones`);    
        
        //console.log(`pasaron mas camiones ${cantidadDeCamion}`)
    
            
    
}
    
   
}