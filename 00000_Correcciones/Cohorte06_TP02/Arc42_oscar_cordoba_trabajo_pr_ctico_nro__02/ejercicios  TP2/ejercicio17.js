{
  

      let continua = `S` ;
     let pesoProducto = 0 ;
     let cantidadM = 0;
     let cantidadL = 0;
     let cantidadXL = 0;
     let descartes = 0;

     while (continua ===`s` || continua === `S`)
    {

        pesoProducto=Number(prompt(`Ingrese el peso del producto`));
        

      

   
     if ((pesoProducto >= 53) && (pesoProducto <63))
     {
        cantidadM = cantidadM + 1;
     }
    if ((pesoProducto >= 63) && (pesoProducto <73))
     {
        cantidadL=cantidadL +1;

     }
      if (pesoProducto >= 73)
     {
        cantidadXL= cantidadXL + 1;

     }
     if (pesoProducto < 53)
     {
        descartes= descartes +1;

     }
   
     console.log(pesoProducto);
     console.log(`cantidad M ${cantidadM}`);
     console.log(`cantidad XL ${cantidadXL}`);
      console.log(`cantidad L ${cantidadL}`);
      console.log(`cantidad Descartes ${descartes}`);

     continua= prompt(`Desea continuar?.(S/N)`);
    
}
 let totalhuevos = cantidadL+cantidadM+cantidadXL+descartes;
 console.log(`La cantidad de huevos es :${totalhuevos}`);

 let proporcionM=0;
 let proporcionL=0;
 let proporcionXL=0;
 let proporcionDescartes=0;

 proporcionL = (cantidadL/totalhuevos)*100;
 proporcionM = (cantidadM/totalhuevos)*100;
 proporcionXL = (cantidadXL/totalhuevos)*100;
 proporcionDescartes = (descartes/totalhuevos)*100;

 console.log(`El porcentaje de Huevos tamaño M : ${proporcionM}`);
 console.log(`El porcentaje de Huevos tamaño L : ${proporcionL}`);
 console.log(`El porcentaje de Huevos tamaño XL : ${proporcionXL}`);
 console.log(`El porcentaje de Huevos tamaño Descartes : ${proporcionDescartes}`);




}