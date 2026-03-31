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

{
    let importeDeCompra = 0;
    let zonaDeEnvio = 0;
    let zonaCentro = 2500;
    let zonaOeste = 2750;
    let zonaNorte = 4225;
    let zonaSur = 5222;
    let zonaEste = 4288;
    let costoFinal = 0;

    importeDeCompra = Number(prompt(`ingrese el monto de su compra`))
    zonaDeEnvio = Number(prompt(`zona donde se realizará el envio: 1- zona centro, 2-zona oeste, 3-zona norte, 4-zona sur, 5-zona este`))

    switch(zonaDeEnvio)
    {
        case 1:
            {
                costoFinal = (importeDeCompra + zonaCentro)
                break;
            }
        case 2:
            {
               costoFinal = (importeDeCompra + zonaOeste)
                break;
            }
        case 3:
            {
               costoFinal = (importeDeCompra + zonaNorte)
                break;
            }
        case 4:
            {
               costoFinal = (importeDeCompra + zonaSur)
                break;
            }
        case 5:
            {
               costoFinal = (importeDeCompra + zonaEste)
                break;
            }
        default:
            {
                console.log(`zona invalida, intente nuevamente`)
                break
            }
    }

    if(zonaDeEnvio >= 1 && zonaDeEnvio <= 5)
    {
        console.log(`el monto final a pagar es: $${costoFinal}`)
    }
    else
    {
        console.log(`zona no disponible`)
    }

}