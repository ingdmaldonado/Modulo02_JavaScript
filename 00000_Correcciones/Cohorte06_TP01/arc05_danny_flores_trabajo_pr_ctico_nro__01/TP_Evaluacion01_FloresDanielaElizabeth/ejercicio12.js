/* TP - EJERCICIO NRO. 12
   El programa One Shot Plus fue un beneficio implementado en la provincia de Catamarca en
   conjunto con el Banco Nación para incentivar el consumo en comercios  locales.
   El beneficio consistía en:
    50% de reintegro sobre el monto de la compra
    tope máximo de reintegro: $80.000
    válido para compras realizadas los días viernes, sábado y domingo
   El programa debe:
   1. Solicitar al usuario:
       el día de la compra
       el importe de la compra
   2. Verificar si la compra fue realizada un viernes, sábado o domingo.
       Si no fue uno de esos días, no se aplica el beneficio.
    3. Si corresponde el beneficio:
       calcular el 50% del importe de la compra
       verificar si el reintegro supera el tope de $80.000
       si lo supera, aplicar solamente el tope
    4. Mostrar:
       día de la compra
       importe de la compra
       reintegro obtenido
       importe final pagado por el cliente.
*/

{
    /*  1 - Día e importe de compra */

    let dia = 0;
    dia = Number(prompt(`Ingrese dia de compra:
1=Lunes  2=Martes  3=Miércoles  4=Jueves
5=Viernes  6=Sábado  7=Domingo`));

    let importeCompra = 0;
    importeCompra = Number(prompt(`Ingrese el Importe de la compra`));

    let descuento   = 0;
    let esDiaValido = true;

    switch(dia)
    {
        case 1: { console.log(`dia lunes`);     descuento = 0; break; }
        case 2: { console.log(`dia martes`);    descuento = 0; break; }
        case 3: { console.log(`dia miercoles`); descuento = 0; break; }
        case 4: { console.log(`dia jueves`);    descuento = 0; break; }
        case 5: { console.log(`dia viernes`);   descuento = (importeCompra * 50) / 100; break; }
        case 6: { console.log(`dia sábado`);    descuento = (importeCompra * 50) / 100; break; }
        case 7: { console.log(`día domingo`);   descuento = (importeCompra * 50) / 100; break; }
        default:
        {
            console.log(`dia inválido ingrese nuevamente`);
            esDiaValido = false;
            break;
        }
    }

    /* ETAPA 2 - Verificar si el día es valido */

    if(esDiaValido)
    {
        descuento = descuento > 80000 ? 80000 : descuento;
        console.log(`Descuento final: ${descuento}`);
    }
    else
    {
        console.log(`El usuario ingresó un día incorrecto`);
    }

    /* ETAPA 3 - Calcular el beneficio a pagar */

    let totalAPagar = 0;
    totalAPagar = importeCompra - descuento;

    console.log(`Día de Compra: ${dia}`);
    console.log(`Importe de Compra: ${importeCompra}`);
    console.log(`Reintegro Obtenido: ${descuento}`);
    console.log(`Importe Final Pagado: ${totalAPagar}`);
}
