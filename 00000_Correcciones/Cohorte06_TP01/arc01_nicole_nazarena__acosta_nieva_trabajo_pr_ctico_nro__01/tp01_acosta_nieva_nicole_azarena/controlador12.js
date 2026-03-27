/*Ejercicio Nro. 12: Estructuras Condicionales (if/else)
 
El programa One Shot Plus fue un beneficio implementado en la provincia de Catamarca en
conjunto con el Banco Nación para incentivar el consumo en comercios locales.
El beneficio consistía en:
50% de reintegro sobre el monto de la compra
tope máximo de reintegro: $80.000
válido para compras realizadas los días viernes, sábado y domingo
El programa debe:
1. Solicitar al usuario:
el día de la compra
el importe de la compra
2. Verificar si la compra fue realizada un viernes, sábado o domingo.
Si no fue uno de esos días, no se aplica el beneficio.
 
3. Si corresponde el beneficio:
calcular el 50% del importe de la compra
verificar si el reintegro supera el tope de $80.000
si lo supera, aplicar solamente el tope
 
4. Mostrar:
día de la compra
importe de la compra
reintegro obtenido
importe final pagado por el cliente*/


{


    let dia = 0;
    let importeCompra = 0;
    let diaValido = true;
    let descuento = 0;
    let totalPagar = 0;
    dia = Number(prompt(`ingrese el dia 1 lunes 2 martes 3 miercoles`));
    importeCompra = Number(prompt(`ingrese el monto de la compra`));
    console.log(dia)
    console.log(importeCompra)


    switch (dia) {
        case 1:
            {
                console.log(`dia lunes`);
                descuento = 0;
            }
            break;


        case 2: {
            console.log(`dia martes`);
            descuento = 0;
        }
            break;
        case 3:
            {
                console.log(`dia miercoles`);
                descuento = 0;
            }
            break;


        case 4:
            {
                console.log(`dia juves`);
                descuento = 0;
            }
            break;
        case 5:
            {
                console.log(`dia viernes`);
                descuento = (importeCompra * 50) / 100;
            }
            break;
        case 6:
            {
                console.log(`dia sabado`);
                descuento = (importeCompra * 50) / 100;
            }
            break;
        case 7:
            {
                console.log(`dia domingo`);
                descuento = (importeCompra * 50) / 100;
            }
            break;
        default: console.log(`el dia ingresado no es valido`)
            diaValido = false;
            break;
    }
    if (diaValido) {
        console.log(`ingreso un dia correcto`)
        descuento = descuento > 80000 ? 80000 : descuento;
        console.log (`descuento total:`,descuento);
    }
    else {


        console.log(`ingreso un dia incorrecto`)
    }


   totalPagar = importeCompra - descuento ;


   console.log(`importe de la compra : ${importeCompra} descuento: ${descuento} total a pagar: ${totalPagar}`);


    console.log(descuento);


}
