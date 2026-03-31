/*Ejercicio Nro. 11: Estructuras Condicionales (if/else) 
Un local de venta de comida rápida, lanza su aplicación online que le permite al cliente pagar por la misma y además aclara que se incluye en el precio total el costo del envío dependiendo la zona en la que vive el cliente. 
1) Zona Centro = $ 2500,00 
2) Zona Oeste = $ 3750,00 
3) Zona Norte = $ 4225,00 
4) Zona Sur = $ 5222,50 
5) Zona Este = $ 4288,50 
Debe ingresar el importe de la compra, sumarle el costo del envío en función de la zona del cliente.  
Recomendación: Es mejor guardar los costos de envío en variables, de tal forma que si en un futuro cambian, no haya que tocar la lógica del programa, ni ver todo el recorrido, sino simplemente cambiar los precios.*/

{
    let importeCompra = Number(prompt(`Ingrese el monto de compra:`));
    let zonaEnvio = Number(prompt(`Ingrese zona de envío: 0 - Sin envío; 1 - Z. Centro; 2 - Z. Oeste; 3 - Z. Norte; 4 - Z. Sur; 5 - Z. Este.`));

    switch(zonaEnvio)
    {
        case 0:
            {
                let costoEnvio = 0;
                let totalAPagar = importeCompra + costoEnvio;
                console.log(`Importe de compra: ${importeCompra}`);
                console.log(`Sin envío`);
                console.log(`Total a pagar: ${totalAPagar}`);
                break;
            }
        case 1:
            {
                let costoEnvio = 2500;
                let totalAPagar = importeCompra + costoEnvio;
                console.log(`Importe de compra: ${importeCompra}`);
                console.log(`Envío a zona centro: ${costoEnvio}`);
                console.log(`Total a pagar: ${totalAPagar}`);
                break;
            }
        case 2:
            {
                let costoEnvio = 3750;
                let totalAPagar = importeCompra + costoEnvio;
                console.log(`Importe de compra: ${importeCompra}`);
                console.log(`Envío a zona oeste: ${costoEnvio}`);
                console.log(`Total a pagar: ${totalAPagar}`);
                break;
            }
        case 3:
            {
                let costoEnvio = 4225;
                let totalAPagar = importeCompra + costoEnvio;
                console.log(`Importe de compra: ${importeCompra}`);
                console.log(`Envío a zona norte: ${costoEnvio}`);
                console.log(`Total a pagar: ${totalAPagar}`);
                break;
            }
        case 4:
            {
                let costoEnvio = 5222.50;
                let totalAPagar = importeCompra + costoEnvio;
                console.log(`Importe de compra: ${importeCompra}`);
                console.log(`Envío a zona sur: ${costoEnvio}`);
                console.log(`Total a pagar: ${totalAPagar}`);
                break;
            }
        case 5:
            {
                let costoEnvio = 4288.50;
                let totalAPagar = importeCompra + costoEnvio;
                console.log(`Importe de compra: ${importeCompra}`);
                console.log(`Envío a zona este: ${costoEnvio}`);
                console.log(`Total a pagar: ${totalAPagar}`);
                break;
            }
        default:
            {
                console.log(`Zona de envío incorrecta, indique nuevamente.`)
            }
    }
}