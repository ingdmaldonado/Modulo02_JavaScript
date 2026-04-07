{

/* Ejercicio 7 */

let codigo = parseInt(prompt('Ingrese codigo 1-dogui, 2-tiernitos,3-dogpro: '));
let cantidad = parseInt(prompt('Ingrese cantidad de bolsas: '));
let precioUnitario;

if (cantidad >= 5 && cantidad <= 10){
  if (codigo === 1){
    precioUnitario = 36000;
  }
    else if (codigo === 2){
      precioUnitario = 29000;
  }
  else {
      precioUnitario = 44000;
  }
}
else if (cantidad < 5){
  
  if (codigo === 1){
      precioUnitario = 38000;
    }
      else if (codigo === 2){
        precioUnitario = 31000;
    }
    else {
        precioUnitario = 46000;
    }
}
else{
  if (codigo === 1){
    precioUnitario = 34000;
  }
    else if (codigo === 2){
      precioUnitario = 27000;
  }
  else {
      precioUnitario = 42000;
  }
}

  console.log('importe a pagar de la bosa es:', precioUnitario * cantidad);
  console.log(`el precio de la bolsa es: ${precioUnitario}`);

  
}