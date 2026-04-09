/* Ejercicio Nro. 11:

Estructuras Condicionales (if/else) 
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
    // costos de los envios
    let zonaCentro = 2500;
    let zonaOeste = 3750;
    let zonaNorte = 4225;
    let zonaSur = 5222.50;
    let zonaEste = 4288.50;

    let importeCompra = 0;
    importeCompra = Number(prompt(`Ingrese el importe de la compra:`));

    let zonaCliente = 0;
    zonaCliente = Number(prompt(`Ingrese la zona en la que vive: 1-centro ; 2-oeste ; 3-norte ; 4-sur ; 5-este`));

    console.log(`Importe de la compra: ${importeCompra}`);

    let total = 0;

    if(zonaCliente === 1) // centro
    {
        console.log(`El costo del envio hasta zona centro es de ${zonaCentro}`);
        total = importeCompra + zonaCentro;
    }
    else if (zonaCliente === 2){ // oeste
        console.log(`El costo del envio hasta zona oeste es de ${zonaOeste}`);
        total = importeCompra + zonaOeste;
    }
    else if (zonaCliente === 3){ // norte
        console.log(`El costo del envio hasta zona norte es de ${zonaNorte}`);
        total = importeCompra + zonaNorte;
    }
    else if (zonaCliente === 4){ // sur
        console.log(`El costo del envio hasta zona sur es de ${zonaSur}`);
        total = importeCompra + zonaSur;
    }
    else if (zonaCliente === 5){  // este
        console.log(`El costo del envio hasta zona este es de ${zonaEste}`);
        total = importeCompra + zonaEste;
    }
    else {
        console.log(`Zona de envio incorrecta, intente nuevamente`);
    }

    console.log(`Importe total a pagar junto con el envio es de: ${total}`);

}