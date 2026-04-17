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
    dia =Number(prompt (`Ingrese el dia de la compra 1 = lunes, 2 = martes, 3 = miercoles, 4 = jueves, 5 = viernes, 6 = sabado, 7 = domingo`));

    let importeDeLaCompra = 0; 
    importeDeLaCompra = Number(prompt(`Ingrese el monto de la compra`));
    

    let descuento= 0;
    let esDiaValido = true;
    
    switch(dia)
    {
        case 1: 
        {
            console.log(`dia: lunes`);
            descuento = 0;
            break;
        }
        case 2: 
        {
            console.log(`dia: martes`);
            descuento = 0;
            break;
        }
        case 3: 
        {
            console.log(`dia: miercoles`);
            descuento = 0;
            break;
        }
        case 4: 
        {
            console.log(`dia: jueves`);
            descuento = 0;
            break;
        }
        case 5: 
        {
            console.log(`dia: viernes`);
            descuento = (importeDeLaCompra * 50) / 100;
            break;
        }
        case 6: 
        {
            console.log(`dia: sabado`);
            descuento = (importeDeLaCompra * 50) / 100;
            break;
        }
        case 7: 
        {
            console.log(`dia: domingo`);
            descuento = (importeDeLaCompra * 50) / 100;
            break;
        }
        default: 
        {
            console.log(`dia invalido ingrese nuevamente`);
            esDiaValido = false;
            break;
        }
    }

    let totalAPagar =0; 

    if (esDiaValido)
    {
        descuento = descuento > 80000 ? 80000: descuento;
        totalAPagar = importeDeLaCompra - descuento;
        console.log(`El importe de compra $: ${importeDeLaCompra} Reintegro de $: ${descuento} Importe final pagado por el cliente $: ${totalAPagar}`);

    }
    else
    {
        console.log (`Error`);
    }   
}