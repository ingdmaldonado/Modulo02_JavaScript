{

let zona = 1;
let importeCompra =0;
let costoCentro =2500;
let costoOeste =3750;
let costoNorte =4225;
let costoSur =5222.50;
let costoEste =4288.50;



 importeCompra=Number(prompt(`Ingrese el importe de la compra`));
 zona=Number(prompt(`Ingrese la zona a entregar  1- Centro  2 Oeste  3- Norte  4- Sur  5-  Este`));

switch (zona) {
  case 1: // zona  centro//
     console.log(`El precio del producto es:$${importeCompra}`);
    importeCompra = importeCompra + costoCentro;
    console.log(`El importe total de la compra es:${importeCompra}`);
    console.log(`El costo de envio es:$${costoCentro}`);
    break;
  case 2: // zona  Oeste//
  console.log(`El precio del producto es:$${importeCompra}`);
    importeCompra = importeCompra + costoOeste;
    console.log(`El importe total de la compra es:${importeCompra}`);
    console.log(`El costo de envio es:$${costoCentro}`);
    break;
   case 3: // zona  norte//
   console.log(`El precio del producto es:$${importeCompra}`);
    importeCompra = importeCompra + costoNorte;
    console.log(`El importe total de la compra es:${importeCompra}`);
    console.log(`El costo de envio es:$${costoNorte}`);
    break;
     case 4: // zona  Oeste//
     console.log(`El precio del producto es:$${importeCompra}`);
    importeCompra = importeCompra + costoSur;
    console.log(`El importe total de la compra es:${importeCompra}`);
    console.log(`El costo de envio es:$${costoSur}`);
    break;
     case 5: // zona  Oeste//
     console.log(`El precio del producto es:$${importeCompra}`);
    importeCompra = importeCompra + costoEste;
    console.log(`El importe total de la compra es:${importeCompra}`);
    console.log(`El costo de envio es:$${costoEste}`);
    break;
    
    default:
      console.log(`No se realizan envios para esa zona`);
}




}