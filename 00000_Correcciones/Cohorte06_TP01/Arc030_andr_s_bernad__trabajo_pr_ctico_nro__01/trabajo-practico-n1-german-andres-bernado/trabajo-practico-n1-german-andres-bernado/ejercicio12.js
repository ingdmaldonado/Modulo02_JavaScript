/* Ejercicio Nro. 12: Estructuras Condicionales (if/else)

El programa One Shot Plus fue un beneficio implementado en la provincia de Catamarca en
conjunto con el Banco Nación para incentivar el consumo en comercios locales.

El beneficio consistía en:
* 50% de reintegro sobre el monto de la compra
* tope máximo de reintegro: $80.000
* válido para compras realizadas los días viernes, sábado y domingo

El programa debe:

1. Solicitar al usuario:
* el día de la compra
* el importe de la compra

Diplomatura Universitaria en Desarrollo Web
Full Stack con JavaScript
Módulo: JavaScript

2. Verificar si la compra fue realizada un viernes, sábado o domingo.
* Si no fue uno de esos días, no se aplica el beneficio.

3. Si corresponde el beneficio:
* calcular el 50% del importe de la compra
* verificar si el reintegro supera el tope de $80.000
* si lo supera, aplicar solamente el tope

4. Mostrar:
* día de la compra
* importe de la compra
* reintegro obtenido
* importe final pagado por el cliente. */ 

let dia = 0;
dia = Number(prompt(`Ingrese dia de compra - 1 = Lunes, 2 = Martes, ...`));

let importeCompra = 0;
importeCompra = Number(prompt(`Ingrese el Importe de la compra`));

console.log(dia); 
console.log(importeCompra);

let descuento = 0;
let esDiaValido = true;

switch(dia)
{
case 1:{
        console.log(`dia lunes`);
        descuento = 0;
        break;
        }
case 2:{
        console.log(`dia martes`);
        descuento = 0;
        break;
        }
case 3:{
        console.log(`dia miercoles`);
        descuento = 0;
        break;
        }
case 4:{
        console.log(`dia jueves`);
        descuento = 0;
        break;
        }
case 5:{
        console.log(`dia viernes`);
        descuento = (importeCompra * 50)/100;
        break;
        }
case 6:{
        console.log(`dia sábado`);
        descuento = (importeCompra * 50)/100;
        break;
        }
case 7:{
        console.log(`día domingo`);
        descuento = (importeCompra * 50)/100;
        break;
        }
default:{
        console.log(`dia inválido ingrese nuevamente`);
        esDiaValido = false;
        break;
        }
}


if(esDiaValido)
{
    
    descuento = descuento > 80000 ? 80000:descuento;

    console.log('descuent final: ',descuento);

    }
else
{
    console.log(`El usuario ingreso un día incorrecto`);
}


let totalAPagar = 0; 

totalAPagar = importeCompra - descuento;        

console.log(`Importe Compra: ${importeCompra} Descuento: ${descuento} Total a Pagar: ${totalAPagar}`);

       