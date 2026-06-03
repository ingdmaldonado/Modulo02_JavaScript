/*
Ejercicio Nro. 16: 
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

1) Amarok V6 (Oferta: 65.000.000) 
2) TAOS 53.000.000 
3) Polo Nuevo 47.000.000

    -el dinero a entregar debe ser mayor al 30% del valor del veiculo y menos al importe del mismodel mismo
    -entregar las opciones de cuotas con el interes a pagar el total del vehiculo menos el dinero entregado


*/
{
    let amarok = 65000000;
    let taos = 53000000;
    let polo = 47000000;

    let vehiculo = 0;
    let precioVehiculo = 0;

    let entrega = 0;
    let minimoEntrega = 0;

    let saldoParaFinanciar = 0;
    let cuotas = 0;
    let valorDeCuota = 0;
    let interes = 0;
    let totalDelFinanciamiento = 0;

    vehiculo = Number(prompt(`Seleccione un vehiculo: 1 - Amarok V62 (65millones) - 2 TAOS (53millones) - 3 Polo Nuevo(47millones)`));

    switch(vehiculo)
    {
        case 1:
        {
            precioVehiculo = amarok;
            console.log(`El vehiculo elegido es Amarok V6`);
            break;
        }

        case 2:
        {
            precioVehiculo = taos;
            console.log(`El vehiculo elegido es TAOS`);
            break;
        }

        case 3:
        {
            precioVehiculo = polo;
            console.log(`El vehiculo elegido es Polo`);
            break;
        }

        default:
        {
            console.log(`vehiculo no registrado`);
            break;
        }
    }

    minimoEntrega = (precioVehiculo * 30) / 100;

    entrega = Number(prompt(`Minimo entrega 30% - Ingrese el monto que abonara`));

    if((entrega >= minimoEntrega) && (entrega < precioVehiculo))//la entrega debe ser mayor o igual al minimo y menor al precio del vehicu
    {
        saldoParaFinanciar = precioVehiculo - entrega;

        cuotas = Number(prompt(`Seleccione financiacion: 12 cuotas = 9.9% - 4 cuotas = 22% - 36 cuotas = 33%`));

        switch(cuotas)
        {
            case 12:
            {
                interes = (saldoParaFinanciar * 9.9) / 100;
                break;
            }
            case 24:
            {
                interes = (saldoParaFinanciar * 22) / 100;
                break;
            }
            case 36:
            {
                interes = (saldoParaFinanciar * 33) / 100;
                break;
            }
            default:
            {
                console.log(`No esta dentro de las opciones`);
                break;
            }
        }
        totalDelFinanciamiento = saldoParaFinanciar + interes;
        valorDeCuota = totalDelFinanciamiento / cuotas;

        console.log(`Precio vehiculo: ${precioVehiculo}`);

        console.log(`Entrega: ${entrega}`);

        console.log(`Saldo a financiar: ${saldoParaFinanciar}`);

        console.log(`Interes aplicado: ${interes}`);

        console.log(`Total financiado: ${totalDelFinanciamiento}`);

        console.log(`Valor de cada cuota: ${valorDeCuota}`);
    }
}
/*

                     */