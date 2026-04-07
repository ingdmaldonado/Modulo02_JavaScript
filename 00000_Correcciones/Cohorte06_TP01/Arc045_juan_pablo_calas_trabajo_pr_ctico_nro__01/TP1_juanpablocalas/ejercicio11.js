/* 
Ejercicio Nro. 11: Estructuras Condicionales (if/else)

Un local de venta de comida rápida, lanza su aplicación online que le permite al cliente pagar por la misma y además aclara que se incluye en el precio total el costo del envío dependiendo la zona en la que vive el cliente.
1) Zona Centro = $ 2500,00
2) Zona Oeste = $ 3750,00
3) Zona Norte = $ 4225,00
4) Zona Sur = $ 5222,50
5) Zona Este = $ 4288,50
Debe ingresar el importe de la compra, sumarle el costo del envío en función de la zona del cliente.
Recomendación: Es mejor guardar los costos de envío en variables, de tal forma que si en un futuro cambian, no haya que tocar la lógica del programa, ni ver todo el recorrido, sino simplemente cambiar los precios.
*/
{

    let PrecioCompra = 0;
    let MontoEnvio;
    let ZonaEnvio = 0;
    let TotalCompra = 0;

    let EnvioZonaCentro = 2500;
    let EnvioZonaOeste = 3750;
    let EnvioZonaNorte = 4225;
    let EnvioZonaSur = 5222.50;
    let EnvioZonaEste = 4288.50;

    ZonaCorrecta = true;

    PrecioCompra = Number(prompt(`Por Favor ingrese el monto de la Compra:`));
    console.log(`El Monto de Compra ingresado es $ ${PrecioCompra}`)
    ZonaEnvio = Number(prompt(`Por favor ingrese la Zona de Envio de la Compra -- 1-> CENTRO / 2-> OESTE / 3-> NORTE / 4-> SUR / 5-> ESTE /`));

    switch(ZonaEnvio)
    {
        case 1: //CENTRO
            console.log(`Elegio envio a ZONA CENTRO - El Monto del Envio es ${EnvioZonaCentro}`)
            MontoEnvio = EnvioZonaCentro
            break;
        case 2: //OESTE
            console.log(`Elegio envio a ZONA OESTE - El Monto del Envio es ${EnvioZonaOeste}`)
            MontoEnvio = EnvioZonaOeste
        case 3: //NORTE
            console.log(`Elegio envio a ZONA NORTE - El Monto del Envio es ${EnvioZonaNorte}`)
            MontoEnvio = EnvioZonaNorte
            break;  
        case 4: //SUR
            console.log(`Elegio envio a ZONA SUR - El Monto del Envio es ${EnvioZonaSur}`)
            MontoEnvio = EnvioZonaSur
            break;  
        case 5: //ESTE
            console.log(`Elegio envio a ZONA ESTE - El Monto del Envio es ${EnvioZonaEste}`)
            MontoEnvio = EnvioZonaEste
            break;  
        default:
            ZonaCorrecta = false
            console.log(`Zona Ingresada INCORRECTA`)    
            break;                             
    }

    if(ZonaCorrecta === true)
    {
        TotalCompra = PrecioCompra + MontoEnvio
        console.log(`El tota al PAGAR es de $ ${TotalCompra}`) 
    }
    else
    {
        console.log(`Ingreso un Codigo de Zona INCORRECTA Vuelva a Ingresar la Zona`) 
    }
        
}