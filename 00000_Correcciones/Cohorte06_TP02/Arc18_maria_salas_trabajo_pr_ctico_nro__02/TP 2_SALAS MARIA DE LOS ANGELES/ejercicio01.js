
{
    let cantCamiones = 0; let totalCamiones = 0;
    let cantCamionetas = 0; let totalCamionetas = 0;
    let cantAutomoviles = 0; let totalAutomoviles = 0;
    let cantMotos = 0; let totalMotos = 0;

    let precioCamion = 22000;
    let precioCamionetas = 12000;
    let precioAutomoviles = 4000;
    let precioMotos = 1500;

    let continuar = "si"
    let opciones = 0;
    
    while(continuar === "si" || continuar === "SI")
    {  
        opciones = Number(prompt(`1- camiones, 2- camionetas, 3- automoviles, 4- motos`))
        switch(opciones)
        {
            case 1:
                {
                   cantCamiones++;
                   totalCamiones += precioCamion;
                   break;  
                }
            case 2:
                {
                    cantCamionetas++;
                    totalCamionetas += precioCamionetas;
                    break;
                }
            case 3:
                {
                    cantAutomoviles++;
                    totalAutomoviles += precioAutomoviles;
                    break;
                }
            case 4:
                {  
                    cantMotos++;
                    totalMotos += precioMotos;
                    break;
                }
            default:
                {
                    prompt(`intente nuevamente`)
                }
        }
        continuar = prompt(`desea continuar? si/no`)
    }

    if(cantCamionetas > cantAutomoviles)
    {
        console.log(`pasaron más camionetas que automoviles`)
    }
    else if (cantAutomoviles > cantCamionetas)
    {
        console.log(`pasaron más automoviles que camionetas`)
    }
    else
    {
        console.log(`pasaron la misma cantidad de camionetas y automoviles`)
    }

    console.log(`el total de camiones ingresadas son: ${cantCamiones}, el total recaudado es de: ${totalCamiones}`)
    console.log(`el total de camionetas ingresadas son: ${cantCamionetas}, el total recaudado es de: ${totalCamionetas}`)
    console.log(`el total de automoviles ingresadas son: ${cantAutomoviles}, el total recaudado es de: ${totalAutomoviles}`)
    console.log(`el total de motos ingresadas son: ${cantMotos}, el total recaudado es de: ${totalMotos}`)
    
}