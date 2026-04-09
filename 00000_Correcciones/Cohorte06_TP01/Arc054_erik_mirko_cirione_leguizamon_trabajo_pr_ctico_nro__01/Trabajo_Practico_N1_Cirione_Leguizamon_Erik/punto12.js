/*
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

Si corresponde el beneficio: 
     calcular el 50% del importe de la compra 
     verificar si el reintegro supera el tope de $80.000 
     si lo supera, aplicar solamente el tope 

4. Mostrar: 
     día de la compra 
     importe de la compra 
     reintegro obtenido 
     importe final pagado por el cliente. 
*/



let importeTotal = 0;
let descuento = 0;
let importeFinal = 0;
let diaDeCompra = 0;


importeTotal = Number(prompt(`ingrese el valor de la compra en su totalidad:`));

if (importeTotal < 0) {   /*me aseguro que el valor de la cumpra sea valido*/
    alert(`El valor de la compra no puede ser menor a 0!`);
    process.exit();
}

diaDeCompra = Number(prompt(`ingrese el dia que se realizo la compra: 1 (Lunes), 2(Martes), 3 (Miercoles), 4 (Jueves), 5 (Viernes), 6 (Sabado), 7 (Domingo),`));


if (diaDeCompra < 0 || diaDeCompra > 7) {     /*Me aseguro que el valor de lso dias sea valido*/
    alert(`El dia de copra es INVALIDO!`);
    process.exit();
}

console.log(`El importe total de la compra es de: $${importeTotal}`);

if (diaDeCompra == 5 || diaDeCompra == 6 || diaDeCompra == 7) {    /*me aseguro que el descuento se haga 
                                                                    los dias correspondientes*/
    descuento = (importeTotal * 50) / 100;

    if (descuento > 80000) {
        importeFinal = importeTotal - 80000;
        console.log(`el tope del descuento es de $80.000`);
        
    } else {
        importeFinal = importeTotal - descuento;
        console.log(`El valor del descuento es de: $${descuento}`);
    }
}else {         /*accion en caso de que no compre en los dias corresctos*/
    console.log (`Usted no accedera al descuento porque no realizo la compra en los dias Estipulados (Viernes, Sabado o Domingo)`);
    importeFinal = importeTotal;

}

console.log(`El importe final a pagar es de: $${importeFinal}`);
