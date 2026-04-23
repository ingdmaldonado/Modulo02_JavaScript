/* TP2 - EJERCICIO NRO. 16

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

12 cuotas - 9.9 % ANUA
24 cuotas - 22 % ANUAL
36 cuotas - 33 % ANUAL 

*/

{
    /* Precios fijos */
    const PRECIO_AMAROK = 65000000;
    const PRECIO_TAOS   = 53000000;
    const PRECIO_POLO   = 47000000;

    /* Tasas de financiación anuales */
    const TASA_12 = 9.9;
    const TASA_24 = 22;
    const TASA_36 = 33;

    /* ── PASO 1: Selección del vehículo */
    let vehiculoElegido = 0;
    vehiculoElegido = Number(prompt(`Seleccione el vehículo de su interés:
1 - Amarok V6   $65.000.000
2 - TAOS        $53.000.000
3 - Polo Nuevo  $47.000.000`));

    let precioVehiculo    = 0;
    let nombreVehiculo    = ``;
    let operacionCorrecta = false;

    switch(vehiculoElegido)
    {
        case 1:
        {
            precioVehiculo    = PRECIO_AMAROK;
            nombreVehiculo    = `Amarok V6`;
            operacionCorrecta = true;
            break;
        }
        case 2:
        {
            precioVehiculo    = PRECIO_TAOS;
            nombreVehiculo    = `TAOS`;
            operacionCorrecta = true;
            break;
        }
        case 3:
        {
            precioVehiculo    = PRECIO_POLO;
            nombreVehiculo    = `Polo Nuevo`;
            operacionCorrecta = true;
            break;
        }
        default:
        {
            console.log(`Opción inválida. Ingrese 1, 2 o 3`);
            operacionCorrecta = false;
            break;
        }
    }

    if(operacionCorrecta)
    {
        /*  PASO 2: Dinero a entregar  */

        /* El monto mínimo a entregar es el 30% del precio */
        let montoMinimo = (precioVehiculo * 30) / 100;

        let dineroEntregado = 0;
        dineroEntregado = Number(prompt(`Vehículo seleccionado: ${nombreVehiculo}
Precio: ${precioVehiculo}
Monto mínimo a entregar (30%): ${montoMinimo}

Ingrese el dinero disponible para la compra:`));

        /* Validar el monto */
        if((dineroEntregado > montoMinimo) && (dineroEntregado < precioVehiculo))
        {
            /* PASO 3: Financiación  */

            let saldoAFinanciar = precioVehiculo - dineroEntregado;

            let cantidadCuotas = 0;
            cantidadCuotas = Number(prompt(`Saldo a financiar: ${saldoAFinanciar}

Seleccione el plan de cuotas:
1 - 12 cuotas =>  9,9% anual
2 - 24 cuotas => 22%   anual
3 - 36 cuotas => 33%   anual`));

            let tasaAnual      = 0;
            let cuotas         = 0;
            let planCorrecto   = false;

            switch(cantidadCuotas)
            {
                case 1:
                {
                    tasaAnual    = TASA_12;
                    cuotas       = 12;
                    planCorrecto = true;
                    break;
                }
                case 2:
                {
                    tasaAnual    = TASA_24;
                    cuotas       = 24;
                    planCorrecto = true;
                    break;
                }
                case 3:
                {
                    tasaAnual    = TASA_36;
                    cuotas       = 36;
                    planCorrecto = true;
                    break;
                }
                default:
                {
                    console.log(`Plan de cuotas inválido. Ingrese 1, 2 o 3`);
                    planCorrecto = false;
                    break;
                }
            }

            if(planCorrecto)
            {
                /* Cálculo del interés total y valor de la cuota
                   Interés total = saldo * (tasaAnual / 100) * (cuotas / 12)
                   Total a pagar con intereses = saldo + interés total
                   Valor cuota mensual = total a pagar / cantidad de cuotas */

                let interesTasa   = (tasaAnual / 100) * (cuotas / 12);
                let interesTotal  = saldoAFinanciar * interesTasa;
                let totalFinanciado = saldoAFinanciar + interesTotal;
                let valorCuota    = totalFinanciado / cuotas;

                console.log(`--- COMPROBANTE DE COMPRA ---`);
                console.log(`Vehículo:              ${nombreVehiculo}`);
                console.log(`Precio del vehículo:   ${precioVehiculo}`);
                console.log(`Dinero entregado:      ${dineroEntregado}`);
                console.log(`Saldo a financiar:     ${saldoAFinanciar}`);
                console.log(`Plan elegido:          ${cuotas} cuotas al ${tasaAnual}% anual`);
                console.log(`Interés total:         ${interesTotal}`);
                console.log(`Total financiado:      ${totalFinanciado}`);
                console.log(`Valor de cada cuota:   ${valorCuota}`);
            }
        }
        else
        {
            if(dineroEntregado <= montoMinimo)
            {
                console.log(`El dinero entregado debe ser MAYOR al 30% del vehículo (${montoMinimo})`);
            }
            else
            {
                console.log(`El dinero entregado no puede ser igual o mayor al precio total del vehículo (${precioVehiculo})`);
            }
        }
    }
}
