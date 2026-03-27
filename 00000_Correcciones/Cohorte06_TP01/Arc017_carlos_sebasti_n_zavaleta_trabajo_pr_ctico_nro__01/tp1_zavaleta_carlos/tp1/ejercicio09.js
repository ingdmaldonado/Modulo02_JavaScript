let importePasaje = 0;
let cantPasajes = 0;
let descuento = 0;
let totalCompra = 0;
let totalaPagar = 0;
importePasaje = Number(prompt("Ingrese el precio del Pasaje"));
cantPasajes = Number(prompt("Ingrese la cantidad de Pasajes"));

totalCompra = importePasaje * cantPasajes;
if ( totalCompra > 250000 && cantPasajes > 3){
    descuento = totalCompra * 11 / 100; //11%
}

if (totalCompra > 500000 && cantPasajes > 3){
    descuento = totalCompra * 15 / 100; //15%
}
totalaPagar = totalCompra - descuento;
console.log("El precio de cada pasaje es "+ importePasaje + " y la cantidad de pasajes es " + cantPasajes + " con un descuento de " + descuento);
console.log("El total a pagar es " + totalaPagar);
