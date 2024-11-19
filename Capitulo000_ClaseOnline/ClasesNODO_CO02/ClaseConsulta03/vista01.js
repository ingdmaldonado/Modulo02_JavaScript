
/* CLASE EXTRA Nº 2

    El dueño de una concesionaria local desea lanzar
    na promoción de venta de 0 km

    Tiene 3 vehículos para la venta:

    1) Amarok V6 (Oferta: 57.000.000)
    2) TAOS 50.000.000
    3) Polo Nuevo 42.000.000

    Usuario:
    a) Seleccione vehículo por el que está interesado.
    b) Ingrese el capital a Entregar. Tiene que ser mayor 
    a 50% del valor total del vehículo.
    c) Se financiará la diferencia en tres planes

    12 cuotas - 9% ANUAL
    24 cuotas - 18% ANUAL
    36 cuotas - 27% ANUAL
*/


/*
    1ro) Elige la TAOS 57.000.000

    2do) Tiene que indicar el dinero
    que tiene a entregar

        la entrega = 30.000.000,00

    3ro) diferencia = 27.000.000,00

    4to) 
        interesAPagar = (27.000.000,00 * 9)/100

        interesAPagar = 2.430.000,00

        financiacionTotal = diferencia + interes

        financiacionTotal = 27.000.000,00 + 2.430.000,00

        financiacionTotal = 29.430.000

        valorDeLaCuotaEnPlan12 = 2.452.500,00

*/

/* bloque de codigo principal */
{

    /* primera parte. le vamos a dar al usuario
    que elija el vehiculo */

    console.log("corriendo");

    let vehiculoSeleccionado = 0;

    vehiculoSeleccionado = Number(prompt("Indique el vehiculo por el que esta interesado 1- AMAROK, 2 - TAOS, 3 - POLO NUEVO"));
    let valorAuto = 0;

    console.log(vehiculoSeleccionado);

    switch(vehiculoSeleccionado)
    {
        case 1:
            {
                valorAuto = 57000000.00;
                break;
            }

        case 2:
            {
                valorAuto = 50000000.00;
                break;
            }

        case 3:
            {
                valorAuto = 42000000.00;
                break;
            }

        default:
            {
                valorAuto = 0;
                alert("por favor seleccione un valor de 1 a 3");
                break;
            }

        /*
        ``
        */

    }

    
    console.log(`Sr. ud. eligio un auto de ${valorAuto}`);

    /* segunda parte - solicitarle al usuario que ingrese
    el dinero a entregar. el capital 
    */

    let dineroDeEntrega = 0;
    dineroDeEntrega = Number(prompt("Indique el dinero a entregar ?"));


    /* tercera parte - validar que la entrega sea mayor
    al 50% del valor del auto, que haya elegido un auto
    correcto y que la entrega sea menor al total del vehiculo */

    let diferenciaAPagar = 0;

    let interes_En12Cuotas = 0;
    let valorDeCuota_En12Cuotas = 0;

    if((dineroDeEntrega > (valorAuto*50/100)) && (valorAuto > 0) && (dineroDeEntrega < valorAuto))
    {
        /* que eligio un auto válido y que además
        esta entregando más del 50% del valor del auto*/

        console.log(`Ud. eligió un vehiculo de ${valorAuto} y entrega ${dineroDeEntrega}`);

        diferenciaAPagar = valorAuto - dineroDeEntrega;

        // calculan la financiacion en 12 cuotas //
        interes_En12Cuotas = (diferenciaAPagar * 9)/100;
        valorDeCuota_En12Cuotas = (diferenciaAPagar + interes_En12Cuotas) / 12;

    }
    else
    {
        console.log("Elija un auto correcto ó su entrega es menor al 50% ó su entrega es mayor al valor del auto");
    }

    /* cuarta parte => muestro los planes de financiación */

    console.log(`valor ${valorAuto} - ${dineroDeEntrega} - ${diferenciaAPagar} - ${interes_En12Cuotas}`);
    console.log(`valor cuota (plan 12 cuotas) ${valorDeCuota_En12Cuotas}`);

}