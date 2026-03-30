{
     /*
     Vamos a tener en cuenta que los valores de la variable dia seran los siguientes

     lunes -  1
     martes - 2
     miercoles - 3
     jueves - 4
     viernes - 5
     sabado - 6
     domingo - 7
     */

    let dia = 0;
    let descuento =0;
    importeCompra =0;
    importeTotal= 0;


    dia = Number(prompt(`Ingrese dia de la semana para la compra :1 -lunes , 2 - martes, 3- miercoles, 4- jueves ,viernes - 5, saabado -6 , domingo -7  `));
    importeCompra=Number(prompt(`Ingrese el importe de la compra`));

switch (dia) {
  case 1:
    descuento =0;
    importeTotal= importeCompra-descuento;
    console.log("Hoy es lunes");
    console.log(`El importe de  la compra es :$${importeCompra}`);
    console.log(`El reintegro es de: $${descuento}`);
    console.log(`El total a pagar es :$${importeTotal}`);

    
    break;
  case 2:
    descuento =0;
    importeTotal= importeCompra-descuento;
    console.log("Hoy es martes");
   console.log(`El importe de  la compra es :$${importeCompra}`);
    console.log(`El reintegro es de: $${descuento}`);
    console.log(`El total a pagar es :$${importeTotal}`);
    break;
  case 3:
    descuento =0;
    importeTotal= importeCompra-descuento;
    console.log("Hoy es miercoles");
    console.log(`El importe de  la compra es :$${importeCompra}`);
    console.log(`El reintegro es de: $${descuento}`);
    console.log(`El total a pagar es :$${importeTotal}`);
    break;
  case 4:
    descuento =0;
    importeTotal= importeCompra-descuento;
    console.log("Hoy es juevesr");
    console.log(`El importe de  la compra es :$${importeCompra}`);
    console.log(`El reintegro es de: $${descuento}`);
    console.log(`El total a pagar es :$${importeTotal}`);

    break;  
  case 5: 
  if (importeCompra <= 160000){
    descuento = (importeCompra/2);
    importeTotal = importeCompra -descuento;
  }
  else 
  {
    descuento = 80000;
    importeTotal = importeCompra -descuento;
  }
  console.log("Hoy es viernes");
    console.log(`El importe de  la compra es :$${importeCompra}`);
    console.log(`El reintegro es de: $${descuento}`);
    console.log(`El total a pagar es :$${importeTotal}`);
  
    break;
    

   case 6:
    if (importeCompra <= 160000){
    descuento = (importeCompra/2);
    importeTotal = importeCompra -descuento;
  }
  else 
  {
    descuento = 80000;
    importeTotal = importeCompra -descuento;
  }
  console.log("Hoy es Sabado");
    console.log(`El importe de  la compra es :$${importeCompra}`);
    console.log(`El reintegro es de: $${descuento}`);
    console.log(`El total a pagar es :$${importeTotal}`);
  

    break; 
   case 7:
   if (importeCompra <= 160000){
    descuento = (importeCompra/2);
    importeTotal = importeCompra -descuento;
  }
  else 
  {
    descuento = 80000;
    importeTotal = importeCompra -descuento;
  }
  console.log("Hoy es domingo");
    console.log(`El importe de  la compra es :$${importeCompra}`);
    console.log(`El reintegro es de: $${descuento}`);
    console.log(`El total a pagar es :$${importeTotal}`);
  

    break; 
  default:
    console.log("Dia incorrecto. Vuelva a ingresar");
} 

   

}









