/* Ejercicio Nro. 16:
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
    // Precios de los vehículos
    let precioAmarok = 65000000;
    let precioTaos = 53000000;
    let precioPolo = 47000000;

    //let continuar = true;

    let continua = `S`;
    let opcion = 0;

    while (continua === `S` || continua === `s`)
    {
        opcion = Number(prompt(`Seleccione el vehículo de interés:\n1) Amarok V6 ($65.000.000)\n2) TAOS ($53.000.000)\n3) Polo Nuevo ($47.000.000)`));

        let precioVehiculo = 0;
        let nombreVehiculo = ``;

        switch (opcion)
        {
            case 1:
            {
                precioVehiculo = precioAmarok;
                nombreVehiculo = `Amarok V6`;
                break;
            }
            case 2:
            {
                precioVehiculo = precioTaos;
                nombreVehiculo = `TAOS`;
                break;
            }
            case 3:
            {
                precioVehiculo = precioPolo;
                nombreVehiculo = `Polo Nuevo`;
                break;
            }
            default:
            {
                console.log(`Opción inválida. Intente nuevamente.`);
                break;
            }
        }

        let dinero = Number(prompt(`Ingrese el dinero disponible para la compra del ${nombreVehiculo}: `));

        let minimo = (precioVehiculo * 30)/100;
        console.log(precioVehiculo)
        console.log(minimo)

        if (dinero < minimo || dinero >= precioVehiculo) 
        {
            console.log(`El dinero ingresado debe ser mayor al 30% (` + minimo + `) y menor al precio total (` + precioVehiculo + `)`);
        }
        else
        {
            /* Diferencia a financiar */
            let diferencia = precioVehiculo - dinero;

            /* Cálculo de financiación */
            let cuota12 = (diferencia * (1 + 0.099)) / 12;
            let cuota24 = (diferencia * (1 + 0.22)) / 24;
            let cuota36 = (diferencia * (1 + 0.33)) / 36;

            console.log(`- FINANCIACIÓN -`);
            console.log(`Vehículo elegido: ` + nombreVehiculo);
            console.log(`Precio total: $` + precioVehiculo);
            console.log(`Dinero entregado: $` + dinero);
            console.log(`Diferencia a financiar: $` + diferencia);
            console.log(`Opciones de financiación:`);
            console.log(`12 cuotas (9.9% anual): $` + cuota12.toFixed(2) + ` cada una`);
            console.log(`24 cuotas (22% anual): $` + cuota24.toFixed(2) + ` cada una`);
            console.log(`36 cuotas (33% anual): $` + cuota36.toFixed(2) + ` cada una`);
        }
        continua = prompt(`Desea Continuar ?. (S/N)`); 
    }
}