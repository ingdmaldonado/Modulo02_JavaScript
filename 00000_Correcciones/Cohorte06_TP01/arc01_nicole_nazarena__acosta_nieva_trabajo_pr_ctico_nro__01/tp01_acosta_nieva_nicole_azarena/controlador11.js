/*Ejercicio Nro. 11: Estructuras Condicionales (if/else)
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
no haya que tocar la lógica del programa, ni ver todo el recorrido, sino simplemente cambiar los precios*/

{
let importeCompra = Number(prompt(`ingrese el importe de la compra`));

let zonaCliente = prompt(`ingrese la zona del cliente 1) Zona Centro 2) Zona Oeste 3) Zona Norte 4) Zona Sur 5) Zona Este`);

let zonaCentro = 2500.00;

let zonaOeste = 3750.00;

let zonaNorte = 4225.00;

let zonaSur = 5222.50;

let zonaEste = 4288.50;

let costoDelEnvio = 0;

let totalAPagar = 0;

switch (zonaCliente) {
    case "1":
        costoDelEnvio = zonaCentro;
        break;
    case "2":
        costoDelEnvio = zonaOeste;
        break;
    case "3":
        costoDelEnvio = zonaNorte;
        break;
    case "4":
        costoDelEnvio = zonaSur;
        break;
    case "5":
        costoDelEnvio = zonaEste;
        break;
    default:
        console.log(`la zona ingresada es incorrecta`);
        break
}
totalAPagar = importeCompra + costoDelEnvio;

console.log(`el importe de la compra es ${importeCompra}`);

console.log(`el costo del envío es ${costoDelEnvio}`);

console.log(`el total a pagar es ${totalAPagar}`);
}