// Ejercicio N11

let envioZonaCentro = 2500.00;

let envioZonaOeste = 3750.00;

let envioZonaNorte = 4225.00;

let envioZonaSur = 5222.50;

let envioZonaEste = 4288.50;

let importeCompra = Number(prompt("Ingrese el importe de la compra: "));

let zonaEnvio = Number(prompt("Ingrese la zona de envío: 1 para zona centro, 2 para zona oeste, 3 para zona norte, 4 para zona sur, 5 para zona este: "));

switch (zonaEnvio) {
    case 1:
        console.log("El costo de envío para la zona centro mas su compra es: " + (envioZonaCentro + importeCompra));
        break;
    case 2:
        console.log("El costo de envío para la zona oeste mas su compra es: " + (envioZonaOeste + importeCompra));
        break;
    case 3:
        console.log("El costo de envío para la zona norte mas su compra es: " + (envioZonaNorte + importeCompra));
        break;
    case 4:
        console.log("El costo de envío para la zona sur mas su compra es: " + (envioZonaSur + importeCompra));
        break;
    case 5:
        console.log("El costo de envío para la zona este mas su compra es: " + (envioZonaEste + importeCompra));
        break;
    default:
        console.log("Zona de envío no válida.");
}
