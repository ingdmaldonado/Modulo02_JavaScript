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


// Variables
let topeReintegro=80000;
let reintegro=0;
let importeFinal=0;

// Usuario
let diaCompra = prompt(`Ingresar el dia de compra: `);
let importeCompra = Number(prompt(`Ingresar importe de compra: `));

{



    // Verificar dia de compra
    if(diaCompra.toLowerCase() === "viernes" || diaCompra.toLowerCase() === "sabado" || diaCompra.toLowerCase() === "domingo") {
        reintegro=importeCompra*0.5;
        
        // Verificar tope de $80.000
        if(reintegro > topeReintegro) {
            reintegro = topeReintegro;
        }
        
        importeFinal=importeCompra-reintegro;
    }
    else{
        reintegro=0;
        importeFinal=importeCompra;
    }
    

console.log(`Dia de compra: ${diaCompra}`);
console.log(`Importe de compra: ${importeCompra}`);
console.log(`Reintegro obtenido: ${reintegro}`);
console.log(`Importe final pagado por el cliente: ${importeFinal}`);
}

