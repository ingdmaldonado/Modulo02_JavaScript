{
  let descuento = 0;
  let totalAPagar = 0;
  let diaCompra = prompt("Ingrese el día de la semana  de la compra :");
  let importeCompra = parseFloat(prompt("Ingrese el importe de la compra :"));

  if (diaCompra === "viernes" || diaCompra === "sabado" || diaCompra === "domingo") {
      
    descuento = importeCompra * 0.5;

    if (descuento > 80000) {
       totalAPagar = importeCompra - 80000;      
    } else {
      totalAPagar = importeCompra - descuento;      
    }
  }
  else {
    totalAPagar = importeCompra;
  }

  console.log(`Día de compra: ${diaCompra}`);
  console.log(`Importe de la compra: ${importeCompra}`);
  console.log(`Reitegro obtenido: ${importeCompra - totalAPagar}`);
  console.log(`Total a Pagar por el cliente: ${totalAPagar}`); 

}
