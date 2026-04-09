
/*
Banco Nación de la República Argentina, tiene una promoción muy importante para sus clientes denominada “one shot” que consta en realizar un importante de descuento del 50% en las compras del cliente, teniendo en cuenta que el descuento máximo a otorgar (descuento tope) es equivalente a 80.000,00 (ochenta mil pesos argentinos). Realice un programa que permita introducir el valor de la compra y calcular el porcentaje de descuento sabiendo que no se puede pasar el límite establecido. 
*/

let importeTotal = 0;
let descuento = 0;
let importeFinal =0;


importeTotal = Number (prompt (`ingrese el valor de la compra en su totalidad:`));

console.log (`El importe total de la compra es de: $${importeTotal}`);

descuento = (importeTotal * 50) / 100;

if (importeTotal < 0){
    console.log (`No se admiten Numero negativo`);
    process.exit();
}

if (descuento > 80000) {
    importeFinal = importeTotal - 80000;
    console.log (`el tope del descuento es de $80.000`);
    
}else {
    importeFinal = importeTotal - descuento;
    console.log (`El valor del descuento es de: $${descuento}`);
}

console.log (`El importe final a pagar es de: $${importeFinal}`);



