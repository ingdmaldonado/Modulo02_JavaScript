
/*

    CAMION => 22.000,00
    CAMIONETA => 12.000,00
    AUTOMOVIL => 4.000,00
    MOTO => 1.500,00

*/

{

    const PRECIOCAMION = 22000;
    const PRECIOCAMIONETA = 12000;

    console.log(`Aplicacion del Peajes del Sur`);

    /* (1ro) => Es un proceso repetitivo de 5
    vehiculos. se entiende que pueden ingresar mas
    vehiculos. 
    */

    /* AVENIDA SAN MARTIN 
    AVDA SAN MARTIN
    AV. SAN MARTIN
    ABENIDA ZAN MARTÍN
    */

    let contadorDeCamiones = 0; // aqui voy a contar
    let acumuladorDeCamiones = 0; // aqui voy a acumular

    let contadorDeCamionetas = 0; // 
    let acumuladorDeCamionetas = 0;

    let totalCobrado = 0;

    let tipoDeVehiculo = 0;

    for(let i=1;i<=5;i=i+1)
    {
        console.log(`aqui dentro voy a ir cobrando vehiculo ${i}`);

        tipoDeVehiculo = Number(prompt(`Ingrese tipo vehiculo nro.  ${i} => (1-CAMION,2-CAMIONETA,3-AUTO,4-MOTO)`));


        /* que tipo de variables el el tipo de vehiculo ?.
        continua ?. => asume infinitos valores
        discreta ?. => asume un conjunto finito de valores.
        */

        switch(tipoDeVehiculo)
        {
            case 1:// CAMION
                {
                    contadorDeCamiones = contadorDeCamiones + 1;
                    acumuladorDeCamiones = acumuladorDeCamiones + PRECIOCAMION;
                    break;
                }

            case 2:// CAMIONETA
                {
                    contadorDeCamionetas = contadorDeCamionetas + 1;
                    acumuladorDeCamionetas = acumuladorDeCamionetas + PRECIOCAMIONETA;                   

                }

            case 3:// AUTO
                {

                }

            case 4:// MOTO
                {

                }

            default: // CUALQUIER VALOR INCORRECTO
                {
                    console.log(`la opción ingresa es incorrecta`);
                }
        }

        console.log(`Cant tipo 1 - camiones ${contadorDeCamiones} y total ${acumuladorDeCamiones}`);
        console.log(`Cant tipo 2 - camionetas ${contadorDeCamionetas} y total ${acumuladorDeCamionetas}`);
        console.log(tipoDeVehiculo);

        /* Determine si pasaron mas autos
        que camionetas o mas camiones que
        camionetas ?. 
        
            - contadorDeCamiones
            - contadorDeCamionetas

            pasaron mas camiones que camionetas
            pasaron mas camionetas que camiones
            pasaron la misma cantidad    
        */

        if(contadorDeCamiones > contadorDeCamionetas)
        {
            console.log(`1 - Pasaron mas camiones que camionetas`);
        }
        else
        {
            if(contadorDeCamionetas > contadorDeCamiones)
            {
                console.log(`2 - Pasaron mas camionetas que camiones`);
            }
            else
            {
                console.log(`3 - Pasaron la misma cantidad`);
            }
        }


        /* quiero determinar cuanta plata tiene
        el cajero en su caja */

        totalCobrado = acumuladorDeCamiones + acumuladorDeCamionetas;
      

    }
}

/* 

    - incorporación de codigo JS al HTML
    - la definición del bloque de codigos principal {}
    - declaración de variables (contadores, acumuladores)
    - proceso repetitivo ciclo for
    - dentro del proceso repetitivo (for) => est. condicional. switch
    - al finalizar el ciclo, muestra los totales.




*/

