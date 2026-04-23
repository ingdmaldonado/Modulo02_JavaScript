/*Ejercicio Nro. 16:
El dueño de una concesionaria desea lanzar una promoción de venta de sus vehículos 0 km. que tiene en STOCK. Para ello nos cuenta que tiene tres vehículos disponibles para la venta
y el precio de los mismos es el siguiente:

1) Amarok V6 (Oferta: 65.000.000)
2) TAOS 53.000.000
3) Polo Nuevo 47.000.000

El Gerente nos indica se debería realizar una aplicación debe permitir a los interesados (clientes)

1ro) Selecciona el Vehículo de interés

2do) Que el cliente pueda ingresar el dinero disponible para la compra del vehículo, sabiendo que el dinero a entregar debe ser mayor al 30% del valor del vehículo y menor al importe total del mismo.

3ro) El Sistema debe calcular la financiación del dinero restante a pagar, sabiendo que la diferencia a pagar sería equivalente al valor total del vehículo elegido menos el dinero a entregar; esa diferencia será financiada de la siguiente forma:

12 cuotas - 9.9 % ANUAL
24 cuotas - 22 % ANUAL
36 cuotas - 33 % ANUAL

Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el DOM y cargar los datos de entrada por medio de prompt. */

{

let precio=0;
dineroDisponible=0;

selecVehiculo=Number(prompt(`Seleccione vehiculo a comprar: 1-Amarok V6, 2-Taos, 3-Polo Nuevo.`));




switch(selecVehiculo)
{
    case 1 :
        {
            precio=65000000;
          console.log(`Usted eligio la amarok v6, el valor de la misma es de: $ ${precio}`);
          break;  
        }
    case 2 :
        {
            precio=53000000;
            console.log(`Usted eligio la taos, el valor de la misma es de:$ ${precio} `);
            break;
        }
    case 3 :
        {
            precio=47000000;
            console.log(`Usted eligio el polo nuevo, el valor de la mismo es de: $ ${precio}`);
            break;
        }
    default :
    {
            console.log(`Usted ingreso un valor incorrecto.`);
            break;
    }
    
}

dineroDisponible=Number(prompt(`Ingrese el dinero con el que cuenta para la compra del vehiculo:$`));

console.log(`El dinero disponible es de: ${dineroDisponible}`);

treintaPorCiento= precio* 0.30;
let saldoPagar=0;
let cuota=0;


if (dineroDisponible>treintaPorCiento && dineroDisponible<precio)
{
    saldoPagar=precio-dineroDisponible;

    console.log(`El monto restante es: ${saldoPagar}`)

  

    cuota=Number(prompt(`Ingrese cuotas deseadas: 1- 12 cuotas - 9.9 % ANUAL, 2- 24 cuotas - 22 % ANUAL, 3- 36 cuotas - 33 % ANUAL`));

    switch(cuota)
    {
        case 1: 
        {
            cuota=12;
            interes=9.9;
            console.log(`Usted eligio 12 cuotas.` );
            break;

        }
        case 2: 
        {
            cuota=24
            interes=22;
            console.log(`Usted eligio 24 cuotas.` );
            break;
        }
        case 3: 
        {
            interes=33;
            cuota=36;
            console.log(`Usted eligio 36 cuotas.` ); 
            break;           
        }
        default: 
        {
            console.log(`Usted eligio una opcion invalida.` );  
            break;          
        }

    }

    console.log(`El interes anual es de:${interes}%`);
    interesPorcentaje=interes/100;
    interes=saldoPagar*interesPorcentaje

    saldoMasInteres=saldoPagar + (saldoPagar*interesPorcentaje);

    montoCuota= saldoMasInteres/cuota;

    console.log(`Precio del vehiculo: $${precio}`);
    console.log(`Su entrega: $${dineroDisponible}`);
    console.log(`Monto de dinero restante es: $${saldoPagar}`);
    console.log(`El interes es de:$${interes}`);
    console.log(`Con los intereses aplicados a usted le quedaria a pagar: $${saldoMasInteres}`);
    console.log(`Las cuotas son: ${cuota}`);
    console.log(`El valor de las cuotas es:$${montoCuota}`);



}
else 
        {
        console.log("El dinero ingresado no es válido");
        }







}