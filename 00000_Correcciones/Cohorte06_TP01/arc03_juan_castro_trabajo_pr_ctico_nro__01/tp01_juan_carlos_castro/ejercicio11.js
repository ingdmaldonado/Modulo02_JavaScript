/*

Ejercicio Nro. 11: Estructuras Condicionales (if/else) 
Un local de venta de comida rápida, lanza su aplicación online que le permite al cliente pagar por la misma 
y  además  aclara  que  se  incluye  en  el  precio  total  el  costo  del  envío  dependiendo  la  zona  en  la  que  vive  el 
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

{

    let importeDeCompra = 0;
    let costoDeEnvio = 0;
    let importeTotal = 0;
    let zona = 0;
    let zCentro = 2500.00;
    let zOeste = 3750.00;
    let zNorte = 4225.00;
    let zSur = 5222.50;
    let zEste = 4288.50;

    importeDeCompra = Number(prompt(`Ingrse el importe:`));
    zona = Number(prompt(`Elija una zona para el envío: 1-Centro 2-Oeste 3-Norte 4-Sur 5-Este`));

    switch (zona) {
        case 1:
            importeTotal = importeDeCompra + zCentro;
            costoDeEnvio = zCentro
            break;
        case 2:
            importeTotal = importeDeCompra + zOeste;
            costoDeEnvio = zOeste;
            break;
        case 3:
            importeTotal = importeDeCompra + zNorte;
            costoDeEnvio = zNorte;
            break;
        case 4:
            importeTotal = importeDeCompra + zSur;
            costoDeEnvio = zSur;
            break;
        case 5:
            importeTotal = importeDeCompra + zEste;
            costoDeEnvio = zEste;
            break;
        default:
            console.log(`Ingrese una opcion valida`)
            break;
    }

    console.log(`El total a pagar es: ${importeTotal}, el importe de la compra es: ${importeDeCompra}, el importe del envio es: ${costoDeEnvio}`);

}