/*

El dueño de una concesionaria desea lanzar una promoción de venta de sus vehículos 0 km. que tiene en STOCK. Para ello nos cuenta que tiene tres vehículos disponibles para la venta y el precio de los mismos es el siguiente:

1) Amarok V6 (Oferta: 65.000.000)
2) TAOS 53.000.000
3) Polo Nuevo 47.000.000

El Gerente nos indica se debería realizar una aplicación debe permitir a los interesados (clientes)

-------------------------------------------------
1ro) Selecciona el Vehículo de interés

2do) Que el cliente pueda ingresar el dinero disponible para la compra del vehículo, sabiendo que el dinero a entregar debe ser mayor al 30% del valor del vehículo y menor al importe total del mismo.

3ro) El Sistema debe calcular la financiación del dinero restante a pagar, sabiendo que la diferencia a pagar sería equivalente al valor total del vehículo elegido menos el dinero a entregar; esa diferencia será financiada de la siguiente forma:

-------------------------------------------------

12 cuotas - 9.9 % ANUAL
24 cuotas - 22 % ANUAL
36 cuotas - 33 % ANUAL

*/

{
    let precioAmarok = 65000000;
    let precioTaos = 53000000;
    let precioPolo = 47000000;

    let vehiculo = 0;
    let precioFinal = 0;

    vehiculo = Number(prompt(`Seleccione el vehículo: 1 = Amarok V6, 2 = TAOS, 3 = Polo Nuevo`));

    switch (vehiculo)
    {
        case 1: {
                    precioFinal = precioAmarok;
                    break;
                }
            
        case 2: {
                    precioFinal = precioTaos;
                    break;
                }
            
        case 3: {
                    precioFinal = precioPolo;
                    break;
                }
            
        default: {
                    console.log(`La opción es incorrecta.`);
                    precioFinal = -1;
                }
    }

    if (precioFinal !== -1)
    {
        let minimoRequerido = (precioFinal * 30) / 100;
        let dineroDisponible = Number(prompt(`El precio es $${precioFinal}. Ingrese el dinero a entregar:`));

        if ((dineroDisponible > minimoRequerido) && (dineroDisponible < precioFinal))
        {
            let saldoAFinanciar = precioFinal - dineroDisponible;
            let cantidadCuotas = Number(prompt(`Saldo a financiar: $${saldoAFinanciar}. Elija cuotas: 1 = 12 cuotas, 2 = 24 cuotas, 3 = 36 cuotas`));
            
            let interes = 0;
            let totalConInteres = 0;
            let valorDeLaCuota = 0;
            let meses = 0;

            switch (cantidadCuotas)
            {
                case 1: {
                            interes = (saldoAFinanciar * 9.9) / 100;
                            meses = 12;
                            break;
                        }

                case 2: {
                            interes = ((saldoAFinanciar * 22) / 100) * 2;
                            meses = 24;
                            break;
                        }
                    
                case 3: {
                            interes = ((saldoAFinanciar * 33) / 100) * 3;
                            meses = 36;
                            break;
                        }
                    
                default: {
                            console.log(`La opción es incorrecta.`);
                            interes = -1;
                        }
            }

            if (interes !== -1)
            {
                totalConInteres = saldoAFinanciar + interes;
                valorDeLaCuota = totalConInteres / meses;

                console.log(`Valor del vehículo: $${precioFinal}`);
                console.log(`Dinero entregado: $${dineroDisponible}`);
                console.log(`Capital a financiar: $${saldoAFinanciar}`);
                console.log(`Interes total: $${interes}`);
                console.log(`Total financiado: $${totalConInteres}`);
                console.log(`Deberá pagar ${meses} cuotas fijas de: $${valorDeLaCuota}`);
            }

        }
        else
        {
            console.log(`El dinero entregado debe ser mayor al 30% ($${minimoRequerido}) y menor al total ($${precioFinal}).`);
        }
    }
}