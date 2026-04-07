/*

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
    let importeDeCompra = 0;
    let zonaEnvio =0;
    let zonaCentro = 2500;
    let zonaOeste = 3750;
    let zonaNorte = 4225;
    let zonaSur = 5222.50;
    let zonaEste = 4288.50;

    importeDeCompra = Number(prompt(`Ingrese el importe de la compra`));
    zonaEnvio = Number(prompt(`Ingrese la zona: 1 Centro, 2 Oeste, 3 Norte, 4 Sur, 5 Este`));

    switch(zonaEnvio)
    {
        case 1: {
                    console.log(`El importe total es: ${importeDeCompra+zonaCentro}`);
                    break;
                }

        case 2: {
                    console.log(`El importe total es: ${importeDeCompra+zonaOeste}`);
                    break;
                }

        case 3: {
                    console.log(`El importe total es: ${importeDeCompra+zonaNorte}`);
                    break;
                }

        case 4: {
                    console.log(`El importe total es: ${importeDeCompra+zonaSur}`);
                    break;
                }

        case 5: {
                    console.log(`El importe total es: ${importeDeCompra+zonaEste}`);
                    break;
                }

        default: {console.log(`La opcion es incorrecta`);}
    }
}