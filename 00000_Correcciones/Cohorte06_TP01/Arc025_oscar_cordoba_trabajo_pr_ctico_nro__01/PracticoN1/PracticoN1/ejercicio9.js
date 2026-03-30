{
     let precioPasaje= Number(prompt(`Ingrese importe del pasaje:`));
     let cantidadPasaje=Number(prompt(`Ingrese cantidad de pasajes:`));
     /*let importeTotal= Number(prompt(`Ingrese el importe  total:`));*/
     
     let descuento =0;
     let totalCompra =0;
     let importeTotal=0;

     totalCompra= precioPasaje *cantidadPasaje;

     if (cantidadPasaje>3 && totalCompra >250000 && totalCompra <= 500000 )
     {
       
       descuento=  (totalCompra *11 )/100;

        importeTotal =totalCompra - descuento;

         console.log(`La cantidad de pasaje es: ${cantidadPasaje}`);

          console.log(`El importe del pasaje es: $${precioPasaje}`);

        console.log(`El importe total es : $${importeTotal}`);
     }
     else  if (cantidadPasaje>3 && totalCompra >500000 ){
         descuento = (totalCompra *15 )/100;

           importeTotal =totalCompra - descuento;

         console.log(`La cantidad de pasajes es: $${cantidadPasaje}`);

          console.log(`El importe del pasaje es: $${precioPasaje}`);

        console.log(`El importe total es : $${importeTotal}`);

     }
     else
     {
      console.log(`No tiene descuentos`);
     }
      

}