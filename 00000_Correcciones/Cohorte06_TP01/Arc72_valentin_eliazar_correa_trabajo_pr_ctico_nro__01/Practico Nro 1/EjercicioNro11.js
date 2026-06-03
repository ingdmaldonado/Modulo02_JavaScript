/*
Ejercicio Nro. 11: Estructuras Condicionales (if/else) 
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
    let zonaCentro = 2500.00 
    let zonaOeste = 3750.00 
    let zonaNorte = 4225.00 
    let zonaSur = 5222.50 
    let zonaEste = 4288.50 

    let importeDeCompra = 0;
    let costoDeEnvio = 0;
    let importeTotal = 0;

    let zona = 0;

    importeDeCompra = Number(prompt(`Ingrese el importe de su compra`));
    zona = Number(prompt(`Ingrese zona:1 Centro,2 Oeste,3 Norte,4 Sur,5 Este`));

    switch(zona)
    {
        case 1:
            costoDeEnvio = zonaCentro;
        break;

        case 2:
            costoDeEnvio = zonaOeste;
        break;

        case 3:
            costoDeEnvio = zonaNorte;
        break;

        case 4:
            costoDeEnvio = zonaSur;
        break;

        case 5:
            costoDeEnvio = zonaEste;
        break;

        default:
            console.log(`seleccione una zona de las opciones`);
        break;
    }
    importeTotal = importeDeCompra + costoDeEnvio;

    console.log(`Costo de envio: ${costoDeEnvio}`);
    console.log(`Total final: ${importeTotal}`);
}







