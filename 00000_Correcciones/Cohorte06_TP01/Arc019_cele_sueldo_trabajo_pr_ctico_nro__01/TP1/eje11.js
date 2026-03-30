{
    
    let importeCompra = Number(prompt("Ingrese el importe de la compra:"));
let zona = Number(prompt("Zona: 1-Centro 2-Oeste 3-Norte 4-Sur 5-Este"));

let envioCentro = 2500;
let envioOeste = 3750;
let envioNorte = 4225;
let envioSur = 5222.50;
let envioEste = 4288.50;

let costoEnvio = 0;

switch (zona) {
    case 1:
        costoEnvio = envioCentro;
        break;
    case 2:
        costoEnvio = envioOeste;
        break;
    case 3:
        costoEnvio = envioNorte;
        break;
    case 4:
        costoEnvio = envioSur;
        break;
    case 5:
        costoEnvio = envioEste;
        break;
    default:
        console.log("Zona inválida");
}

let totalFinal = importeCompra + costoEnvio;

console.log("Importe de compra:", importeCompra);
console.log("Costo de envío:", costoEnvio);
console.log("Total a pagar:", totalFinal);
}