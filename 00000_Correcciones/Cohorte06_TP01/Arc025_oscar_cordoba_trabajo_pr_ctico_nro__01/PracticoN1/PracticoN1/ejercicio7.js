{
    let precioNormalUno =38000;
    let precioNormalDos =31000;
    let precioNormalTres =46000;

    let precioDescuentoUno =36000;
    let precioDescuentoDos =29000;
    let precioDescuentoTres =44000;

    let precioPromolUno =34000;
    let precioPromoDos =27000;
    let precioPromoTres =42000;

    let  importeTotal = 0;



    let codigoProducto=Number(prompt(`Ingrese el Codigo del producto:`));

    if (codigoProducto <=3){  

    let cantidadDeBolsas=Number(prompt(`Ingrese las cantidades de bolsas:`));

       if (codigoProducto ==1  && cantidadDeBolsas>=1 &&  cantidadDeBolsas <=4) {
         importeTotal=precioNormalUno *cantidadDeBolsas;
         console.log(`Producto: Dogui x 21 Kilos`);
         console.log(`El precio total a pagar es : $${importeTotal}`);
        console.log(`la cantidad de bolsas es ${cantidadDeBolsas}`);
       }
       else  if (codigoProducto ==1  && cantidadDeBolsas>=5 &&  cantidadDeBolsas <=10){
                importeTotal=precioDescuentoUno *cantidadDeBolsas;
                 console.log(`Producto: Dogui x 21 Kilos`);
               console.log(`El precio total a pagar es : $${importeTotal}`);
               console.log(`la cantidad de bolsas es ${cantidadDeBolsas}`);    
       } else if (codigoProducto ==1  && cantidadDeBolsas>=11){
               importeTotal=precioPromolUno *cantidadDeBolsas;
                console.log(`Producto: Dogui x 21 Kilos`);
               console.log(`El precio total a pagar es : $${importeTotal}`);
               console.log(`la cantidad de bolsas es ${cantidadDeBolsas}`);   
       }
       else if (codigoProducto ==2  && cantidadDeBolsas>=1 &&  cantidadDeBolsas <=4) {
         importeTotal=precioNormalDos *cantidadDeBolsas;
          console.log(`Producto: Tiernitos  x 21 Kilos`);
         console.log(`El precio total a pagar es : $${importeTotal}`);
        console.log(`la cantidad de bolsas es ${cantidadDeBolsas}`);
       }
       else  if (codigoProducto ==2  && cantidadDeBolsas>=5 &&  cantidadDeBolsas <=10){
                importeTotal=precioDescuentoDos *cantidadDeBolsas;
                 console.log(`Producto: Tiernitos  x 21 Kilos`);
               console.log(`El precio total a pagar es : $${importeTotal}`);
               console.log(`la cantidad de bolsas es ${cantidadDeBolsas}`);    
       } else if (codigoProducto ==2  && cantidadDeBolsas>=11){
               importeTotal=precioPromoDos *cantidadDeBolsas;
                console.log(`Producto: Tiernitos  x 21 Kilos`);
               console.log(`El precio total a pagar es : $${importeTotal}`);
               console.log(`la cantidad de bolsas es ${cantidadDeBolsas}`);   
       }
            else if (codigoProducto ==3  && cantidadDeBolsas>=1 &&  cantidadDeBolsas <=4) {
         importeTotal=precioNormalTres *cantidadDeBolsas;
          console.log(`Producto: Dogpro  x 21 Kilos`);
         console.log(`El precio total a pagar es : $${importeTotal}`);
        console.log(`la cantidad de bolsas es ${cantidadDeBolsas}`);
       }
       else  if (codigoProducto ==3  && cantidadDeBolsas>=5 &&  cantidadDeBolsas <=10){
                importeTotal=precioDescuentoTres *cantidadDeBolsas;
                 console.log(`Producto: Dogpro  x 21 Kilos`);
               console.log(`El precio total a pagar es : $${importeTotal}`);
               console.log(`la cantidad de bolsas es ${cantidadDeBolsas}`);    
       } else if (codigoProducto ==3  && cantidadDeBolsas>=11){
               importeTotal=precioPromoTres *cantidadDeBolsas;
                console.log(`Producto: Dogpro  x 21 Kilos`);
               console.log(`El precio total a pagar es : $${importeTotal}`);
               console.log(`la cantidad de bolsas es ${cantidadDeBolsas}`);   
       }
            else {
            console.log(`Debe ingresar codigo entre  1 y 3`);
            }
        }
    else {
       console.log(`Debe ingresar codigo entre  1 y 3`); 
    }

}
