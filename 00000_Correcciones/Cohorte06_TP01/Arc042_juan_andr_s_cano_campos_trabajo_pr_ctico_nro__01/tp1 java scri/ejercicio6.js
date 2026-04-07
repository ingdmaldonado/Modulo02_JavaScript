{
// Ejercicio 6 one shot 

let ingreseImporte = 0

ingreseImporte = Number(prompt(`Señor ingrese el valor del importe de la compra:`))


descuento = (ingreseImporte* 50)/100;



  descuento = descuento > 80000 ? 80000:descuento;

  console.log (` descuento final :`, descuento);

importeTotal = ingreseImporte - descuento

console.log (`el importe ingresado es ${ingreseImporte} y su saldo a pagar es ${importeTotal}`)

}