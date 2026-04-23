

{
     let continua = `S` ;
   let vehiculo =0;
   let cantidadAuto=0;
   let cantidadCamioneta=0;
   let cantidadCamion=0;
   let cantidadMoto = 0;

   let totalCobradoAuto=0;
   let totalCobradoMoto=0;
   let totalCobradoCamioneta=0;
   let totalCobradoCamion=0;
   let totalCobrado=0;



   while (continua ===`s` || continua === `S`)
   // Vehiculo=Number(prompt(`Ingrese el tipo  de vehiculo`));//

{ 

vehiculo=Number(prompt(`ingrese el tipo de vehiculo: 1- Auto, 2- Camion, 3- Camioneta, 4- Moto`));



switch (vehiculo) { 

case 1:
   console.log(`Es un auto`);
   cantidadAuto=cantidadAuto+1;
   totalCobradoAuto=totalCobradoAuto+ 4000;
   console.log(`La cantidad de autos es:${cantidadAuto}`);
 console.log(`El total cobrado de auto es: ${totalCobradoAuto}`);
   break;
   
case 2:
 console.log(`Es un camion`);
  cantidadCamion=cantidadCamion+1;
   totalCobradoCamion=totalCobradoCamion + 22000;
   console.log(`La cantidad de Camiones es:${cantidadCamion}`);
 console.log(`El total cobrado de Camiones es: ${totalCobradoCamion}`);
 break;
case 3:
 console.log(`Es una camioneta`);
  cantidadCamioneta=cantidadCamioneta+1;
   totalCobradoCamioneta=totalCobradoCamioneta + 12000;
   console.log(`La cantidad de camionetas es:${cantidadCamioneta}`);
 console.log(`El total cobrado de camioneta es: ${totalCobradoCamioneta}`);
 break;
case 4:
 console.log(`Es una moto`);
  cantidadMoto=cantidadMoto+1;
   totalCobradoMoto=totalCobradoMoto+ 1500;
   console.log(`La cantidad de motos es:${cantidadMoto}`);
  console.log(`El total cobrado de moto es: ${totalCobradoMoto}`);
 break;
 
 totalCobrado = totalCobradoAuto + totalCobradoCamion +totalCobradoCamioneta + totalCobradoMoto;
 
 console.log(`El total cobrado por de vehiculos es:${totalCobrado}`);

  
}
continua= prompt(`Desea continuar?.(S/N)`);
totalCobrado = totalCobradoAuto+totalCobradoCamion+totalCobradoCamioneta+totalCobradoMoto;
 
}
  

cantidadCamioneta > cantidadAuto 
    ? console.log(`Entraron mas camionetas`)
    : cantidadAuto > cantidadCamioneta 
        ? console.log(`Entraron mas autos`)
        : console.log(`Entraron la misma cantidad de autos y camionetas`);











  /* if (cantidadAuto > cantidadCamioneta)
   {
    console.log(`p}Pasaron mas Autos que Camionetas`);
   }
   else if (cantidadAuto > cantidadCamioneta){

    
   }

   
   else {
       console.log (`Pasaron mas Camionetas que Autos`);
   }*/
 totalCobrado = totalCobradoAuto+totalCobradoCamion+totalCobradoCamioneta+totalCobradoMoto;
 
 console.log(`El total cobrado por de vehiculos es:${totalCobrado}`);

}