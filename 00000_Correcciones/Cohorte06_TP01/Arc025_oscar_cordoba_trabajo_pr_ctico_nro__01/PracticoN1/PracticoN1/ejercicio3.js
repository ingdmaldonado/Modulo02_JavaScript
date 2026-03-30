{
 let servicio1=0; // Gastos de  energia  eelctrica//
 let servicio2=0; // Internet //
 let servicio3=0; // Servivio  de Agua // 

  servicio1=Number(prompt(`ingrese el pago del Energía eléctico ${servicio1}`));
  servicio2=Number(prompt(`ingrese el pago de Internet ${servicio2}`));
  servicio3=Number(prompt(`ingrese el pago de consumo de Agua ${servicio3}`));

 console.log(`Se pagó ${servicio1} por Electricidad`);
  console.log(`Se pagó ${servicio2} por Internet`);
   console.log(`Se pagó ${servicio3} por Agua`);

   /* Pago de servicios proximo mes */
   console.log (`Pagos de servicios proximo mes`)
   servicio1 = servicio1 + (servicio1 *12,5) /100; 
   servicio2= servicio2+ (servicio2 *7 )/100;
   servicio3= servicio3 + (servicio3 *3) /100;

   console.log(`El proximo mes deberá pagar  ${servicio1} por Electricidad`);
   console.log(`El proximo mes deberá pagar  ${servicio2} por Internet`);
   console.log(`El proximo mes deberá pagar ${servicio3} por Agua`);




}