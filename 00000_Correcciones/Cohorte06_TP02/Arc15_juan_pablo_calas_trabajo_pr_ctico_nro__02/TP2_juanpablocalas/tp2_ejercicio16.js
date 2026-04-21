/*
Ejercicio Nro. 16:
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
Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el DOM y cargar los datos de entrada por medio de prompt.

*/
const CalculaMontoCuota = (CantCuotas,PorcFin,Saldo) =>{

    let TasaMensual = (PorcFin/CantCuotas)/100;
    let MontoCuota = Saldo * TasaMensual * (((1+ TasaMensual) ** CantCuotas)/(((1+ TasaMensual) ** CantCuotas)-1));

    return MontoCuota
}

{
    let CodigoVehiculo = 0;
    
    let MontoVeh1 = 65000000;
    let MontoVeh2 = 53000000;
    let MontoVeh3 = 47000000;

    let MontoEntrega = 0;
    let PorcMontoEntrega = 30;
    let MontoMinimoEntrega = 0;
    let MontoSaldo = 0;
    let OpcionFinanciacion = 0;

    let PorcAnualFin1 = 9.9;
    let PorcAnualFin2 = 22;
    let PorcAnualFin3 = 33;

//    let TasaMensual = 0;

    let MontoCuotaFinanc = 0;

    let CodigoVehiculoCorrecto = 'S'

    CodigoVehiculo =Number(prompt(`Ingrese codigo Vehiculo deseado. 1->AMAROK / 2->TAOS / 3->POLO`));
    MontoEntrega = Number(prompt(`Ingrese Monto Entrega`));
    switch(CodigoVehiculo)
    {
        case 1:
            {
                console.log(`Compra Amarok`);
                MontoMinimoEntrega = ((MontoVeh1 * PorcMontoEntrega)/ 100);
                if(MontoEntrega >= MontoMinimoEntrega)
                {
                    console.log(`El Monto de Entrega ${MontoEntrega} es Válido`);
                    MontoSaldo = MontoVeh1 - MontoEntrega;
                    console.log(`El Saldo a Financiar es ${MontoSaldo}`);
                }
                else
                {
                    CodigoVehiculoCorrecto = 'N'                   
                    console.log(`El Monto de Entrega NO es Válido - Ingrese al menos el 30% ${MontoMinimoEntrega} del valor del Vehiculo (${MontoVeh1})`) ;
                }
                break;
            }
        case 2:
            {
                console.log(`Compra Taos`);
                MontoMinimoEntrega = ((MontoVeh2 * PorcMontoEntrega)/ 100);
                if(MontoEntrega >= MontoMinimoEntrega)
                {
                    console.log(`El Monto de Entrega ${MontoEntrega} es Válido`);
                    MontoSaldo = MontoVeh2 - MontoEntrega;
                    console.log(`El Saldo a Financiar es ${MontoSaldo}`);

                }
                else
                {
                    CodigoVehiculoCorrecto = 'N'
                    console.log(`El Monto de Entrega NO es Válido - Ingrese al menos el 30% ${MontoMinimoEntrega} del valor del Vehiculo (${MontoVeh2})`) ;
                }
                break;
            }
        case 3:
            {
                console.log(`Compra Polo`);
                MontoMinimoEntrega = ((MontoVeh3 * PorcMontoEntrega)/ 100);
                if(MontoEntrega >= ((MontoVeh3 * PorcMontoEntrega)/ 100))
                {
                    console.log(`El Monto de Entrega ${MontoEntrega} es Válido`);
                    MontoSaldo = MontoVeh3 - MontoEntrega;
                    console.log(`El Saldo a Financiar es ${MontoSaldo}`);

                }
                else
                {
                    CodigoVehiculoCorrecto = 'N'
                    console.log(`El Monto de Entrega NO es Válido - Ingrese al menos el 30% ${MontoEntrega} del valor del Vehiculo (${MontoVeh3})`) ;
                }
                break;
            }
        default:
        {
            CodigoVehiculoCorrecto = 'N'
            break;
        }    
    }
    if(CodigoVehiculoCorrecto === 'S')
    {
        OpcionFinanciacion =Number(prompt(`Ingrese codigo de Opcion de Financ.. 1->12 c 9.9% / 2->24 c. 22% / 3->36 c 33%`));
        switch(OpcionFinanciacion)
        {
            case 1: // 12 cuotas 9.9%
                MontoCuotaFinanc = CalculaMontoCuota(12,PorcAnualFin1,MontoSaldo);
                console.log(`Eligio Plan 12 Cuotas (9.9% Anual) - La cuota a pagar es ${MontoCuotaFinanc}`);
            break;
            case 2: // 24 cuotas 22%
/*
                TasaMensual = (PorcAnualFin2/12)/100
                MontoCuotaFinanc = MontoSaldo * TasaMensual * (((1+ TasaMensual) ** 24)/(((1+ TasaMensual) ** 24)-1))
*/                
                MontoCuotaFinanc = CalculaMontoCuota(24,PorcAnualFin2,MontoSaldo);
                console.log(`Eligio Plan 24 Cuotas (22% Anual) - La cuota a pagar es ${MontoCuotaFinanc}`);

                break;
            case 3: // 36 cuotas 33%
                MontoCuotaFinanc = CalculaMontoCuota(36,PorcAnualFin3,MontoSaldo);
                console.log(`Eligio Plan 36 Cuotas (33 %Anual) - La cuota a pagar es ${MontoCuotaFinanc}`);
            break;                
        }

    }
    else
    {
        console.log(`El Codigo Vehiculo Ingresado O el Monto Entregado son INCORRECTO  - Reingrese Datos`)
    }
}

