/*
    Ejercicio Nro. 12: Estructuras Condicionales (if/else)
    El programa One Shot Plus fue un beneficio implementado en la provincia de Catamarca en conjunto con el Banco Nación para incentivar el consumo en comercios locales.
    El beneficio consistía en:
         50% de reintegro sobre el monto de la compra
         tope máximo de reintegro: $80.000
         válido para compras realizadas los días viernes, sábado y domingo

    El programa debe:
        1. Solicitar al usuario:
         el día de la compra
         el importe de la compra
*/

{
    let diaDeCompra = 0;
    diaDeCompra = Number(prompt(`Ingrese el Día de la Compra: 1) Lunes | 2) Martes | 3) Miércoles | 4) Jueves | 5) Viernes | 6) Sábado | 7) Domingo`));

    let importeDeCompra = 0;
    importeDeCompra = Number(prompt(`Ingrese el Importe de la Compra.`));

    let reintegro = 0;

    let totalAPagar = 0;

    let operacionCorrecta = true;

    switch(diaDeCompra){
        case 1: // Lunes
        {
            console.log(`Día de la Compra: Lunes | ONE SHOT Plus: No Disponible`);

            totalAPagar = importeDeCompra;

            console.log(`Total a Pagar: $${totalAPagar}`);

            operacionCorrecta

            break;
        }

        case 2: // Martes
        {
            console.log(`Día de la Compra: Martes | ONE SHOT Plus: No Disponible`);

            totalAPagar = importeDeCompra;

            console.log(`Total a Pagar: $${totalAPagar}`);

            operacionCorrecta

            break;
        }

        case 3: // Miércoles
        {
            console.log(`Día de la Compra: Miércoles | ONE SHOT Plus: No Disponible`);

            totalAPagar = importeDeCompra;

            console.log(`Total a Pagar: $${totalAPagar}`);

            operacionCorrecta

            break;
        }

        case 4: // Jueves
        {
            console.log(`Día de la Compra: Jueves | ONE SHOT Plus: No Disponible`);

            totalAPagar = importeDeCompra;

            console.log(`Total a Pagar: $${totalAPagar}`);

            operacionCorrecta

            break;
        }

        case 5: // Viernes
        {
            console.log(`Día de la Compra: Viernes | ONE SHOT Plus: Disponible`);

            reintegro = (importeDeCompra/2);

            reintegro = reintegro > 80000? 80000 : reintegro;

            totalAPagar = importeDeCompra - reintegro;

            console.log(`Importe de Compra: $${importeDeCompra} | Reintegro: $${reintegro} | Total a Pagar: $${totalAPagar}`);

            operacionCorrecta

            break;
        }

        case 6: // Sábado
        {
            console.log(`Día de la Compra: Sábado | ONE SHOT Plus: Disponible`);

            reintegro = (importeDeCompra/2);

            reintegro = reintegro > 80000? 80000 : reintegro;

            totalAPagar = importeDeCompra - reintegro;

            console.log(`Importe de Compra: $${importeDeCompra} | Reintegro: $${reintegro} | Total a Pagar: $${totalAPagar}`);

            operacionCorrecta

            break;
        }

        case 7: // Domingo
        {
            console.log(`Día de la Compra: Domingo | ONE SHOT Plus: Disponible`);

            reintegro = (importeDeCompra/2);

            reintegro = reintegro > 80000? 80000 : reintegro;

            totalAPagar = importeDeCompra - reintegro;

            console.log(`Importe de Compra: $${importeDeCompra} | Reintegro: $${reintegro} | Total a Pagar: $${totalAPagar}`);

            operacionCorrecta

            break;
        }

        default: // Día de Compra: NO Válido
        {
            console.log(`Día de la Compra NO Válido. Por favor, intente nuevamente.`)

            operacionCorrecta = false;

            break;
        }
    }
}