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
    let importeCompra = 0;

    importeCompra=Number(prompt(`Ingrese el importe de la compra`));

    let zona = 0;

    zona = Number(prompt(`Ingrese la zona de envio (1- zona centro, 2 - zona oeste, 3 - zona norte, - 4 zona sur, 5 zona Este)`));

let zonaCentro =2500.00;
let zonaOeste = 3750.00;
let zonaNorte = 4225.00;
let zonaSur =  5222.50;
let zonaEste = 4288.50;

let costoEnvio = 0;
let totalfinal = 0;

switch(zona)
{
    case 1:
        {
            costoEnvio = zonaCentro;
            break;
        }
    case 2:
        {
            costoEnvio = zonaOeste;
            break;
        }
    case 3:
        {
            costoEnvio = zonaNorte;
            break;
        }
    case 4:
        {
            costoEnvio = zonaSur;
            break;
        }
    case 5:
        {
            costoEnvio = zonaEste;
            break;
        }
    default:
        {
            console.log(`Ingrese una zona correcta`);
            break;
        }
}

    totalfinal = importeCompra + costoEnvio;

    console.log(`Importe de compra ${importeCompra},costo de envio ${costoEnvio},total a pagar ${totalfinal}`);
}