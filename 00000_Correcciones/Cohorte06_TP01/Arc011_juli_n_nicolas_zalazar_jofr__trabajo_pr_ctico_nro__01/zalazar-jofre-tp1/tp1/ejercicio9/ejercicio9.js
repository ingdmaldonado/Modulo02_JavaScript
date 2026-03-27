//ejercicio9

let cantidadPasajes = Number(prompt("Ingrese la cantidad de pasajes a comprar: "));
let importePasaje = Number(prompt("Ingrese el importe de los pasajes: "));
let importeTotal = cantidadPasajes * importePasaje;
let descuento = 0;
if (cantidadPasajes >= 3 && importeTotal > 250000) {
    descuento = importeTotal * 0.11;
}
else if (cantidadPasajes >= 3 && importeTotal > 500000) {
    descuento = importeTotal * 0.15;
}
console.log("La cantidad de pasajes a comprar es: ", cantidadPasajes);
console.log("El importe de cada pasaje es: ", importePasaje);
console.log("El importe total de la compra es: ", importeTotal);    
console.log("El descuento aplicado es: ", descuento);
console.log("El total a pagar es: ", (importeTotal - descuento));