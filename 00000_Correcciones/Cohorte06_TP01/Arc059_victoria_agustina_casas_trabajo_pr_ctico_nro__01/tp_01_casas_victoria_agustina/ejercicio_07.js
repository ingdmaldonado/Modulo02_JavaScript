let codigoProducto = 0; 
codigoProducto = Number(prompt("Seleccione el código del producto que desea adquirir:  1=Dogui, 2=Tiernitos, 3=DogPro"));

let cantidadBolsas = 0; 
cantidadBolsas = Number(prompt("Seleccione la cantidad de bolsas que desea adquirir:"));

switch(codigoProducto)
{ 
  //Dogui
  case 1:{
    console.log("Dogui");
    break;
  }
//Tiernitos
  case 2:{
    console.log("Tiernitos");
    break; 
  }
//DogPro
  case 3:{
    console.log("DogPro");
    break;
  }
  default:{
    console.log("Opción inválida, ingrese una correcta");
    break;
  }
}

let precioUnitario = 0;

if (codigoProducto === 1) {
  if (cantidadBolsas >= 11) {
    precioUnitario = 34000;
  } else if (cantidadBolsas >= 5) {
    precioUnitario = 36000;
  } else {
    precioUnitario = 38000;
  }
} 

else if (codigoProducto === 2) {
  if (cantidadBolsas >= 11) {
    precioUnitario = 27000;
  } else if (cantidadBolsas >= 5) {
    precioUnitario = 29000;
  } else {
    precioUnitario = 31000;
  }
} 

else if (codigoProducto === 3) {
  if (cantidadBolsas >= 11) {
    precioUnitario = 42000;
  } else if (cantidadBolsas >= 5) {
    precioUnitario = 44000;
  } else {
    precioUnitario = 46000;
  }
} 

else {
  let nombreProducto = "Producto no encontrado";
  precioUnitario = 0;
}

let totalPagar = precioUnitario * cantidadBolsas;
console.log("Total a pagar: $", totalPagar);