/*
Una plataforma de venta de pasajes (terrestres) desea realizar una aplicación web que permita realizar la venta de los mismos, para ello el dueño propone las siguientes reglas tratando de promover las ventas. 
 Si la cantidad de Pasajes es mayor a 3 y el importe total de la compra es mayor a 250.000,00 pesos, se aplicará un descuento del 11% sobre el total de la compra. 
 Si la cantidad de pasajes es mayor a 3 y el importe total de la compra es mayor a 500.000,00 pesos, se aplicará un descuento del 15% sobre el total de la compra. 
El Sistema debe registrar mínimamente estas variables:
  cantidad de pasajes 
  importe pasaje 
  total compra = cantidad de pasajes * importe pasaje 
*/

let cantidadPasajes = 0;
let importePasajes = 0;
let totalCompra = 0;
let totalCompraDescuento = 0;
let descuento = 0;
let descuentoMensaje = 'No posee descuento';
let ImporteFinalMensaje = '';

importePasajes = Number (prompt (`Ingrese el valor el pasaje:`));
cantidadPasajes = Number (prompt (`Ingrase la cantidad de pasajes que desea comprar:`));

totalCompra = cantidadPasajes * importePasajes;

ImporteFinalMensaje = `El total final a abonar es de: $${totalCompra}`;

if (cantidadPasajes > 3 && totalCompra > 250000) {   /*primera condicion*/
    descuento = (totalCompra * 11) / 100;
    totalCompraDescuento = totalCompra - descuento; 
    descuentoMensaje = `Por las caracteristicas de su compra, usted recibira un descuento del 11%, que corresponde a: $${descuento}`;
    ImporteFinalMensaje = `El total final a abonar es de: $${totalCompraDescuento}`;

}

if (cantidadPasajes > 3 && totalCompra > 500000) {   /*segunda condicion*/
    descuento = (totalCompra * 15) / 100;
    totalCompraDescuento = totalCompra - descuento;
    descuentoMensaje = `Por las caracteristicas de su compra, usted recibira un descuento del 15%, que corresponde a: $${descuento}`;
    ImporteFinalMensaje = `El total final a abonar es de: $${totalCompraDescuento}`;
}

console.log (`Usted esta comprando ${cantidadPasajes} pasajes a un costo de ${importePasajes} cada uno`);
console.log (`El monto total de su compra es de: ${totalCompra}`);
console.log (`${descuentoMensaje}`);
console.log (`${mensaje2}`);


