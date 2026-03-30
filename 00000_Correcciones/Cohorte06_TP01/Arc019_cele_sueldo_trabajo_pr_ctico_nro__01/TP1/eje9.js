{
    let cantidadPasajes = Number(prompt("Ingrese la cantidad de pasajes:"));
let importePasaje = Number(prompt("Ingrese el importe de cada pasaje:"));

let totalCompra = cantidadPasajes * importePasaje;
let descuento = 0;

if (cantidadPasajes > 3 && totalCompra > 500000) {
    descuento = totalCompra * 15/100;
} else if (cantidadPasajes > 3 && totalCompra > 250000) {
    descuento = totalCompra * 11/100;
}

let totalPagar = totalCompra - descuento;

console.log("Cantidad de pasajes:", cantidadPasajes);
console.log("Importe por pasaje:", importePasaje);
console.log("Total de la compra:", totalCompra);
console.log("Descuento:", descuento);
console.log("Total a pagar:", totalPagar);



}