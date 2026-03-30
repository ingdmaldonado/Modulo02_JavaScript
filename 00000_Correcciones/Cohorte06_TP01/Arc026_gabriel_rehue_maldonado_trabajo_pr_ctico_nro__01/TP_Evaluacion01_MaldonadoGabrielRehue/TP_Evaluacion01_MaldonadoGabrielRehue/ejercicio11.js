/* TP - EJERCICIO NRO. 11
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

{
    let envioCentro = 2500;
    let envioOeste  = 3750;
    let envioNorte  = 4225;
    let envioSur    = 5222.50;
    let envioEste   = 4288.50;

    let importeCompra = 0;
    let zona          = 0;

    importeCompra = Number(prompt(`Ingrese el importe de su compra`));
    zona = Number(prompt(`Indique su zona de envío:
1 - Zona Centro
2 - Zona Oeste
3 - Zona Norte
4 - Zona Sur
5 - Zona Este`));

    let costoEnvio        = 0;
    let operacionCorrecta = false;

    switch(zona)
    {
        case 1:
            {
                console.log(`Zona Centro seleccionada`);
                operacionCorrecta = true;
                costoEnvio = envioCentro;
                break;
            }
        case 2:
            {
                console.log(`Zona Oeste seleccionada`);
                operacionCorrecta = true;
                costoEnvio = envioOeste;
                break;
            }
        case 3:
            {
                console.log(`Zona Norte seleccionada`);
                operacionCorrecta = true;
                costoEnvio = envioNorte;
                break;
            }
        case 4:
            {
                console.log(`Zona Sur seleccionada`);
                operacionCorrecta = true;
                costoEnvio = envioSur;
                break;
            }
        case 5:
            {
                console.log(`Zona Este seleccionada`);
                operacionCorrecta = true;
                costoEnvio = envioEste;
                break;
            }
        default:
            {
                console.log(`Zona inválida. Ingrese una opción entre 1 y 5`);
                operacionCorrecta = false;
                costoEnvio = 0;
                break;
            }
    }

    let totalAPagar = 0;

    if(operacionCorrecta)
    {
        totalAPagar = importeCompra + costoEnvio;
        console.log(`Importe Compra: ${importeCompra} Costo Envío: ${costoEnvio} Total a Pagar: ${totalAPagar}`);
    }
    else
    {
        console.log(`Sr. Ud. eligió una zona incorrecta. Intente nuevamente`);
    }
}
