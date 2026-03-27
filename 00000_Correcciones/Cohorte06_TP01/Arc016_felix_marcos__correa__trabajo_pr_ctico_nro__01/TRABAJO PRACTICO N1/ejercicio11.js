{
let importe = prompt("Ingrese el importe de la compra");
let zona = prompt("Ingrese la zona (1-Centro, 2-Oeste, 3-Norte, 4-Sur, 5-Este)");

let centro = 2500;
let oeste = 3750;
let norte = 4225;
let sur = 5222.50;
let este = 4288.50;

let envio = 0;

if (zona == 1) {
    envio = centro;
} else if (zona == 2) {
    envio = oeste;
} else if (zona == 3) {
    envio = norte;
} else if (zona == 4) {
    envio = sur;
} else if (zona == 5) {
    envio = este;
}

let total = importe * 1 + envio;
console.log("El total a pagar con envío es: $" + total);

}