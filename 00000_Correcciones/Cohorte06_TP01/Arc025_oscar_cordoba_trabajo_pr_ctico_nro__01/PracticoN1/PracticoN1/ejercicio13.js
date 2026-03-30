{

    let rubro =0;
    let importeCompra =0;
    let descuento =0;
    let importeTotalCompra =0;


      rubro = Number(prompt(`Ingres el Rubro : 1-Vestimenta 2-Perfumeria 3- Libreria:  4-Eelctrodomesticos 5- Calzados`));
      importeCompra = prompt(`Ingrese el importe de la compra`);

      switch (rubro) {

        case 1:
        
         if (importeCompra <= 80000) { 
         //descuento= importeCompra -descuento;//
         descuento= (importeCompra *20)/ 100 ;
         importeTotalCompra = importeCompra -descuento;
         console.log(`Rubro: Vestimenta`);
         console.log(`Importe de la compra :$${importeCompra}`);
         console.log(`Descuento: $${descuento}`);
         console.log(`El importe final a pagar es:$${importeTotalCompra} `);

         }
         else {
            descuento= 16000 ;
         importeTotalCompra = importeCompra -descuento;
         console.log(`Rubro: Vestimenta`);
         console.log(`Importe de la compra :$${importeCompra}`);
         console.log(`Descuento: $${descuento}`);
         console.log(`El importe final a pagar es:$${importeTotalCompra} `);

         }
          break;


         case 2:
          if (importeCompra <= 80000) { 
         //descuento= importeCompra -descuento;//
         descuento= (importeCompra *20)/ 100 ;
         importeTotalCompra = importeCompra -descuento;
         console.log(`Rubro: Perfumeria`);
         console.log(`Importe de la compra :$${importeCompra}`);
         console.log(`Descuento: $${descuento}`);
         console.log(`El importe final a pagar es:$${importeTotalCompra} `);

         }
          else {
            descuento= 16000 ;
         importeTotalCompra = importeCompra -descuento;
         console.log(`Rubro: Vestimenta`);
         console.log(`Importe de la compra :$${importeCompra}`);
         console.log(`Descuento: $${descuento}`);
         console.log(`El importe final a pagar es:$${importeTotalCompra} `);

         }
        break;

         case 3:
          if (importeCompra <= 90000) { 
         //descuento= importeCompra -descuento;//
         descuento= (importeCompra *30)/ 100 ;
         importeTotalCompra = importeCompra -descuento;
         console.log(`Rubro: Libreria`);
         console.log(`Importe de la compra :$${importeCompra}`);
         console.log(`Descuento: $${descuento}`);
         console.log(`El importe final a pagar es:$${importeTotalCompra} `);

         }
          else {
            descuento= 27000 ;
         importeTotalCompra = importeCompra -descuento;
         console.log(`Rubro: Vestimenta`);
         console.log(`Importe de la compra :$${importeCompra}`);
         console.log(`Descuento: $${descuento}`);
         console.log(`El importe final a pagar es:$${importeTotalCompra} `);

         }
        break;

         case 4:
          if (importeCompra <= 70000) { 
         //descuento= importeCompra -descuento;//
         descuento= (importeCompra *15)/ 100 ;
         importeTotalCompra = importeCompra -descuento;
         console.log(`Rubro: Electrodomestico`);
         console.log(`Importe de la compra :$${importeCompra}`);
         console.log(`Descuento: $${descuento}`);
         console.log(`El importe final a pagar es:$${importeTotalCompra} `);

         }
          else {
            descuento= 10500 ;
         importeTotalCompra = importeCompra -descuento;
         console.log(`Rubro: Vestimenta`);
         console.log(`Importe de la compra :$${importeCompra}`);
         console.log(`Descuento: $${descuento}`);
         console.log(`El importe final a pagar es:$${importeTotalCompra} `);

         }
        break;

         case 5:
         if (importeCompra <= 80000) { 
         //descuento= importeCompra -descuento;//
         descuento= (importeCompra *20)/ 100 ;
         importeTotalCompra = importeCompra -descuento;
         console.log(`Rubro: Calzado`);
         console.log(`Importe de la compra :$${importeCompra}`);
         console.log(`Descuento: $${descuento}`);
         console.log(`El importe final a pagar es:$${importeTotalCompra} `);

         }
          else {
            descuento= 16000 ;
         importeTotalCompra = importeCompra -descuento;
         console.log(`Rubro: Vestimenta`);
         console.log(`Importe de la compra :$${importeCompra}`);
         console.log(`Descuento: $${descuento}`);
         console.log(`El importe final a pagar es:$${importeTotalCompra} `);

         }
        break;
        default:
            







      }



}