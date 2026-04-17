/*
Ejercicio Nro. 11: Estructuras Condicionales (if/else)
Un local de venta de comida rápida, lanza su aplicación online que le permite al cliente pagar por la misma y además aclara que se incluye en el precio total el costo del envío dependiendo la zona en la que vive el
cliente.
1) Zona Centro = $ 2500,00
2) Zona Oeste = $ 3750,00
3) Zona Norte = $ 4225,00
4) Zona Sur = $ 5222,50
5) Zona Este = $ 4288,50
Debe ingresar el importe de la compra, sumarle el costo del envío en función de la zona del cliente.
Recomendación: Es mejor guardar los costos de envío en variables, de tal forma que si en un futuro cambian, no haya que tocar la lógica del programa, ni ver todo el recorrido, sino simplemente cambiar los precios.
*/

{
    let costoEnvio = 0;
    let envioCentro = 2500;
    let envioOeste = 3750;
    let envioNorte = 4225;
    let envioSur = 5222.5;
    let envioEste = 4288.5;

    let importeCompra = 0;

    importeCompra = Number(prompt(`Ingrese el importe de la compra`));

    let zona = 0;
    let nombreZona = "";
    let operacionCorrecta = false;

    zona = Number(prompt(`Ingrese la zona del cliente: 1)centro 2)oeste 3)norte 4)sur 5)Este`));


    switch(zona)
    {
        case 1:
            {
                costoEnvio = envioCentro;
                nombreZona = "Centro";
                operacionCorrecta = true;
                break;
            }
        case 2:
            {
                costoEnvio = envioOeste;
                nombreZona = "Oeste";
                operacionCorrecta = true;
                break;
            }
        case 3:
            {
                costoEnvio = envioNorte;
                nombreZona = "Norte";
                operacionCorrecta = true;
                break;
            }
        case 4:
            {
                costoEnvio = envioSur;
                nombreZona = "Sur";
                operacionCorrecta = true;
                break;
            }
        case 5:
            {
                costoEnvio = envioEste;
                nombreZona = "Este";
                operacionCorrecta = true;
                break;
            }
        default:
            {
                operacionCorrecta = false;
                break;
            }

    }

    let totalFinal = 0;

    if (operacionCorrecta)
    {
        totalFinal = importeCompra + costoEnvio;
        console.log(`Zona: ${nombreZona}`);
        console.log (`El monto a pagar es: ${totalFinal} (incluye envio)`);

    }
    else
    {
        console.log(`Ingrese una opcion correcta`);
    }

}

