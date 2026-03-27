//ejercicio N° 6

{ 
  let valorDeCompra = Number(prompt("Ingrese valor de la compra"));
  let descuento = valorDeCompra * 0.5;


  if (descuento > 80000) 

    {descuento = 80000;}

  let totalAPagar = valorDeCompra - descuento;


  console.log(`Valor de la compra: ${valorDeCompra} Descuento: ${descuento} Total a pagar: ${totalAPagar}`);

}
