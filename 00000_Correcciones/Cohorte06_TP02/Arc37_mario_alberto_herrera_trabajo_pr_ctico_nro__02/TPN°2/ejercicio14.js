let tipo;
let continuar;

// CONTADORES
let cantAutos = 0;
let cantCamionetas = 0;
let cantCamiones = 0;
let cantMotos = 0;

// ACUMULADORES
let totalAutos = 0;
let totalCamionetas = 0;
let totalCamiones = 0;
let totalMotos = 0;

do {
   
    tipo = prompt("Ingrese tipo: auto - camioneta - camion - moto");

    
    while (
        tipo !== "auto" &&
        tipo !== "camioneta" &&
        tipo !== "camion" &&
        tipo !== "moto"
    ) {
        tipo = prompt("ERROR. Ingrese correctamente: auto - camioneta - camion - moto");
    }

    
    if (tipo === "auto") {
        cantAutos++;
        totalAutos += 4000;
    } else if (tipo === "camioneta") {
        cantCamionetas++;
        totalCamionetas += 12000;
    } else if (tipo === "camion") {
        cantCamiones++;
        totalCamiones += 22000;
    } else if (tipo === "moto") {
        cantMotos++;
        totalMotos += 1500;
    }

   
    continuar = prompt("¿Desea continuar? si/no");

    while (continuar !== "si" && continuar !== "no") {
        continuar = prompt("ERROR. Ingrese si o no");
    }

} while (continuar === "si");



let totalGeneral = totalAutos + totalCamionetas + totalCamiones + totalMotos;

console.log("Autos:", cantAutos, "Total:", totalAutos);
console.log("Camionetas:", cantCamionetas, "Total:", totalCamionetas);
console.log("Camiones:", cantCamiones, "Total:", totalCamiones);
console.log("Motos:", cantMotos, "Total:", totalMotos);
console.log("TOTAL GENERAL:", totalGeneral);



if (cantAutos > cantCamionetas) {
    console.log("Más AUTOS que CAMIONETAS");
} else if (cantCamionetas > cantAutos) {
    console.log("Más CAMIONETAS que AUTOS");
} else {
    console.log("MISMA cantidad de autos y camionetas");
}