{
    
// Ejercicio 9

let cantidadDePasajes = 0;
cantidadDePasajes = Number(prompt("Ingrese cantidad de pasajes"));


let importePasaje = 0 ;

importePasaje =  Number(prompt("Ingrese importe de pasajes"));

totalCompra = cantidadDePasajes * importePasaje

if (cantidadDePasajes > 3 && totalCompra > 500000) {
    let descuento = (totalCompra * 15) / 100;
    let totalConDescuento = totalCompra - descuento;
    console.log(`Su compra con descuento es ${totalConDescuento}`);
  } else if (cantidadDePasajes > 3 && totalCompra > 250000 && totalCompra <= 500000) {
    let descuento = (totalCompra * 11) / 100;
    let totalConDescuento2 = totalCompra - descuento;
    console.log(`Su compra con descuento es ${totalConDescuento2}`);
  } else {
    console.log(`No se aplica descuentosu precio es:${totalCompra}`);
  }
console.log (`la cantidad de pasajes es:${cantidadDePasajes} su precio es:${importePasaje}`)
  
}