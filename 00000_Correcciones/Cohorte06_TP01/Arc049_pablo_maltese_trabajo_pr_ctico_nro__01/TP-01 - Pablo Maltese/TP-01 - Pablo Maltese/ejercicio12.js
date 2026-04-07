/*
    Ejercicio Nro. 12: Estructuras Condicionales (if/else)

    El programa One Shot Plus fue un beneficio implementado en la provincia de Catamarca en
    conjunto con el Banco Nación para incentivar el consumo en comercios locales.

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
    let diaCompra = 0;
    let importeCompra = 0;
    let importeFinalPagado = 0;
    let descuento = 0;
    let compraValida = true;

    diaCompra = Number(prompt('Ingrese el dia de la compra: 1- Lunes; 2- Martes; 3- Miercoles; 4- Jueves; 5- Viernes; 6- Sábado; 7- Domingo'));

    importeCompra = Number(prompt('Ingrese el importe de la compra'));

    switch (diaCompra)
    {
        case 1:{
            console.log(`Ud ingreso el dia Lunes`);
            descuento = 0;
            break;
        }
        case 2:{
            console.log(`Ud ingreso el dia Martes`);
            descuento = 0;
            break;            
        }
        case 3:{
            console.log(`Ud ingreso el dia Miercoles`);
            descuento = 0;
            break;
        }
        case 4:{
            console.log(`Ud ingreso el dia Jueves`);
            descuento = 0;
            break;
        }
        case 5:{
            console.log(`Ud ingreso el dia Viernes`);
            descuento = (importeCompra * 50) / 100;
            break;
        }
        case 6:{
            console.log(`Ud ingreso el dia Sábado`);
            descuento = (importeCompra * 50) / 100;
            break;
        }
        case 7:{
            console.log(`Ud ingreso el dia Domingo`);
            descuento = (importeCompra * 50) / 100;
            break;
        }
         default:{
            console.log(`Dia invalido, ingrese nuevamente`);
            compraValida = false;
            break;
        }
    }

    //Validacion de la compra
    if( compraValida )
    {
        descuento = (descuento > 80000)? 80000 : descuento;
        importeFinalPagado = (importeCompra - descuento);

        //Mostrar por pantalla
        console.log(`Importe de la compra: $${importeCompra}`);
        console.log(`Reintegro obtenido: ${descuento}`);
        console.log(`Importe final pagado por el cliente: $${importeFinalPagado}`);
    }
}