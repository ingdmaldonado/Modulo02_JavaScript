let diaCompra = 0; 
diaCompra = Number(prompt("Seleccione el día de compra:  1=lunes, 2=martes, 3=miércoles..."));

let importeCompra = 0; 
importeCompra = Number(prompt("Determine el Importe de Compra:"));

let descuentoAplicado = 0;

console.log(diaCompra);
console.log(importeCompra);

let diaValido = true;
switch(diaCompra)
{ 
  //Lunes
  case 1:{
    console.log("Lunes");
    descuentoAplicado = 0;
    break;
  }
//Martes
  case 2:{
    console.log("Martes");
    descuentoAplicado = 0;
    break; 
  }
//Miércoles
  case 3:{
    console.log("Miércoles");
    descuentoAplicado = 0;
    break;
  }
 //Jueves 
  case 4:{
    console.log("Jueves");
    descuentoAplicado = 0;
    break;
  }
 //Viernes 
  case 5:{
    console.log("Viernes");
    descuentoAplicado = importeCompra * 0.5
    break;
  }
//Sábado
  case 6:{
    console.log("Sábado");
    descuentoAplicado = importeCompra * 0.5
    break;
  }
//Domingo
  case 7:{
    console.log("Domingo");
    descuentoAplicado = importeCompra * 0.5
    break;
  }
  default:{
    console.log("Opción inválida, ingrese una correcta");
    diaValido = false; 
    break;
  }
}

if (diaValido)
{
  console.log("Se ha ingresado un día válido");
  descuentoAplicado = descuentoAplicado > 80000 ? 80000 : descuentoAplicado;
  console.log("Descuento Final: ", descuentoAplicado);
}
else
{
  console.log("Se ha ingresado un día incorrecto");
}

let totalAPagar = 0;
totalAPagar = importeCompra - descuentoAplicado;

console.log("Dia de Compra: ", diaCompra, "Importe de la Compra: $", importeCompra, "Reintegro obtenido: $", descuentoAplicado, "Importe Final a Pagar: $", totalAPagar);