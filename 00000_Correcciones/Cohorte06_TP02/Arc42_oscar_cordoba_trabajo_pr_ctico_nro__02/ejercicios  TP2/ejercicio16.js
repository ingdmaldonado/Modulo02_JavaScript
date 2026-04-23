{
    let vehiculo=0;
    let tipoVehiculo=0;
    let continua=`s`;
    let pagoInicial=0;
    let precioVehiculoUno= 65000000;
    let precioVehiculoDos=53000000;
    let precioVehiculoTres= 47000000;
    let entregaMinimaUno=0;
    let entregaMinimaDos=0;
    let entregaMinimaTres=0;
    let saldoUno=0;
    let saldoDos=0;
    let saldoTres=0;
    let tasaDoce=9.9;
    let tasaVeinticuatro=22;
    let tasaTreintaYseis=33;
    let saldoFinacioacion=0;
    let cuotaMensual=0;
    let cuotas=0;






    let anticipo=0;


     while (continua===`S`|| continua===`s`)
     { 
       
      tipoVehiculo = Number(prompt(`Ingrese tipo de Vehiculo que desea comprar: 1- Amarok V6 ,2- TAOS, 3- Polo Nuevo`));
        
       switch(tipoVehiculo)
       {
           case 1:
            {
              console.log(` El vehiculo elejido es  una Amarok V6`);

              entregaMinimaUno= precioVehiculoUno * 0.3;
              


              anticipo=  Number(prompt(`Ingrese el anticipo para la compra:`));

              if (anticipo > entregaMinimaUno  &&  anticipo <precioVehiculoUno)
              { 

              //pagoInicial= precioVehiculoUno - anticipo;//
              //saldo =precioVehiculoUno-pagoInicial;//
              saldo =precioVehiculoUno -anticipo;
              
              


              //console.log(`El pago Minimo es: ${entregaMinimaUno}`);//
              console.log(`El anticipo que da es: ${anticipo}`);
               console.log(`El Saldo es: ${saldo}`);
              

              // Plan de Financioan//
               
              cuotas = Number(prompt(`Desea financiar en  12 , 24, 36 meses. Elija los meses`));
                 switch(cuotas) { 
                  case 12: // plan 12 meses //
                  {
                     //tasaDoce = (saldoFinacioacion * 9.9)/100;//
                     saldoFinacioacion =saldo +(saldo * 9.9 )/100 ;
                      console.log(`El Saldo financiado es: ${saldoFinacioacion}`);
                
                     console.log(`Ud Elijio finaciacion  de 12 meses `);
                     cuotaMensual= saldoFinacioacion/12;
                      console.log(`La cuota mensual sera de: ${cuotaMensual}`);
                     break;
                  }
                  case 24:
                     {
                        saldoFinacioacion =saldo +(saldo * 22 )/100 ;
                      console.log(`El Saldo financiado es: ${saldoFinacioacion}`);
                
                     console.log(`Ud Elijio finaciacion  de 24 meses `);
                     cuotaMensual= saldoFinacioacion/24;
                      console.log(`La cuota mensual sera de: ${cuotaMensual}`);
                     break;
                     }
                  case 36:
                     {
                       saldoFinacioacion =saldo +(saldo * 33 )/100 ;
                      console.log(`El Saldo financiado es: ${saldoFinacioacion}`);
                
                     console.log(`Ud Elijio finaciacion  de 36 meses `);
                     cuotaMensual= saldoFinacioacion/36;
                      console.log(`La cuota mensual sera de: ${cuotaMensual}`);
                     break;

                     }
                   default:
                     {
                        break;
                     }  




               }

              //console.log(`El valor que le queda es ${saldo}`);//
              }

              else {
               console.log(`Debe ingresar el anticipo dentro de los valores requeridos`);
              }

               break;

            }
          case 2:
            {
               console.log(` El vehiculo elejido es  un TAOS`);
             
              entregaMinimaDos= precioVehiculoDos * 0.3;
              

              anticipo=  Number(prompt(`Ingrese el anticipo para la compra:`));

              if (anticipo > entregaMinimaDos  &&  anticipo <precioVehiculoDos)
              { 

              //pagoInicial= precioVehiculoUno - anticipo;//
              //saldo =precioVehiculoUno-pagoInicial;//
              saldo =precioVehiculoDos -anticipo;
              
            
              //console.log(`El pago Minimo es: ${entregaMinimaUno}`);//
              console.log(`El anticipo que da es: ${anticipo}`);
               console.log(`El Saldo es: ${saldo}`);
              

              // Plan de Financioan//
               
              cuotas = Number(prompt(`Desea financiar en  12 , 24, 36 meses. Elija los meses`));
                 switch(cuotas) { 
                  case 12: // plan 12 meses //
                  {
                     //tasaDoce = (saldoFinacioacion * 9.9)/100;//
                     saldoFinacioacion =saldo +(saldo * 9.9 )/100 ;
                      console.log(`El Saldo financiado es: ${saldoFinacioacion}`);
                
                     console.log(`Ud Elijio finaciacion  de 12 meses `);
                     cuotaMensual= saldoFinacioacion/12;
                      console.log(`La cuota mensual sera de: ${cuotaMensual}`);
                     break;
                  }
                  case 24:
                     {
                        saldoFinacioacion =saldo +(saldo * 22 )/100 ;
                      console.log(`El Saldo financiado es: ${saldoFinacioacion}`);
                
                     console.log(`Ud Elijio finaciacion  de 24 meses `);
                     cuotaMensual= saldoFinacioacion/24;
                      console.log(`La cuota mensual sera de: ${cuotaMensual}`);
                     break;
                     }
                  case 36:
                     {
                       saldoFinacioacion =saldo +(saldo * 33 )/100 ;
                      console.log(`El Saldo financiado es: ${saldoFinacioacion}`);
                
                     console.log(`Ud Elijio finaciacion  de 36 meses `);
                     cuotaMensual= saldoFinacioacion/36;
                      console.log(`La cuota mensual sera de: ${cuotaMensual}`);
                     break;
                     }
                   default:
                      {  
                        break;
                     }  




               }

              //console.log(`El valor que le queda es ${saldo}`);//
              }

              else {
               console.log(`Debe ingresar el anticipo dentro de los valores requeridos`);
              }

               break;

            }
            
           case 3:
           {
               console.log(` El vehiculo elejido es  un Polo Nuevo`);
             
              entregaMinimaTres= precioVehiculoTres * 0.3;
              

              anticipo=  Number(prompt(`Ingrese el anticipo para la compra:`));

              if (anticipo > entregaMinimaTres  &&  anticipo <precioVehiculoTres)
              { 

              //pagoInicial= precioVehiculoUno - anticipo;//
              //saldo =precioVehiculoUno-pagoInicial;//
              saldo =precioVehiculoTres -anticipo;
              
            
              //console.log(`El pago Minimo es: ${entregaMinimaUno}`);//
              console.log(`El anticipo que da es: ${anticipo}`);
               console.log(`El Saldo es: ${saldo}`);
              

              // Plan de Financioan//
               
              cuotas = Number(prompt(`Desea financiar en  12 , 24, 36 meses. Elija los meses`));
                 switch(cuotas) { 
                  case 12: // plan 12 meses //
                  {
                     //tasaDoce = (saldoFinacioacion * 9.9)/100;//
                     saldoFinacioacion =saldo +(saldo * 9.9 )/100 ;
                      console.log(`El Saldo financiado es: ${saldoFinacioacion}`);
                
                     console.log(`Ud Elijio finaciacion  de 12 meses `);
                     cuotaMensual= saldoFinacioacion/12;
                      console.log(`La cuota mensual sera de: ${cuotaMensual}`);
                     break;
                  }
                  case 24:
                     {
                        saldoFinacioacion =saldo +(saldo * 22 )/100 ;
                      console.log(`El Saldo financiado es: ${saldoFinacioacion}`);
                
                     console.log(`Ud Elijio finaciacion  de 24 meses `);
                     cuotaMensual= saldoFinacioacion/24;
                      console.log(`La cuota mensual sera de: ${cuotaMensual}`);
                     break;
                     }
                  case 36:
                     {
                       saldoFinacioacion =saldo +(saldo * 33 )/100 ;
                      console.log(`El Saldo financiado es: ${saldoFinacioacion}`);
                
                     console.log(`Ud Elijio finaciacion  de 36 meses `);
                     cuotaMensual= saldoFinacioacion/36;
                      console.log(`La cuota mensual sera de: ${cuotaMensual}`);
                     break;
                     }
                   default:
                      {  
                        break;
                     }  




               }

              //console.log(`El valor que le queda es ${saldo}`);//
              }

              else {
               console.log(`Debe ingresar el anticipo dentro de los valores requeridos`);
              }

               break;

            }

          default:
            {
               console.log(` El vehiculo no esta disponible`);
               break;
               
            }


          

       }

      


        continua= prompt(`Desea comprar otro vehiculo?.(S/N)`);

     }

     
}