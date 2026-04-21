/*El dueño de una concesionaria desea lanzar una promoción de venta de sus vehículos 0 km. que tiene en
STOCK. Para ello nos cuenta que tiene tres vehículos disponibles para la venta
y el precio de los mismos es el siguiente:
1) Amarok V6 (Oferta: 65.000.000)
2) TAOS 53.000.000
3) Polo Nuevo 47.000.000
El Gerente nos indica se debería realizar una aplicación debe permitir a los interesados (clientes)
1ro) Selecciona el Vehículo de interés
2do) Que el cliente pueda ingresar el dinero disponible para la compra del vehículo, sabiendo que el
dinero a entregar debe ser mayor al 30% del valor del vehículo y menor al importe total del mismo.
3ro) El Sistema debe calcular la financiación del dinero restante a pagar, sabiendo que la diferencia a
pagar sería equivalente al valor total del vehículo elegido menos el dinero a entregar; esa diferencia será
financiada de la siguiente forma:
12 cuotas - 9.9 % ANUAL
24 cuotas - 22 % ANUAL
36 cuotas - 33 % ANUAL
Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el
DOM y cargar los datos de entrada por medio de prompt.*/



{

    let amarokV6 =  65000000;

    let taos = 53000000;

    let poloNuevo = 47000000;

    let saldoAPagar = 0;

    let automotor = Number (prompt (`ingresar tipo de vehiculo 1 - AMAROK V6, 2- TAOS, 3 - POLO NUEVO`));

    console.log (`usted eligio ${automotor}`);

    let parteDePago=Number(prompt(`Ingrese el monto a pagar`)) ;

   // console.log(parteDePago);

    // automotor = Number (prompt (`ingresar tipo de vehiculo 1 - camion, 2- automovil, 3 - camioneta, 4 - motos`));

        switch (automotor)
      {

        case 1:
            console.log  ("USTED amarok");

             parteDePago = amarokV6 - parteDePago;

             saldoAPagar = amarokV6 - parteDePago;

            console.log(parteDePago);

            console.log(`saldo a pagar ${parteDePago}`);

          

        break; 
        
        case 2:
            console.log  ("USTED taos");

             parteDePago = taos - parteDePago;

            saldoAPagar = taos- parteDePago;

            console.log(parteDePago);

            console.log(`saldo a pagar ${parteDePago}`);

          

        break; 

        case 3:
            console.log  ("USTED polo");

             parteDePago = poloNuevo - parteDePago;

             saldoAPagar = poloNuevo - parteDePago;

             console.log(parteDePago);

             console.log(`saldo a pagar ${parteDePago}`);
            
           

        break; 

        


        default :

        let cargaVehiculo = "s";
        cargaVehiculo = Number (prompt("cargo mal  ? (del 1 al 4)"));
        
 
        break;

      }
             

        let cuotasAPagar = Number(prompt(`ingresar plan de cuotas 1 - 12 cuotas, 2 - 24 cuotas, 3 - 36 cuotas`))

        let cuotas = 0;

        let plan12 = 0;
        let plan24 = 0;
        let plan36 = 0;

        switch (cuotasAPagar)

            {
                case 1:
                    console.log  (`USTED eligio plancuotas 12 = 9.9 % anual`);

                    plan12 = (saldoAPagar * 1.099) / 12;

                    console.log(`saldo ${plan12}`);

                    break;


            
            
            
            case 2:
                    console.log  (`USTED eligio plan 24 cuotas - 22 % ANUAL`);

                     plan24 = (saldoAPagar* 1.22) / 24;

                    console.log(`saldo ${plan24}`);

                    break;

            

            case 3:
                    console.log  (`USTED eligio plan  36 cuotas - 33 % ANUAL`);

                    plan36 = (saldoAPagar* 1.33) / 36;

                    console.log(`saldo  ${plan36} en 36 cuotas`);

                    break;


            }

        
                
     }

   
