/*
Ejercicio Nro. 16:
El dueño de una concesionaria desea lanzar una promoción de venta de sus vehículos 0 km. que tiene en STOCK. Para ello nos cuenta que tiene tres vehículos disponibles para la venta y el precio de los mismos es el siguiente:
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

Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el DOM y cargar los datos de entrada por medio de prompt.
*/

{
    const precioAmarokv6 = 65000000;
    const precioTaos = 53000000;
    const precioPoloNuevo = 47000000;

    let continuar = "S";

    while(continuar === "S" || continuar ==="s")
    {
        let seleccion = Number(prompt(`Seleccione el vehiculo de su interes: 1-Amarokv6 2-Taos 3-PoloNuevo`));

        let precioVehiculo = 0;
        let nombreVehiculo = "";

        switch(seleccion)
        {
            case 1: 
            {
                nombreVehiculo = "Amarok V6";
                precioVehiculo = precioAmarokv6;
                console.log(`El vehiculo seleccionado es: ${nombreVehiculo}`);
                break;
            }
            case 2:
            {
                nombreVehiculo = "Taos";
                precioVehiculo = precioTaos;
                console.log(`El vehiculo seleccionado es: ${nombreVehiculo}`);
                break;
            }
            case 3: 
            {
                nombreVehiculo = " Polo Nuevo";
                precioVehiculo = precioPoloNuevo;
                console.log(`El vehiculo seleccionado es: ${nombreVehiculo}`);
                break; 
            }
            default:
            {
                console.log(`Opcion de vehiculo no valida`);
                break;
            }
        }

        if(precioVehiculo > 0)
        {
            let pagoMinimo = (precioVehiculo *30)/100;

            let pagoInicial = parseFloat(prompt(`Valor: ${precioVehiculo} ingrese entrega (minimo 30%: ${pagoMinimo})`));

            console.log(`El pago inicial ingresado es $: ${pagoInicial}`);

            if((pagoInicial >= pagoMinimo) && (pagoInicial < precioVehiculo))
            {
                let saldoAPagar = precioVehiculo - pagoInicial;

                console.log( `El saldo restante a pagar $: ${saldoAPagar}`);

                let seleccionPlan = Number(prompt(`Seleccione plan: 1-12cuotas (9.9% T.A.) 2-24cuotas(22% T.A.) 3-36cuotas(33% T.A.)`));

                let interes = 0;
                let cuotas = 0;
                let textoPlan = "";

                switch(seleccionPlan)
                {
                    case 1:
                    {
                        textoPlan = "12 cuotas (9.9% T.A.)";
                        console.log(`El plan seleccionado es: ${textoPlan}`);
                        interes = 9.9/100;
                        cuotas = 12;
                        break;
                    }
                    case 2:
                    {
                        textoPlan = "24 cuotas (22% T.A.)";
                        console.log(`El plan seleccionado es: ${textoPlan}`);
                        interes = 22/100;
                        cuotas = 24;
                        break;
                    }
                    case 3: 
                    {
                        textoPlan = "36 cuotas (33% T.A.)";
                        console.log(`El plan seleccionado es: ${textoPlan}`);
                        interes = 33/100;
                        cuotas = 36;
                        break;
                    }
                    default:
                    {
                        console.log(`Plan no valido`);
                        break;
                    }
                }
                if(cuotas > 0)
                {
                    let totalFinanciado = saldoAPagar + (saldoAPagar*interes);

                    let valorCuota = totalFinanciado/cuotas;

                    console.log(`El valor por cuota es de $: ${valorCuota.toFixed(2)}`);
                } 
            }
            else
            {
                console.log(`Monto de entrega incorrecto (debe ser entre 30% y el total)`);
            }
        }
        continuar = prompt(`Desea realizar otra consulta? (Si/No)`);

    }
}