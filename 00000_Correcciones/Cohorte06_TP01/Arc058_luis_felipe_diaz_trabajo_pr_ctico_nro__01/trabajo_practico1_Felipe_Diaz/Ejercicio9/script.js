// Ingreso de las variables 
let cantidadPasajes = Number(prompt("Ingrese la cantidad de pasajes a comprar"));
let importePasaje = Number(prompt("Ingrese el importe de cada pasaje"));

// Calculamos el total de la compra 
let totalCompra = cantidadPasajes * importePasaje;

let descuento = 0;

// Evaluamos las promociones 
// Evaluamos primero el monto más alto (500.000)
if (cantidadPasajes > 3 && totalCompra > 500000) {
    descuento = (totalCompra * 15) / 100;
    console.log("Aviso: Se aplicó la promocion del 15% de descuento.");
    
} else if (cantidadPasajes > 3 && totalCompra > 250000) {
    descuento = (totalCompra * 11) / 100;
    console.log("Aviso: Se aplico la promocion del 11% de descuento.");
    
} else {
    // Si no cumple ninguna, el descuento queda en 0
    console.log("Aviso: Esta compra no cumple con los requisitos para descuentos.");
}

// Calculamos cuAnto queda por pagar
let importeFinal = totalCompra - descuento;

// Mostramos todos los datos
console.log("Cantidad de pasajes: " + cantidadPasajes);
console.log("Total de la compra: $" + totalCompra);
console.log("Descuento en pesos: $" + descuento);
console.log("Importe FINAL a pagar: $" + importeFinal);