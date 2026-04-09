/*
El programa One Shot Plus fue un beneficio implementado en la provincia de Catamarca en 
conjunto con el Banco Nación para incentivar el consumo en comercios locales.
El beneficio consistía en:
-) 50% de reintegro sobre el monto de la compra
-) tope máximo de reintegro: $80.000
-) válido para compras realizadas los días viernes, sábado y domingo
El programa debe:
1. Solicitar al usuario:
. el día de la compra
. el importe de la compra
2. Verificar si la compra fue realizada un viernes, sábado o domingo.
. Si no fue uno de esos días, no se aplica el beneficio.
3. Si corresponde el beneficio:
. calcular el 50% del importe de la compra
. verificar si el reintegro supera el tope de $80.000
. si lo supera, aplicar solamente el tope
4. Mostrar:
. día de la compra
. importe de la compra
. reintegro obtenido
. importe final pagado por el cliente.
*/

let dia = prompt("Ingrese el día de la compra");
let importecompra = Number(prompt("Ingrese el importe de la compra"));

let reintegro = 0;
let tope = 80000;

switch (dia.toLowerCase()) {

    case "viernes":
    case "sabado":
    case "sábado":
    case "domingo":

        reintegro = importecompra * 0.50;

        if (reintegro > tope) {
            reintegro = tope;
        }

        break;

    default:
        reintegro = 0;
}

let importefinal = importecompra - reintegro;

console.log("Día de la compra:", dia);
console.log("Importe de la compra:", importecompra);
console.log("Reintegro obtenido:", reintegro);
console.log("Importe final pagado:", importefinal);