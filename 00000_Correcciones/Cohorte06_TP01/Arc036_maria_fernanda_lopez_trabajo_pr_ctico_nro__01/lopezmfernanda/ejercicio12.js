/* Ejercicio Nro. 12: Estructuras Condicionales (if/else)
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
 importe final pagado por el cliente */

{ /* Etapa 1 */
    let dia= 0;
    dia= Number(prompt(`Ingrese dia de compra`));
    console.log(dia);
    let importeCompra=0;
    importeCompra= Number(prompt(`Ingrese el importe de la compra`));
    console.log(importeCompra);
    let descuento= 0;
    let esDiaValido= true;

    switch(dia)
    {
        /* lunes */
        case 1:{console.log(`dia lunes`)};
        descuento = 0;
        break;
        /* martes */
        case 2:{console.log(`dia martes`)};
        descuento = 0;
        break;
        /* miercoles */
        case 3:{console.log(`dia miercoles`)};
        descuento = 0;
        break;
        /* jueves */
        case 4:{console.log(`dia jueves`)};
        descuento = 0;
        break;
        /* viernes */
        case 5:{console.log(`día viernes`)};
        descuento= (importeCompra * 50)/100;
        break;
        /* sabado */
        case 6:{console.log(`dia sabado`)};
        descuento= (importeCompra * 50)/100;
        break;

        case 7:{console.log(`dia domingo`)};
        descuento= (importeCompra * 50)/100;
        break;

        default:{ console.log(`dia invalido. Ingrese nuevamente`)};
        esDiaValido= false;
        break;
    }
    /* Etapa 2 */
    if(esDiaValido)
    {
        console.log(`El usuario ingreso un dia correcto`);
        descuento= descuento > 80000? 80000: descuento;
        console.log(`Descuento final:`, descuento);

    }
    else
    {
        console.log(`El usuario ingreso un dia incorrecto`);
    }
    /* Etapa 3 calcular el total a pagar*/
    let totalAPagar= 0;
    totalAPagar= importeCompra - descuento;
    console.log(`Importe de la compra $ ${importeCompra}, Descuento $ ${descuento}, Total a pagar $${totalAPagar}`);

    
}