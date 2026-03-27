{
/*1. Solicitar al usuario:
- el día de la compra
- el importe de la compra
*/

let dia = 0;
let importeCompra = 0; 
let descuento = 0;
let diaValido = true;
let totalAPagar = 0;

dia = Number(prompt(`Ingrese día de la compra: 1 - LUNES --- 2 - MARTES --- 3 - MIERCOLES --- 4 - JUEVES --- 5 - VIERNES --- 6 - SABADO --- 7 DOMINGO`));

importeCompra = Number(prompt(`Ingrese importe de la compra`));

console.log(dia);
console.log(importeCompra);


/*2. Verificar si la compra fue realizada un viernes, sábado o domingo.
- Si no fue uno de esos días, no se aplica el beneficio.
*/



switch (dia)
{
    case 1 : {

        console.log(`Día Lunes`);
        descuento = 0;
        break;
    };
    case 2 : {

        console.log(`Día Martes`);
        descuento = 0;
        break;
    };
    case 3 : {

        console.log(`Día Miercoles`);
        descuento = 0;
        break;
    };
    case 4 : {

        console.log(`Día Jueves`);
        descuento = 0;
        break;
    };
    case 5 : {

        console.log(`Día Viernes`);
        descuento = ( importeCompra * 50 ) / 100;
        break;
    };
    case 6 : {

        console.log(`Día Sábado`);
        descuento = ( importeCompra * 50 ) / 100;
        break;
    };
    case 7 : {

        console.log(`Día Domingo`);
        descuento = ( importeCompra * 50 ) / 100;
        break;
    };
    default : {

        console.log(`Día Invalido, intentelo nuevamente`);
        diaValido = false;
        break;
    };
}


/*3. Si corresponde el beneficio:
- calcular el 50% del importe de la compra
- verificar si el reintegro supera el tope de $80.000
- si lo supera, aplicar solamente el tope
*/

if(diaValido){
    console.log (`El usuario ingreso un día correcto`);
    descuento = descuento > 80000 ? 80000: descuento;
    console.log(`El descuento es de:  $`, descuento);
}
else
{
    console.log(`El usuario ingreso un día incorrecto`);
}

/*4. Mostrar:
- día de la compra
- importe de la compra
- reintegro obtenido
- importe final pagado por el cliente.
*/

totalAPagar = importeCompra - descuento;

console.log(`DETALLE DE LA COMPRA - ONE SHOT PLUS:`);
console.log (`El importe de la compra es: ${importeCompra}, El descuento aplicado es de: ${descuento}`);
console.log(`El importe total a pagar es de: $`, totalAPagar);


}