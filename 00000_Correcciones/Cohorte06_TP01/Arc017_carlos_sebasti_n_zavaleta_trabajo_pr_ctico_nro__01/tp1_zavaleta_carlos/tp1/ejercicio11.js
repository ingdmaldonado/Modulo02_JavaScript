costoEnvio = 0;
importeCompra = 0;
totalaPagar = 0;
costoEnvio = Number(prompt("Por favor indique la zona del envío: 0-Sin envío | 1-Centro | 2-Oeste | 3-Norte | 4-Sur | 5-Este"));
importeCompra = Number(prompt("Imgrese el importe de la compra"));

switch (costoEnvio){
    case 1: costoEnvio = 2500;
            break;
    case 2: costoEnvio = 3750;
            break;
    case 3: costoEnvio = 4425;
            break;
    case 4: costoEnvio = 5222.5;
            break;
    case 5: costoEnvio = 4288.5;
            break;
    default: costoEnvio = 0;
            break;
}

totalaPagar = importeCompra + costoEnvio;

console.log("El importe de compra es " + importeCompra + " y el envío es "+ costoEnvio + " en total: " + totalaPagar);