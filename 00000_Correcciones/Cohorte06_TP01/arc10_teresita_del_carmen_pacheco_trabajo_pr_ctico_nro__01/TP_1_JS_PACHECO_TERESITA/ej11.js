// Ingreso de datos
let compra = parseFloat(prompt("Importe de la compra:"));
let zona = prompt("Zona (centro/oeste/norte/sur/este):");

// Variables de envío (recomendado por la consigna)
let envioCentro = 2500;
let envioOeste = 3750;
let envioNorte = 4225;
let envioSur = 5222.5;
let envioEste = 4288.5;

let envio = 0;

// Estructura switch
switch (zona) {
    case "centro":
        envio = envioCentro;
        break;

    case "oeste":
        envio = envioOeste;
        break;

    case "norte":
        envio = envioNorte;
        break;

    case "sur":
        envio = envioSur;
        break;

    case "este":
        envio = envioEste;
        break;

    default:
        console.log("Zona no válida");
        break;
}

// Cálculo del total (fórmula)
let total = compra + envio;

// Mostrar resultados
console.log("Importe de la compra:", compra);
console.log("Costo de envío:", envio);
console.log("Total a pagar:", total);