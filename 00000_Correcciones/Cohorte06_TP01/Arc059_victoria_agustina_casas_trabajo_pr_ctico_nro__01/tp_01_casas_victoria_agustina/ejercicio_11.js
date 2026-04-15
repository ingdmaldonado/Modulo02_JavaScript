let envioCentro = 2500.00;
let envioOeste  = 3750.00;
let envioNorte  = 4225.00;
let envioSur    = 5222.50;
let envioEste   = 4288.50;

let importeCompra = 0;
importeCompra = Number(prompt("Ingrese el importe de su compra: $"));

let costoEnvio = 0;
zonaEnvio = Number(prompt("Ingrese la zona del envío: 1=Centro 2=Oeste 3=Norte 4=Sur 5=Este"));

 
switch (zonaEnvio) {
  //Centro
  case 1: 
   costoEnvio = envioCentro; 
   break;
  //Oeste
  case 2:  
   costoEnvio = envioOeste;  
   break;
  //Norte
  case 3:  
   costoEnvio = envioNorte;  
   break;
  //Sur
  case 4:    
   costoEnvio = envioSur;    
   break;
  //Este
  case 5:   
   costoEnvio = envioEste;   
   break;
  default:       
   console.log("Zona no reconocida.");
}

let totalCompra = importeCompra + costoEnvio;

console.log("Total Final a pagar: $", totalCompra);