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
    let dia = 0;
    dia = Number(prompt(`ingrese dia de compra`));

    let importeCompra = 0;
    importeCompra = Number(prompt(`Ingrese importe de compra`));

    console.log(dia);
    console.log (importeCompra)

    let descuento = 0;
    let esDiaValido = true;
// ETAPA 1
    switch(dia)
    {
        //lunes
        case 1:
        {
            console.log(`dia lunes`);
            descuento = 0;
            break;
        }
        //martes
        case 2:
        {
            console.log(`dia martes`);
            descuento = 0;
            break;
        }
        case 3:
        {
            console.log(`dia miercoles`);
            descuento = 0;
            break;
        }
        case 4:
        {
            console.log(`dia jueves`);
            descuento = 0;
            break;
        }
        case 5:
        {
            console.log(`dia viernes`);
            descuento = (importeCompra * 50)/100;
            break;
        }
        case 6:
        {
            console.log(`dia sabado`);
            descuento = (importeCompra * 50)/100;
            break;
        }
        case 7:
        {
            console.log(`dia domingo`);
            descuento = (importeCompra * 50)/100;
            break;
        }
        default:
        {
            console.log(`dia invalido ingrese nuevamente`)
            esDiaValido = false;
            break;
        }
    }

   // ETAPA 2
    if(esDiaValido)
    {
        console.log(`el usuario ingreso un dia correcto`)
        descuento = descuento > 80000 ? 80000:descuento;
        console.log(`descuento final: `, descuento);
    }
    else
    {                
    console.log(`el usuario ingreso un dia incorrecto`)
    }

   // ETAPA 3 CALCULAR EL TOTAL AL PAGAR

    let totalAPagar = 0;
    totalAPagar = importeCompra - descuento;

    console.log(`Importe compra: ${importeCompra} Descuento:${descuento} Total a pagar:${totalAPagar}`);

}