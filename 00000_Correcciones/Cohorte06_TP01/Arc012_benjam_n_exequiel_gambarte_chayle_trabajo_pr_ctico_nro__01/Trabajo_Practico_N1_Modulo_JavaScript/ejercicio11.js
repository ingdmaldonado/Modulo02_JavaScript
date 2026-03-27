// COSTOS EN VARIABLES
let zonaCentro = 2500;
let zonaNorte = 4225;
let zonaSur = 5222.50;
let zonaEste = 4288.50;
let zonaOeste = 3750;

// INGRESAR LOS DATOS
let importe = parseFloat(prompt("Ingrese el importe de la compra: "))
let zona = prompt("Ingresá la zona (centro, oeste, norte, sur, este):").toLowerCase();

let costoDeEnvio = 0;

// EVALUAMOS ZONA
switch (zona) {
    case "centro":
        costoDeEnvio = zonaCentro;
        break;
    case "norte":
        costoDeEnvio = zonaNorte;
        break;
    case "sur":
        costoDeEnvio = zonaSur;
        break;
    case "este":
        costoDeEnvio = zonaEste;
        break;
    case "oeste":
        costoDeEnvio = zonaOeste;
        break
    default:
        console.log("Zona invalida.");
} 

// TOTAL FINAL
let totalFinal = importe + costoDeEnvio;

console.log("Importe de la compra $ " + importe);
console.log("Importe de la zona $ " + costoDeEnvio);
console.log("Total a pagar $" + totalFinal)