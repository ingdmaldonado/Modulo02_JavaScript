let precioCamion = 22000
let precioCamioneta = 12000
let precioAutomovil = 4000
let precioMoto = 1500

let cantCamion = 0;
let cantCamioneta = 0;
let cantAutomovil = 0;
let cantMoto = 0;

let totalCamion = 0;
let totalCamioneta = 0;
let totalAutomovil = 0;
let totalMoto = 0;

let totalGeneral = 0;

let seleccion = 0;

while (seleccion !== 9){
    seleccion=Number(prompt("Ingrese tipo vehículo: 1-Camión | 2-Camioneta | 3-Automóvil | 4-Motocicleta | 9-Finalizar"));
    switch(seleccion){
    case 1: cantCamion ++;
            break;
    case 2: cantCamioneta++;
            break;
    case 3: cantAutomovil++;
            break;
    case 4: cantMoto++;
            break;
    case 9: alert('Fin de la jornada');
            break;
    default: alert('Código incorrecto, intente de nuevo.');
            break;
    }
}

totalCamion = cantCamion * precioCamion;
totalCamioneta = cantCamioneta * precioCamioneta;
totalAutomovil = cantAutomovil * precioAutomovil;
totalMoto = cantMoto * precioMoto;

totalGeneral = totalCamion + totalCamioneta + totalAutomovil + totalMoto;


console.log(`Los totales son: 
                              Camiones: ${cantCamion} -> ${totalCamion}
                              Camionetas: ${cantCamioneta} -> ${totalCamioneta}
                              Automóviles: ${cantAutomovil} -> ${totalAutomovil}
                              Motos: ${cantMoto} -> ${totalMoto}

                              Total General: ${totalGeneral}
    
    ` );

if (totalCamioneta === totalAutomovil){
    console.log(`Pasaron autos y camionetas en igual cantidad. `);
}
 if (totalCamioneta > totalAutomovil){
    console.log(`Pasaron más camionetas que autos`);
 }
 if (totalAutomovil > totalCamioneta){
    console.log(`Pasaron más automóviles que camionetas`);
 }