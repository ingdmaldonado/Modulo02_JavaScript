/*
Ejercicio Nro. 12: Estructuras Condicionales (if/else)
El programa One Shot Plus fue un beneficio implementado en la provincia de Catamarca.
50% de reintegro con tope máximo de $80.000, válido solo viernes, sábado y domingo.
*/

//solicitar datos//
let diaNumero = 0;
diaNumero = Number(prompt("Ingrese el número del día de la compra:\n1=Lunes\n2=Martes\n3=Miércoles\n4=Jueves\n5=Viernes\n6=Sábado\n7=Domingo"));

let importeCompra = 0;
importeCompra = Number(prompt("Ingrese el importe de la compra:"));

//determinar nombre del día (para mostrar mejor)//
let nombreDia = "";
switch(diaNumero) {
    case 1: nombreDia = "Lunes"; break;
    case 2: nombreDia = "Martes"; break;
    case 3: nombreDia = "Miércoles"; break;
    case 4: nombreDia = "Jueves"; break;
    case 5: nombreDia = "Viernes"; break;
    case 6: nombreDia = "Sábado"; break;
    case 7: nombreDia = "Domingo"; break;
    default: nombreDia = "Día inválido";
}

//calcular reintegro//
let reintegro = 0;

if (diaNumero === 5 || diaNumero === 6 || diaNumero === 7) {
    reintegro = importeCompra * 0.5;
    
    if (reintegro > 80000) {
        reintegro = 80000;
    }
}

//calcular total pagado//
let totalPagado = importeCompra - reintegro;

//mostrar resultados//
console.log(`Día de la compra: ${nombreDia}`);
console.log(`Importe de la compra: $${importeCompra}`);

if (reintegro > 0) {
    console.log(`Reintegro obtenido: $${reintegro}`);
    console.log(`Total a pagar por el cliente: $${totalPagado}`);
} else {
    console.log("No corresponde reintegro (solo válido viernes, sábado o domingo)");
}