let compra = Number(prompt("Ingrese el importe de la compra"));
let zona = Number(prompt("Ingrese zona: 1-Centro, 2-Oeste, 3-Norte, 4-Sur, 5-Este"));

let envio;

// aquí calculo los costos de envío
switch (zona) {
    case 1:
        envio = 2500;
        break;
    case 2:
        envio = 3750;
        break;
    case 3:
        envio = 4225;
        break;
    case 4:
        envio = 5222.5;
        break;
    case 5:
        envio = 4288.5;
        break;
    default:
        console.log("Zona inválida");
}

//calculo el total final
let totalFinal = compra + envio;

console.log("Importe de compra: " + compra);
console.log("Costo de envío: " + envio);
console.log("Total a pagar: " + totalFinal);