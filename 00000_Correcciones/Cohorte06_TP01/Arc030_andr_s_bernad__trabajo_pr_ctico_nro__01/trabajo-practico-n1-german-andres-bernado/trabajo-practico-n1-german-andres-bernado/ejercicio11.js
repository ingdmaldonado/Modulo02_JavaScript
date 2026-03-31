/* Ejercicio Nro. 11: Estructuras Condicionales (if/else)

Un local de venta de comida rápida, lanza su aplicación online que le permite al cliente pagar por la misma
y además aclara que se incluye en el precio total el costo del envío dependiendo la zona en la que vive el
cliente.

1) Zona Centro = $ 2500,00
2) Zona Oeste = $ 3750,00
3) Zona Norte = $ 4225,00
4) Zona Sur = $ 5222,50
5) Zona Este = $ 4288,50

Debe ingresar el importe de la compra, sumarle el costo del envío en función de la zona del cliente.
Recomendación: Es mejor guardar los costos de envío en variables, de tal forma que si en un futuro cambian,
no haya que tocar la lógica del programa, ni ver todo el recorrido, sino simplemente cambiar los precios. */


let centro = 2500;
let oeste = 3750;
let norte = 4225;
let sur = 5222.50;
let este = 4288.50;

let importeCompra = Number(prompt("Ingrese el importe de la compra:"));
let zona = Number(prompt("Ingrese la zona del envio: 1) Centro 2) Oeste 3) Norte 4) Sur 5) Este"));

let envio = 0;

if (zona === 1) {
    envio = centro;
} else if (zona === 2) {
    envio = oeste;
} else if (zona === 3) {
    envio = norte;
} else if (zona === 4) {
    envio = sur;
} else if (zona === 5) {
    envio = este;
} else {
    console.log("Zona invalida");
}

let totalFinal = importeCompra + envio;

console.log("Importe de la compra:", importeCompra);
console.log("Costo de envío:", envio);
console.log("Total a pagar:", totalFinal);


