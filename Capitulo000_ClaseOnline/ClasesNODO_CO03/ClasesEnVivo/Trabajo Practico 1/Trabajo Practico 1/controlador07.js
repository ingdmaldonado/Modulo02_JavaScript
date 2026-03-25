

/* 

Un comercio que vende bolsas de alimentos para mascotas trabaja y comercializa únicamente con tres
grandes marcas de alimentos para perros lo que le permite trabajar con descuentos muy interesantes para sus
clientes. Las marcas con las que trabaja son: 

1 Dogui x 21 kil. $38.000,00 $ 36.000,00 $ 34.000,00
2 Tiernitos x 21 kil $ 31.000,00 $ 29.000,00 $ 27.000,00
3 Dogpro x 21 kil $ 46.000,00 $ 44.000,00 $ 42.000,00

Realice un programa en JavaScript que permita ingresar el código del producto y la cantidad de bolsas a
comprar y que solo determine el importe total a pagar.

*/

{
    // para doguis

    const doguixunidad = 38000; 
    const doguicincoydiez= 36000;
    const doguimayoradiez = 34000;
    
    // para tiernitos
    const tiernitosxunidad = 31000;
    const tiernitoscincoydiez = 29000;
    const tiernitosmayoradiez = 27000;
    
    // para dogpro

    const dogproxunidad = 46000;
    const dogprocincoydiez = 44000;
    const dogpromayoradiez = 42000;

   let codigo = 0;
   codigo = prompt(`Ingrese el codigo (1 = DOGUI, 2=TIERNITOS, 3=DOGPRO)`);
  
  let cantidad =0;

  /* 
  
    === significa que pregunto que la variable tenga ese valor y que sea numerico

    == significa que pregunta que la variable tenga ese valor, no importa el formato

    No se repitan sentencias que hagan lo mismo.


  */
  
  if (codigo == 1){
      console.log(`El codigo ingresado es ${codigo}-Dogui`)
      cantidad = prompt("Ingrese la cantidad")
      if (cantidad < 5){
          console.log(`La cantidad ingresada es ${cantidad}`)
          console.log(`La cantidad ingresada es menor a 5, no tiene promo. El precio por unidad es de $ ${doguixunidad}`)
          console.log(`El total a pagar por ${cantidad} bolsas es de $ ${cantidad * doguixunidad}`) 
      }else if (cantidad >= 5 && cantidad <=10){
          console.log(`La cantidad ingresada es ${cantidad}`)
          console.log(`Promo Gogui entre 5 y 10 bolsas a $ ${dogprocincoydiez} c/u`)
          console.log(`El total a pagar por ${cantidad} bolsas con la promo es de $ ${cantidad * doguicincoydiez}`)
      }else{
          console.log(`La cantidad ingresada es de ${cantidad}`)
          console.log(`La cantidad es mayor a 10, tiene una promo a $ ${dogpromayoradiez} c/u`)
          console.log(`El total a pagar por ${cantidad} bolsas es de $ ${cantidad * doguimayoradiez}`)
      }
  }else if (codigo == 2){
      console.log(`El codigo ingresado es ${codigo}-Tiernitos`)
      cantidad = prompt("Ingrese la cantidad")
      if (cantidad < 5){
          console.log(`La cantidad ingresada es ${cantidad}`)
          console.log(`La cantidad ingresada es menor a 5, no tiene promo. El precio por unidad es de $ ${tiernitosxunidad}`)
          console.log(`El total a pagar por ${cantidad} bolsas es de $ ${cantidad * tiernitosxunidad}`) 
      }else if (cantidad >= 5 && cantidad <=10){
          console.log(`La cantidad ingresada es ${cantidad}`)
          console.log(`Promo Tiernitos entre 5 y 10 bolsas a $ ${tiernitoscincoydiez} c/u`)
          console.log(`El total a pagar por ${cantidad} bolsas con la promo es de $ ${cantidad * tiernitoscincoydiez}`)
      }else{
          console.log(`La cantidad ingresada es de ${cantidad}`)
          console.log(`La cantidad es mayor a 10, tiene una promo a $ ${tiernitosmayoradiez} c/u`)
          console.log(`El total a pagar por ${cantidad} bolsas es de $ ${cantidad * tiernitosmayoradiez}`)}
  }else if (codigo == 3){
      console.log(`El codigo ingresado es ${codigo}-Dogpro`)
      cantidad = prompt("Ingrese la cantidad")
      if (cantidad < 5){
          console.log(`La cantidad ingresada es ${cantidad}`)
          console.log(`La cantidad ingresada es menor a 5, no tiene promo. El precio por unidad es de $ ${dogproxunidad}`)
          console.log(`El total a pagar por ${cantidad} bolsas es de $ ${cantidad * dogproxunidad}`) 
      }else if (cantidad >= 5 && cantidad <=10){
          console.log(`La cantidad ingresada es ${cantidad}`)
          console.log(`Promo Dogpro entre 5 y 10 bolsas a $ ${dogprocincoydiez} c/u`)
          console.log(`El total a pagar por ${cantidad} bolsas con la promo es de $ ${cantidad * dogprocincoydiez}`)
      }else{
          console.log(`La cantidad ingresada es de ${cantidad}`)
          console.log(`La cantidad es mayor a 10, tiene una promo a $ ${dogpromayoradiez} c/u`)
          console.log(`El total a pagar por ${cantidad} bolsas es de $ ${cantidad * dogpromayoradiez}`)}
      }else {
      console.log(`El codigo ${codigo} ingresado es incorrecto, ingrese un codigo del 1 al 3`)
  }
  }


   