/* Ejercicio Nro. 11: Estructuras Condicionales (if/else)
Un local de venta de comida rápida, lanza su aplicación online que le permite al cliente pagar por la misma y además aclara que se incluye en el precio total el costo del envío dependiendo la zona en la que vive el cliente.
1) Zona Centro = $ 2500,00
2) Zona Oeste = $ 3750,00
3) Zona Norte = $ 4225,00
4) Zona Sur = $ 5222,50
5) Zona Este = $ 4288,50
Debe ingresar el importe de la compra, sumarle el costo del envío en función de la zona del cliente.
Recomendación: Es mejor guardar los costos de envío en variables, de tal forma que si en un futuro cambian, no haya que tocar la lógica del programa, ni ver todo el recorrido, sino simplemente cambiar los precios. */

let costoEnvioZonaCentro = 2500;
let costoEnvioZonaOeste = 3750;
let costoEnvioZonaNorte = 4225;
let costoEnvioZonaSur = 5222.50;
let costoEnvioZonaEste = 4288.50;

let importeCompra = 0;
importeCompra = Number(prompt("Ingrese el importe de la compra:"));

let zona = 0;
zona = Number(prompt("Ingrese la zona de envío: 1. Zona Centro, 2. Zona Oeste, 3. Zona Norte, 4. Zona Sur, 5. Zona Este"));

let costoEnvio = 0;

switch (zona) {
    case 1: {
        costoEnvio = costoEnvioZonaCentro;
        break;
    }
    case 2: {
        costoEnvio = costoEnvioZonaOeste;
        break;
    }
    case 3: {
        costoEnvio = costoEnvioZonaNorte;
        break;
    }
    case 4: {
        costoEnvio = costoEnvioZonaSur;
        break;
    }
    case 5: {
        costoEnvio = costoEnvioZonaEste;
        break;
    }   
    default: {
        console.log("Zona no válida");
        break;
    }   
    console.log(`El costo de envío para la zona seleccionada es: ${costoEnvio}`);
}
let totalCompra = importeCompra + costoEnvio;
console.log(`El total a pagar por la compra es: ${totalCompra}`);