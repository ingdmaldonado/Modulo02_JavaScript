{
 let nuevoCliente=``;
 let contadorProducto=0;
 let contadorCliente=0;
 let precioProdcuto=0;
 let totalPorCliente=0;
 let totalPorTurno=0;
 let descuento =0;
 let totalPorClienteAPagar=0;
 let clienteConDescuento=0;
 let clienteSinDescuento=0;
 let descuentoTotal=0;





 nuevoCliente=prompt(`Desea atender un nuevo cliente? (S/N)`);

 while (nuevoCliente===`s`  || nuevoCliente ===`S`)
 {
  
     contadorCliente = contadorCliente +1 ;

     let nuevoProducto= `S`;

     nuevoProducto=prompt(`Desea comprar otro producto? (S/N)`);

     while (nuevoProducto === `S` || nuevoProducto === `s`)
     {

      contadorProducto =contadorProducto +1; 
      precioProdcuto= Number(prompt(`Ingrese el precio del producto${contadorProducto} `));

      totalPorCliente =totalPorCliente + precioProdcuto;

      console.log(`Cliente: ${contadorCliente} Prodcuto es: ${contadorProducto}`);
        
     nuevoProducto=prompt(`Desea comprar  un nuevo prodcuto? (S/N)`);

     }
     /* Formas de pagos
     1- Efectivo
     2- VISA BNA
     3- Mastercard BNA
     4- Otras arjetas
     */

     let formaDePago= Number(prompt(`Ingrese la forma de pago: 1-Efectivo ,2 - VISA, 3-Mastercard. 4 - , Otros`));
     
     switch (formaDePago)
     {
       case 1:
        {
            descuento =(totalPorCliente *10)/100 ;
            clienteConDescuento =clienteConDescuento +1;
            descuentoTotal =descuentoTotal +descuento;
            break;

        }
       case 2:
        {
             descuento =(totalPorCliente *7)/100 ;
              clienteConDescuento =clienteConDescuento +1;
             descuentoTotal =descuentoTotal +descuento;
            break;

        } 
        case 3:
       {
         descuento =(totalPorCliente *7)/100 ;
        clienteConDescuento =clienteConDescuento +1;
      
            break;

       }
       case 4:
        {
             descuento = 0;
             clienteSinDescuento = clienteSinDescuento +1;
          
            break;

        }
        default :
        {
            descuento = 0;
         
            break;


        }

        
     }

       descuentoTotal = descuentoTotal + descuento ;
       
      totalPorClienteAPagar =totalPorCliente-descuento ;
      
     console.log(`N° De Cliente ${contadorCliente} y Total a pagar es: ${totalPorCliente} Neto a ingresar:${totalPorClienteAPagar}`);
     
     console.log(`Cantidad de clientes con descuentos: ${clienteConDescuento}`);
     console.log(`Cantidad de clientes sin descuentos: ${clienteSinDescuento}`);
     console.log(`el descuento total de todas la ventas es:${descuentoTotal}`);
     console.log(`el descuento total de todas la ventas es:${descuento}`);

     totalPorTurno =totalPorTurno + totalPorCliente;

     totalPorCliente=0;

     contadorProducto =0;
     descuentoTotal=0;
     //console.log(`La cantidad de cliente es: ${contadorCliente}`)//
     nuevoCliente=prompt(`Desea atender un nuevo cliente? (S/N)`);

 }

 console.log(`Fin de atencion de todos los clientes`);

}