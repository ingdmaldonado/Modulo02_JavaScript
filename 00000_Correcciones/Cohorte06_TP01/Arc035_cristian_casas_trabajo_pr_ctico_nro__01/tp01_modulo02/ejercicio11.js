/*
Ejercicio Nro. 11: Estructuras Condicionales (if/else)
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

// Variable total
let totalFinal=0;

// Variables de envios
let zonaCentro=2500;
let zonaOeste=3750;
let zonaNorte=4225;
let zonaSur=5222.50;
let zonaEste=4288.50;

// Ingresar importe de compra
let importeCompra=(Number(prompt(`Ingresar importe de compra: `)));
let zonaCliente=prompt(`Zona del cliente: Centro, Norte, Sur, Este y Oeste`);

{
    if(zonaCliente.toLowerCase() === "centro") {
    totalFinal = importeCompra + zonaCentro;

    }
    else if(zonaCliente.toLowerCase() === "norte") {
        totalFinal = importeCompra + zonaNorte;

    }
    else if(zonaCliente.toLowerCase() === "sur") {
        totalFinal = importeCompra + zonaSur;

    }
    else if(zonaCliente.toLowerCase() === "este") {
        totalFinal = importeCompra + zonaEste;

    }
    else if(zonaCliente.toLowerCase() === "oeste") {
        totalFinal = importeCompra + zonaOeste;

    }
    else {
        console.log("Zona inválida");
    }
}

console.log("Importe de compra: " + importeCompra);
console.log("Zona del cliente: " + zonaCliente);
console.log("Total final: " + totalFinal);

