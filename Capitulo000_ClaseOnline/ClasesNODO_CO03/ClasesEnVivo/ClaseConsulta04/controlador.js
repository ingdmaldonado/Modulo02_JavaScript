
/* 

Ejercicio Nro. 11: 
El dueño de una concesionaria desea lanzar una promoción de venta de sus vehículos 0 km. que tiene en 
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
DOM y cargar los datos de entrada por medio de prompt.
*/

//

    let continuaSimulando = "SI";
    while (continuaSimulando === "SI")
    {
        // AQUI ESTARIA TODA LA LOGICA QUE ME PERMITE SIMULAR LOS CREDITOS

        {
            console.log("funcionando");
        
            /* 1ro) declaro como constantes los precios de los vehiculos */
            const precioVehiculo1 = 65000000;
            const precioVehiculo2 = 53000000;
            const precioVehiculo3 = 47000000;
        
        
            /* (2do) El operador seleccion el vehiculo a elegir */
        
            let vehiculoElegido = 0;
            vehiculoElegido = Number(prompt("por favor ingrese el tipo vehiculo (1-AMAROK, 2 - TAOS, 3-POLO"));
        
            console.log(vehiculoElegido);
        
            /* (3ro) el Cliente debería indicar el dinero a entregar */
        
            let dineroAEntregar = 0;
            dineroAEntregar = Number(prompt("indique el dinero a entregar "));
            console.log(dineroAEntregar);
        
            /* (4to) Aqui vamos a definir y establecer la entrega mínima. 
            que es el 30% del vehiculo elegido */
        
            let entregaMinima = 0;
            let precioVehiculo = 0;
            
            switch(vehiculoElegido)
            {
                case 1: // eligio la amarok
                    {
                        entregaMinima = (precioVehiculo1 * 30)/100;
                        precioVehiculo = precioVehiculo1;
                        break;
                    }
        
                case 2: // eligio la TAOS
                    {
                        entregaMinima = (precioVehiculo2 * 30)/100;
                        precioVehiculo = precioVehiculo2;
                        break;
                    }
        
                case 3: // eligio el POLO
                    {
                        entregaMinima = (precioVehiculo3 * 30)/100;
                        precioVehiculo = precioVehiculo3;
                        break;
                    }
                default:
                    {
                        entregaMinima = 0;
                        alert("Ud. no eligió un vehiculo disponible");
                    }
            }
        
            console.log(entregaMinima);
        
            /* 5to) Determinar si el Dinero que tiene para entregar
            está por arriba del 30% del valor del vehiculo. 
            que en este caso esta guardado en la variable que 
            se llama entregaMinima. podriamos calcular el resto a financiar */
        
            let diferenciaAFinanciar = 0;
        
            if((dineroAEntregar > entregaMinima) && (dineroAEntregar < precioVehiculo))
            {
                console.log("esta en condiciones de financiar el resto !!!");
        
                diferenciaAFinanciar = precioVehiculo - dineroAEntregar;
        
                console.log(`El dinero restante a financiar será de ${diferenciaAFinanciar}`);
        
            }
            else
            {
                console.log(`El vehículo que ud. Selecciono necesita una entrega mínima de ${entregaMinima} y ud. dispone de ${dineroAEntregar}`);
            }
        
            /* 
            12 cuotas - 9.9 % ANUAL 
            24 cuotas - 22 % ANUAL 
            36 cuotas - 33 % ANUAL 
            */
        
            let tipoDeFinanciacion = 0;
            let totalAPagarConInteres = 0;
            let valorDeLaCuota = 0;
        
        
            if(diferenciaAFinanciar > 0) // hay algo para financiar
            {
                tipoDeFinanciacion = Number(prompt("Ingrese el tipo de plan de financiacion 1- 12 cuotas / 2 - 24 cuotas / 3 - 36 cuotas"));
        
                switch(tipoDeFinanciacion)
                {
                    case 1: // 12 cuotas y 9.9% anual
                        {
                            totalAPagarConInteres = diferenciaAFinanciar + (diferenciaAFinanciar * 9.9)/100;
                            valorDeLaCuota = totalAPagarConInteres / 12;
                            break;
                        }
                    case 2: // 24 cuotas y 22% anual
                        {
                            totalAPagarConInteres = diferenciaAFinanciar + (diferenciaAFinanciar * 44)/100;
                            valorDeLaCuota = totalAPagarConInteres / 24;
                            break;
                        }
        
                    case 3: // 36 cuotas y 33% anual
                        {
                            totalAPagarConInteres = diferenciaAFinanciar + (diferenciaAFinanciar * 99)/100;
                            valorDeLaCuota = totalAPagarConInteres / 36;
                            break;
                        }
                    default:
                        {
                            totalAPagarConInteres = 0;
                            console.log("Señor eligió un tipo de financiación NO PREVISTO");
                        }
                }
                console.log(`El Dinero a Financiar es ${diferenciaAFinanciar} el total a pagar es ${totalAPagarConInteres} y el valor de su cuota es ${valorDeLaCuota}`);
            }
            else
            {
                console.log("El dinero no alcanza a cubrir la entrega mínima");
            }
        }


        // AQUI AL FINAL deberiamos preguntarle si desea continuar simulando

        continuaSimulando = prompt("Desea simular nuevamente ? SI/NO");
    }

