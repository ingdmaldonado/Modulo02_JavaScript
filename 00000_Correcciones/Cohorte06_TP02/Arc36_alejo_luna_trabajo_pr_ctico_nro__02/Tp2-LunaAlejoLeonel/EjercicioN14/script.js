    /* PRECIOS

    CAMION = 22.000,00 PESOS
    AUTOMOVIL = 4.000,00 PESOS
    CAMIONETA = 12.000,00 PESOS
    MOTOS = 1.500,00 PESOS

    */
console.log(
    `Bienvenidos al controlador de peaje
`);

let camion = 0;
let auto = 0;
let camioneta = 0;
let moto = 0;

let totalCamion = 0;
let totalAuto = 0;
let totalCamioneta = 0;
let totalMoto = 0;

let monto = 0;

let continuar = 1;

while (continuar === 1) {

    let opcion = Number(prompt(`
        ¿Que vehículo ingresó?
    1-Camión
    2-Auto
    3-Camioneta 
    4-Moto
    Ingrese una opción`
    ));

    
    while (opcion < 1 || opcion > 4) {
        console.log(`Ingrese una opción válida`);
        opcion = Number(prompt(`Ingrese nuevamente:`));
    }

    
    if (opcion === 1) {
        camion++;
        totalCamion += 22000;
    } else if (opcion === 2) {
        auto++;
        totalAuto += 4000;
    } else if (opcion === 3) {
        camioneta++;
        totalCamioneta += 12000;
    } else if (opcion === 4) {
        moto++;
        totalMoto += 1500;
    }

    continuar = Number(prompt("¿Desea continuar? 1-Si || 0-No"));
}
monto = totalCamion + totalAuto + totalCamioneta + totalMoto;
console.log(`
    Cantidad de Camiones: ${camion}
    Total cobrado a camiones:$${totalCamion}

    Cantidad de Autos: ${auto}
    Total cobrado a autos:$${totalAuto}

    Cantidad de Camionetas: ${camioneta}
    Total cobrado a camionetas:$${totalCamioneta}

    Cantidad de Motos: ${moto}
    Total cobrado a motos:$${totalMoto}
    
    Monto total:$${monto}`); 

    if(auto>camioneta){
        console.log(`Ingresaron más autos que camionetas
        autos:${auto}
        camionetas:${camioneta}`);
    }else if(camioneta>auto){
        console.log(`Ingresaron más camionetas que autos
        camionetas:${camioneta}
        autos:${auto}`);
    }else{
        console.log(`Ingresó la misma cantidad de autos y camionetas en el día.`);
    }