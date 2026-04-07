/*EJERCICIO NRO. 07:
Un local de venta de comida rápida, lanza su aplicación online que le permite al cliente pagar por la misma y
además aclara que se incluye en el precio total el costo del envío dependiendo la zona en la que vive el cliente.
1) Zona Centro = $ 2500,00
2) Zona Oeste = $ 3750,00
3) Zona Norte = $ 4225,00
4) Zona Sur = $ 5222,50
5) Zona Este = $ 4288,50
Debe ingresar el importe de la compra, sumarle el costo del envío en función de la zona del cliente.
Recomendación: Es mejor guardar los costos de envío en variables, de tal forma que si en un futuro cambian, no
haya que tocar la lógica del programa, ni ver todo el recorrido, sino simplemente cambiar los precios.*/


{
  let importeDeCompra = 0 ;

  let zonaDeEnvio = 0 ;

  importeDeCompra = Number(prompt(`Sr. Indique el Importe de Compra`));

  let zonaCentro=2500.00;

  let zonaOeste= 3750;

  let zonaNorte=4225;

  let zonaSur=5222.50;

  let zonaEste=4288.50;

  zonaDeEnvio = Number(prompt(`Indique zona de envio 1 - Zona Centro, 2 - Zona Oeste, 3 - Zona Norte, 4 - Zona Sur, 5 - Zona Este`));

  //console.log(`su compra es de $`, importeDeCompra);

  

  let operacionCorrecta = false;
  
  let totalConEnvio = 0 ;

  

  switch(zonaDeEnvio)
    {
        case 1:// zona centro//
            {
                operacionCorrecta=true;
                totalConEnvio=importeDeCompra+zonaCentro;

                console.log(`Ud. eligio zona centro`, zonaCentro);
                console.log(`su costo con envioes `, totalConEnvio);


                console.log(`Importe Compra: ${importeDeCompra} costo de envio: ${zonaDeEnvio} Total a Pagar: ${totalConEnvio}`);

                
                

                

                

                break;
            }
    case 2 : 
         {

            operacionCorrecta=true;
                totalConEnvio=importeDeCompra+zonaOeste;

                console.log(`Ud. eligio zona oeste`, zonaOeste);
                console.log(`su costo con envioes `, totalConEnvio);

                console.log(`Importe Compra: ${importeDeCompra} costo de envio: ${zonaDeEnvio} Total a Pagar: ${totalConEnvio}`);
                

                

                

                break;
            }
       case 3 :      
         {

            operacionCorrecta=true;
                totalConEnvio=importeDeCompra+zonaNorte;

                console.log(`Ud. eligio zona norte`, zonaNorte);
                console.log(`su costo con envioes `, totalConEnvio);

                console.log(`Importe Compra: ${importeDeCompra} costo de envio: ${zonaDeEnvio} Total a Pagar: ${totalConEnvio}`);
            

                

                

                break;
            }

          case 4 :   
              {

                operacionCorrecta=true;
                totalConEnvio=importeDeCompra+zonaSur;

                console.log(`Ud. eligio zona sur`, zonaSur);
                console.log(`su costo con envioes `, totalConEnvio);

                console.log(`Importe Compra: ${importeDeCompra} costo de envio: ${zonaDeEnvio} Total a Pagar: ${totalConEnvio}`);
                

                

                

                break;
            }
            case 5 : 
              {

                operacionCorrecta=true;
                totalConEnvio=importeDeCompra+zonaEste;

                console.log(`Ud. eligio zona este`, zonaEste);
                console.log(`su costo con envioes `, totalConEnvio);

                console.log(`Importe Compra: ${importeDeCompra} costo de envio: ${zonaDeEnvio} Total a Pagar: ${totalConEnvio}`);
                

                

                

                break;
            }

      default: // un valor no definido sin descuento
            {
               

                operacionCorrecta = false;

                
                
                break;
            }  


        

   
}
 if(operacionCorrecta )
    {
        totalConEnvio=importeDeCompra+zonaDeEnvio;
        

    

        //console.log(`Importe Compra: ${importeDeCompra} costo de envio: ${zonaDeEnvio} Total a Pagar: ${totalConEnvio}`);

    
    }
    else
    {
        console.log(`Sr. Ud. eligió una opción incorrecta. intente nuevamente`);
    }

       
}

