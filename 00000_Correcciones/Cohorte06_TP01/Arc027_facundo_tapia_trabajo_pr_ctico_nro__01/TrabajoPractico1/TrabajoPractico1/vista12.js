/*Ejercicio Nro. 12: Estructuras Condicionales (if/else)
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

    diaCompra = Number(prompt(`Ingrese el  dia de la compra (1 - Lunes , 2 - Martes , 3 - Miercoles, 4 - Jueves ,5 - Viernes , 6 - Sabado , 7 - Domingo)`));

    let importeCompra =  0;

    importeCompra = Number(prompt(`Ingrese el importe de la compra`))

    let descuento = 0;

    let esDiaValido = true;

    switch(diaCompra)
    {
        case 1 :
        {
            console.log(`Usted eligio el dia Lunes`);
            descuento = 0;
            break;
        }
        case 2:
        {
            console.log(`Usted eligio el dia Martes`);
            descuento = 0;
            break;
        }
        case 3:
        {
            console.log(`Usted eligio el dia Miercoles`);
            descuento = 0;
            break;
        }
        case 4:
        {
            console.log(`Usted eligio el dia Jueves`);
            descuento = 0;
            break;
        }
        case 5:
        {
            console.log(`Usted eligio el dia Viernes`);
            descuento = (importeCompra * 50)/100;
            break;
        }
        case 6:
        {
            console.log(`Usted eligio el dia Sabado`);
            descuento = (importeCompra * 50)/100;
            break;
        }
        case 7:
        {
            console.log(`Usted eligio el dia Viernes`);
            descuento = (importeCompra * 50)/100;
            break;
        }
        default:
        {
            console.log(`Ingrese un dia valido`);
            esDiaValido = false;
            break;
        }
    }
    if(esDiaValido)
    {
        console.log(`EL usuario ingreso un dia correcto`);

        descuento = descuento > 80000? 80000:descuento;

        console.log(`descuento final:`,descuento);

    }
    else
    {
        console.log(`El usuario ingreso un dia incorrecto`);
    }

    let totalAPagar = 0;

    totalAPagar = importeCompra - descuento;

    console.log(`Importe compra: ${importeCompra},Descuento ${descuento},Total a Pagar: ${totalAPagar}`);



}