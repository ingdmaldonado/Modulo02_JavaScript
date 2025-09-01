/*
Nro. 11: 
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

    30% y el 100%

3ro) El Sistema debe calcular la financiación del dinero restante a pagar, sabiendo que la diferencia a 
pagar sería equivalente al valor total del vehículo elegido menos el dinero a entregar; esa diferencia será 
financiada de la siguiente forma:

    1) 12 cuotas - 9.9 % ANUAL 
    2) 24 cuotas - 22 % ANUAL 
    3) 36 cuotas - 33 % ANUAL 

Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el 
DOM y cargar los datos de entrada por medio de prompt.
*/

{
    console.log("running");

    let vehiculoElegido = 0;
    vehiculoElegido = Number(prompt("Indique Vehiculo (1 - AMAROK, 2 - TAOS, 3 - POLO NUEVO"));

    /* como son casos de variables discretas.
    son casos puntuales y precisos. 
    1,2,3
    */

    let precioVehiculoElegido = 0;
    let modeloVehiculoElegido = ``;

    switch(vehiculoElegido)
    {
        case 1: // amarok
            {
                precioVehiculoElegido = 65000000;
                modeloVehiculoElegido = `AMAROK V6`;
                break;
            }

        case 2: // taos
            {
                precioVehiculoElegido = 53000000;
                modeloVehiculoElegido = `TAOS`;
                break;
            }

        case 3: // polo nuevo
            {
                precioVehiculoElegido = 47000000;
                modeloVehiculoElegido = `POLO NUEVO`;
                break;
            }

        default:
            {
                precioVehiculoElegido = 0;
                modeloVehiculoElegido = `VEHICULO INEXISTENTE`;
                break;
            }
    }

    /* cuando salgo del switch el precio
    del vehiculo ya debe venir fijado.
    justamente por cada opción valida del 
    switch. si viene en cero. significa
    que ingreso un valor incorrecto */

    let dineroAEntregar = 0;
    let entregaMinima = 0;
    let saldoAFinanciar = 0;
    let planFinanciacion = 0;
    let tasaAnual = 0;
    let valorCuota = 0;

    if(precioVehiculoElegido > 0)
    {
        dineroAEntregar = Number(prompt(`Indique el Dinero a Entregar`));

        /* aqui debería existir una validación
        que el 
            entrega >= 30%
                y
            entrega <= 100%
        */

        // aqui estoy calculando el 30% de entrega minima //
        entregaMinima = (precioVehiculoElegido * 30)/100;

        // aqui estoy validando que cumpla las condiciones del enunciado //
        if((dineroAEntregar >= entregaMinima) && (dineroAEntregar <= precioVehiculoElegido))
        {
            // aqui calcule el saldo a financiar //           
            saldoAFinanciar = precioVehiculoElegido - dineroAEntregar;

            // lo hicimos elegir el plan de financiacion //
            planFinanciacion = Number(prompt(`Elija plan 1-12 cuotas, 2-24 cuotas, 3-36 cuotas`));

            // en funcion del plan de financiacion calculamos la tasa //
            switch(planFinanciacion)
            {
                case 1: // 12 cuotas
                    {
                        tasaAnual = 9.9;

                        valorCuota = (saldoAFinanciar + (saldoAFinanciar * tasaAnual)/100)/12;

                        console.log(valorCuota);

                        break;
                    }

                case 2: // 24 cuotas
                    {
                        tasaAnual = 22*2;

                        valorCuota = (saldoAFinanciar + (saldoAFinanciar * tasaAnual)/100)/24;

                        console.log(valorCuota);

                        break;
                    }

                case 3:
                    {
                         tasaAnual = 33*3;

                        valorCuota = (saldoAFinanciar + (saldoAFinanciar * tasaAnual)/100)/36;

                        console.log(valorCuota);

                        break;
                    }

                default:
                    {
                        tasaAnual = 0;
                        break;
                    }
            }
            console.log(`Vehiculo Elegido ${vehiculoElegido} Precio: ${precioVehiculoElegido} modelo:${modeloVehiculoElegido} entrega: ${dineroAEntregar} entrega minima: ${entregaMinima} saldo:${saldoAFinanciar} tasa anual: ${tasaAnual}`);
        }
        else
        {
            console.log(`Sr. segun politicas comerciales la entrega mínima del vehiculo que Ud. desea es de ${entregaMinima} y menor a ${precioVehiculoElegido}`);
        }
    }
    else
    {
        console.log(`Sr. Por favor Ingrese un Valor Correcto`);
    }



   


}