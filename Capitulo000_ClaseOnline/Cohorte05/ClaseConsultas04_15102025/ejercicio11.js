
/* 

Ejercicio Nro. 11:
El dueño de una concesionaria desea lanzar una promoción de venta de sus vehículos 0 km. que tiene en STOCK. Para ello nos cuenta que tiene tres vehículos disponibles para la venta
y el precio de los mismos es el siguiente:

1) Amarok V6 (Oferta: 65.000.000)
2) TAOS 53.000.000
3) Polo Nuevo 47.000.000

El Gerente nos indica se debería realizar una aplicación 
debe permitir a los interesados (clientes)

1ro) Selecciona el Vehículo de interés
2do) Que el cliente pueda ingresar el dinero 
disponible para la compra del vehículo, sabiendo que el 
dinero a entregar debe ser mayor al 30% del valor del
 vehículo y menor al importe total del mismo.

3ro) El Sistema debe calcular la financiación del 
dinero restante a pagar, sabiendo que la diferencia a
 pagar sería equivalente al valor total del vehículo 
 elegido menos el dinero a entregar; esa diferencia será financiada de la siguiente forma:
12 cuotas - 9.9 % ANUAL
24 cuotas - 22 % ANUAL
36 cuotas - 33 % ANUAL
*/

{

    console.log("aplicación corriendo");

    const precioAmarok = 65000000;
    const precioTaos = 53000000;
    const precioPolo = 47000000;

    /* (1ra.) El operador debe indicar el vehiculo
    que quiere */

    let vehiculoElegido = 0;
    vehiculoElegido = Number(prompt(`Ing. Vehiculo (1 - AMAROK, 2 - TAOS, 3 - POLO)`));
    console.log(vehiculoElegido);

   
    /* (2do) A partir del vehiculo vamos a establecer
    el precio */

    let precioVehiculo = 0; // registrar de forma unica el precio del vehiculo que eligio.

    switch(vehiculoElegido)
    {
        case 1:
            {
                console.log(`Ud. Eligio la AMAROK V.6`);
                precioVehiculo = precioAmarok;
                break;
            }

        case 2:
            {
                console.log(`Ud. Eligio la TAOS`);
                precioVehiculo = precioTaos;
                break;

            }

        case 3:
            {
                console.log(`Ud. Eligio el POLO`);
                precioVehiculo = precioPolo;
                break;
            }

        default:
            {
                console.log(`Sr. Se equivoco ese vehiculo no esta en el catalogo`);
                precioVehiculo = 0;
                break;
            }
    }

    console.log(`El precio del vehiculo elegido es ${precioVehiculo}`);

    /* (3ra.) Pedirle al Usuario que Indique la entrega */

    let dineroAEntregar = 0; // declaro e inicializo en cero.
    dineroAEntregar = Number(prompt(`Ing. El dinero a Entregar`));
    console.log(`Dinero a Entregar ${dineroAEntregar}`);

    /* (4to.) Vamos a calcular el Valor Minimo de 
    entrega que es el 30% */

    let valorMinimoDeEntrega = 0;
    valorMinimoDeEntrega = (precioVehiculo * 30)/100;

    /* (5to.) Realizar los Controles. 
    
        - que el dineroAEntregar sea mayor al 30% del precio vehiculo
        - que el dineroAEntregar sea menor al valor del vehiculo
    */

    let diferenciaAFinanciar = 0;

    let tipoFinanciacion = 0;

    if(dineroAEntregar < valorMinimoDeEntrega)
    {
        console.log(`Sr. la entrega mínima debe ser superior a ${valorMinimoDeEntrega}`);
    }
    else
    {
        if(dineroAEntregar > precioVehiculo)
        {
            console.log(`Sr. Cliente el precio del vehiculo es ${precioVehiculo} y Ud. realiza una entrega mayor ${dineroAEntregar}`);
        }   
        else
        {
            /* por aqui deberíamos calcular 
            el valor a financiar */
            diferenciaAFinanciar = precioVehiculo - dineroAEntregar;


            tipoFinanciacion = Number(prompt(`Ing. Tipo de Financiacion (1 - 12 cuotas ; 2 - 24 cuotas; 3 - 36 cuotas) `));

            console.log(tipoFinanciacion);

            switch(tipoFinanciacion)
            {
                case 1: // 12 cuotas 9.9% anual
                    {

                    }

                case 2: // 24 cuotas 22% anual
                    {

                    }

                case 3: // 36 cuotas 33% anual
                    {

                    }

                default:
                    {

                    }

            }

        }
    }
}