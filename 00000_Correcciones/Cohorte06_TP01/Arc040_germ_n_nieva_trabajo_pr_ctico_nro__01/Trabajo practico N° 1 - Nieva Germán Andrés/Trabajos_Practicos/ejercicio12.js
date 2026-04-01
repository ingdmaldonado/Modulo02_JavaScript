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
 importe final pagado por el cliente.  */

let dia= prompt("Ingrese el día de la compra:");
let importe= Number(prompt("Ingrese el importe de la compra:"));
let reintegro=0;
let importeFinal=0;

if (dia === "viernes" || dia === "sabado" || dia === "domingo"){
    reintegro= importe * 0.5;
    if (reintegro > 80000){
        reintegro= 80000;
    }
    importeFinal= importe - reintegro;
    console.log(`Usted realizó la compra el día ${dia} por un importe de $${importe}. El reintegro obtenido es de $${reintegro}, por lo que el importe final a pagar es de $${importeFinal}.`);
}
else{
    console.log("No se aplica el beneficio, el día de la compra no es válido.");}
