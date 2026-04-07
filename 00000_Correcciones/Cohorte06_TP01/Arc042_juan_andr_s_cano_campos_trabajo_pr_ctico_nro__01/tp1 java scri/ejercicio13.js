{
    // Ejercicio 13

let rubro = 0;

 rubro = Number(prompt(`indique rubro`));

 let importeDeCompra = 0 ;

 importeDeCompra = Number( prompt(`ingrese el importe de la compra`))

 let descuento = 0;

 let esRubroValido = true ;



 switch(rubro)
 {
  case 1 :{
        console.log(`rubro de vestimenta `);

        descuento = (importeDeCompra * 20 )/100;

         descuento = descuento > 80000 ? 80000:descuento;

    console.log (` descuento final :`, descuento);



                break;
  }
    case 2 :{
         console.log(`rubro de  perfuneria`);

          descuento = (importeDeCompra * 20 )/100;

          descuento = descuento > 80000 ? 80000:descuento;
    console.log(`el valor es importe de co`)
    console.log (` descuento final :`, descuento);

                 break;

  }  case 3 :{
     console.log(` rubro de libreria `);

      descuento = (importeDeCompra * 30 )/100;

       descuento = descuento > 90000 ? 90000:descuento;

    console.log (` descuento final :`, descuento);

          



             break;

  }  case 4 :{
     console.log(`rubro de electrodomesticos`);

      descuento = (importeDeCompra * 15 )/100

       descuento = descuento > 70000 ? 70000:descuento;

    console.log (` descuento final :`, descuento);

             break;

  }  case 5 :{
         console.log(`rubro de calsados`);

          descuento = (importeDeCompra * 20 )/100

           descuento = descuento > 80000 ? 80000:descuento;

    console.log (` descuento final :`, descuento);

                 break;

  }  
  default :{
      console.log ( ` dia invalido ingrese nuevamente`);
        esRubroValido = false;
        break;
  }

 }


      let totalAPagar = 0;

 totalAPagar = importeDeCompra - descuento;

console.log (`el total a pagar es ${totalAPagar} el descuento es ${descuento}` )

}