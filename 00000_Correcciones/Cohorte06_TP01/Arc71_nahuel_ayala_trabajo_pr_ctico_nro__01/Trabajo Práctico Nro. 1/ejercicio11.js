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
    let importeDeCompra = 0;
    importeDeCompra = Number(prompt(`Ingrese el importe de la compra`));

    let zonaDeEnvio = 0;
    zonaDeEnvio = Number(prompt(`Zona de Envio: 1) Centro | 2) Oeste | 3) Norte | 4) Sur | 5) Este`));

    let zonaCentro = 2500;
    let zonaOeste = 3750;
    let zonaNorte = 4225;
    let zonaSur = 5222.50;
    let zonaEste = 4288.50;

    let operacionCorrecta = true;

    let totalAPagar = 0;

    switch(zonaDeEnvio){
        case 1: // Zona Centro
        {
            console.log(`Zona de Envio: Centro ($2.500,00)`);

            totalAPagar = importeDeCompra + zonaCentro;

            console.log(`Importe de Compra: $${importeDeCompra} | Total a Pagar: $${totalAPagar}`);

            operacionCorrecta

            break;
        }

        case 2: // Zona Oeste
        {
            console.log(`Zona de Envio: Oeste ($3.750,00)`);

            totalAPagar = importeDeCompra + zonaOeste;

            console.log(`Importe de Compra: $${importeDeCompra} | Total a Pagar: $${totalAPagar}`);

            operacionCorrecta

            break;
        }

        case 3: // Zona Norte
        {
        console.log(`Zona de Envio: Norte ($4.225,00)`);

        totalAPagar = importeDeCompra + zonaNorte;

        console.log(`Importe de Compra: $${importeDeCompra} | Total a Pagar: $${totalAPagar}`);

        operacionCorrecta

        break;
        }

        case 4: // Zona Sur
        {
            console.log(`Zona de Envio: Sur ($5.222,50)`);

            totalAPagar = importeDeCompra + zonaSur;

            console.log(`Importe de Compra: $${importeDeCompra} | Total a Pagar: $${totalAPagar}`);

            operacionCorrecta

            break;
        }

        case 5: // Zona Este
        {
            console.log(`Zona de Envio: Este ($4.288,50)`);

            totalAPagar = importeDeCompra + zonaEste;

            console.log(`Importe de Compra: $${importeDeCompra} | Total a Pagar: $${totalAPagar}`);

            operacionCorrecta

            break;
        }

        default: // Zona de Envio NO Válido
        {
            console.log(`Zona de Envio NO Válido. Por favor, intente nuevamente.`);

            operacionCorrecta = false;

            break;
        }
    }
}