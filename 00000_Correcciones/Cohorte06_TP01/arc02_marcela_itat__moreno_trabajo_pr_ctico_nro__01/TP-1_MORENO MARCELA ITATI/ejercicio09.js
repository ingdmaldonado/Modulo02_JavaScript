{
/*
- Si la cantidad de Pasajes es mayor a 3 y el importe total de la compra es mayor a 250.000,00 pesos,
se aplicará un descuento del 11% sobre el total de la compra.
- Si la cantidad de pasajes es mayor a 3 y el importe total de la compra es mayor a 500.000,00 pesos,
se aplicará un descuento del 15% sobre el total de la compra.*/

let cantidadPasajes = 0;
let importePasaje = 0;
let descuento = 0;
let totalCompra = 0;
let totalAPagar = 0;

cantidadPasajes = Number(prompt`Ingrese la cantidad de pasajes comprados`);

console.log(`Pasajes:`,cantidadPasajes);

importePasaje = Number(prompt(`Ingrese el importe por pasaje`));

console.log(`Importe por pasaje:`,importePasaje);

totalCompra = cantidadPasajes * importePasaje;

console.log(`Total:`,totalCompra);

if(cantidadPasajes > 3 && totalCompra > 250000 ){
    descuento = (totalCompra * 11) / 100;
    console.log(`Descuento`,descuento);
}else{
    if(cantidadPasajes > 3 && totalCompra > 500000 ){
    descuento = (totalCompra * 15) / 100;
    console.log(`Descuento`,descuento);
    }
    
}

  totalAPagar = totalCompra - descuento;
  console.log (`El total a pagar por ${cantidadPasajes} pasajes, es de: ${totalAPagar}`);

}