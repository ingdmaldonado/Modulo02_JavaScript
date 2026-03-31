
let cantidadPasajes = Number(prompt(`Ingrese la cantidad de pasajes a comprar:`));
console.log(`Cantidad de pasajes ingresada: ${cantidadPasajes}`);

let importePasaje = Number(prompt(`Ingrese el importe por pasaje:`));
console.log(`Importe por pasaje ingresado: ${importePasaje}`);

let totalCompra = cantidadPasajes * importePasaje; 
console.log(`El total de la compra es: ${totalCompra}`); 

let descuento = 0;

if (cantidadPasajes > 3 && totalCompra > 250000 && totalCompra <= 500000) 
{
    descuento = (totalCompra * 11) / 100
    console.log(`Se aplica un descuento del 11%, cuyo importe es: ${descuento}`);
    
} 
else 
    if (cantidadPasajes > 3 && totalCompra > 500000) 
{
    descuento = (totalCompra * 15) / 100;
    console.log(`Se aplica un descuento del 15%, cuyo importe es: ${descuento}`);
    
} 
else 
{
    console.log(`No se aplica ningún descuento.`);
}

let precioFinal = totalCompra - descuento;
console.log(`El precio final de la compra a pagar es: ${precioFinal}`);


    