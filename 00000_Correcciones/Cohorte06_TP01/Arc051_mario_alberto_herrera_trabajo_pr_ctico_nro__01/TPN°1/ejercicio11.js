/*
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
no haya que tocar la lógica del programa, ni ver todo el recorrido, sino simplemente cambiar los precios.
*/

let importe = Number(prompt("Ingrese el importe de la compra"));
let zona = Number(prompt("Ingrese la zona: 1-Centro, 2-Oeste, 3-Norte, 4-Sur, 5-Este"));

// Costos de envío guardados en variables
let enviocentro = 2500;
let enviooeste = 3750;
let envionorte = 4225;
let enviosur = 5222.50;
let envioeste = 4288.50;

let costoenvio = 0;

switch (zona) {

    case 1:
        costoenvio = enviocentro;
        break;

    case 2:
        costoenvio = enviooeste;
        break;

    case 3:
        costoenvio = envionorte;
        break;

    case 4:
        costoenvio = enviosur;
        break;

    case 5:
        costoenvio = envioeste;
        break;

    default:
        console.log("Zona inválida");
}

let total = importe + costoenvio;

console.log("Importe de compra:", importe);
console.log("Costo de envío:", costoenvio);
console.log("Total a pagar:", total);