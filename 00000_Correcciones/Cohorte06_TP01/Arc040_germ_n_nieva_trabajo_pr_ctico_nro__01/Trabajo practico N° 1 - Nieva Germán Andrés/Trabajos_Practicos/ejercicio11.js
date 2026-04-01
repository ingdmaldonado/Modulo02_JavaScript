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
no haya que tocar la lógica del programa, ni ver todo el recorrido, sino simplemente cambiar los precios.
 */

let zponaCentro= 2500;
let zonaOeste= 3750;
let zonaNorte= 4225;
let zonaSur= 5222.50;
let zonaEste= 4288.50;
let importeCompra= Number(prompt("Ingrese el importe de la compra:"));
let zona= Number(prompt("Ingrese la zona del cliente: 1. Zona Centro, 2. Zona Oeste, 3. Zona Norte, 4. Zona Sur, 5. Zona Este"));
let costoEnvio=0;

switch(zona){
    case 1:
        costoEnvio= zponaCentro;
        break;
    case 2:
        costoEnvio= zonaOeste;
        break;
    case 3:
        costoEnvio= zonaNorte;
        break;
    case 4:
        costoEnvio= zonaSur;
        break;
    case 5:
        costoEnvio= zonaEste;
        break;
    default:
        console.log("Zona no válida");
}

let totalFinal= importeCompra+costoEnvio;
console.log(`El importe de la compra es ${importeCompra}, el costo de envío es ${costoEnvio} y el total a pagar es ${totalFinal}`);
