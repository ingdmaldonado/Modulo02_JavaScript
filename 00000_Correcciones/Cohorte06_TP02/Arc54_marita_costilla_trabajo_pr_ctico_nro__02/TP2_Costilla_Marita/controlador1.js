{

    //cobraar y otorgar los comprobantes de los clientes 
    // CAMION= 22.000,00 pesos 
    // CAMIONETA = 12.000,00 PESOS
    // AUTOMOVIL = 4.000,00 PESOS
    // MOTOS = 1.500,00 PESOS 
    //comprara cantidades entre camionetas y autos

    let cantidadCamiones=0;
    let cantidadCamionetas=0;
    let cantidadAutomiviles=0;
    let cantidadMotos=0;

    let totalCamiones=0;
    let totalCamionetas=0;
    let totalAutomoviles=0;
    let totalMotos=0;

    let totalGeneral=0;

    let operacion=`S`;

    while(operacion===`S` || operacion ===`s`)
        {
        let tipoDeTrasporte= Number(prompt(`Que tipo de automovil es: 1-CAMION, 2-CAMIONETA, 3-AUTOMOVIL, 4-MOTO`));
        
        switch(tipoDeTrasporte)
        {
            case 1:
            {
                cantidadCamiones++;
                totalCamiones=totalCamiones+22000;
                totalGeneral=totalGeneral+22000;
                break;

            }
            case 2:
            {
                cantidadCamionetas++;
                totalCamionetas=totalCamionetas+12000;
                totalGeneral=totalGeneral+12000;
                break;
            }
            case 3:
            {
                cantidadAutomiviles++;
                totalAutomoviles=totalAutomoviles+4000;
                totalGeneral=totalGeneral+4000;
                break;
            }
            case 4:
            {
                cantidadMotos++;
                totalMotos=totalMotos+1500;
                totalGeneral=totalGeneral+1500;
                break;

            }
            default:
            {
                console.log(`ingreso un tipo equivocado`);

            }

        }

        operacion = prompt(`Desea seguir operando? S/N`);

    }


    if (cantidadCamionetas>cantidadAutomiviles)
    {
        console.log(`Pasaron mas cantidad de camionetas `)
    }else
    {
        if(cantidadAutomiviles>cantidadCamionetas)
        {
            console.log(`Pasaron mas cantidad de automoviles`);
        }else
        {
            console.log(`pasaron la misma cantidad de camionetas y autos`);
        }
    }
        console.log(`cantidad de CAMIONES: ${cantidadCamiones}`);
        console.log(`Total cobrado de CAMIONES: $ ${totalCamiones}`);
        console.log(`cantidad de CAMIONETAS: ${cantidadCamionetas}`);
        console.log(`Total cobrado CAMIONETAS  $${totalCamionetas}`);
        console.log(`cantidad de AUTOMOVILES: ${cantidadAutomiviles}`);
        console.log(`Total cobrado AUTOMOVILES de $${totalAutomoviles}`);
        console.log(`cantidad de MOTOS: ${cantidadMotos}`);
        console.log(`Total cobrado de MOTOS $${totalMotos}`);

        console.log(`TOTAL GENERAL COBRADO:$ ${totalGeneral}`);



}