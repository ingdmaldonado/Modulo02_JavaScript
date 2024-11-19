
/* El dueño de una empresa una concesionaria
local desea lanzar una promoción de venta
de sus 0km. y nos comenta lo siguiente 

    tiene 3 vehiculos para la venta

    1) AMAROK V6 57.000.000
    2) TAOS 50.000.000
    3) POLO NUEVO 42.000.000


    usuario
    A) seleccione el vehiculo por el que esta interesado
    B) que ingrese el capital a entregar
    tiene que ser mayor al 50% del valor del vehiculo.
    C) se financiará la diferencia en tres planes

        12 cuotas - 9%
        24 cuotas - 18%
        36 cuotas - 27%

*/

{
    console.log("funcionando");

    const auto1 = 57000000;
    const auto2 = 50000000;
    const auto3 = 42000000;

    let autoInteresado = Number(prompt("Ingrese el vehiculo de su gusto. 1. AMAROK, 2. TAOS, 3. POLO"));

    let entregaMinima = 0;// declaro e inicializo en cero.

    let valorAutoElegido = 0;

    switch(autoInteresado)
    {
        case 1:
            {
                entregaMinima = auto1/2;
                valorAutoElegido = auto1;
                console.log(`Ud. Eligio la AMAROK y el precio es ${auto1} y la entrega mínima es ${entregaMinima}`);
                break;
            }

        case 2:
            {
                entregaMinima = auto2/2;
                valorAutoElegido = auto2;
                console.log(`Ud. Eligio la TAOS y el precio es ${auto2} y la entrega mínima es ${entregaMinima}`);
                break;
            }

        case 3:
            {
                entregaMinima = auto3/2;
                valorAutoElegido = auto3;
                console.log(`Ud. Eligio el POLO y el precio es ${auto3} y la entrega mínima es ${entregaMinima}`);
                break;
            }

        default:
            {
                console.log(`Ud. no eligió ninún valor`);
                break;
            }
    }

    
    /* aqui solicito que ingrese el dinero a entregar */
    valorDeEntrega = Number(prompt("Ingrese el dinero a entregar"));

    /* aqui muestro el dinero a ingresar */
    console.log(valorDeEntrega);
   
    /* aqui calculo el total a financiar */
    let totalAFinanciar = 0;
    totalAFinanciar = valorAutoElegido - valorDeEntrega;

    /* aqui muestro el total a financiar */
    console.log(`El Resto a Financiar sera: ${totalAFinanciar}`);

    /* me voy a crear variables auxiliares
    donde voy a calcular los intereses
    y los totales a financiar con interes */

    let interesEn12Cuotas = 0;
    let capitalConInteresEn12Cuotas = 0;
    let valorCuotaEn12Meses = 0;

    /* Esto es el cálculo de financiación en 12 cuotas */
    
    interesEn12Cuotas = (totalAFinanciar * 9)/100;
    capitalConInteresEn12Cuotas = totalAFinanciar + interesEn12Cuotas;
    valorCuotaEn12Meses = capitalConInteresEn12Cuotas / 12;

    /* aqui controlo que el dinero la entrega sea mayor 
    al 50% del valor del auto y que sea menor al total
    del vehiculo */

    if((valorDeEntrega >= entregaMinima) && (valorDeEntrega <valorAutoElegido))
    {
        console.log("por aqui vamos a realizar la financiación");

        console.log(`El Resto a Financiar será de ${totalAFinanciar}`);

        console.log(`El total con interes (12 cuotas) será de ${capitalConInteresEn12Cuotas}`);

        console.log(`El valor de la cuota (12 cuotas) es de ${valorCuotaEn12Meses}`);
    }
    else
    {
        console.log("Su entrega no alcanza el 50% establecido por la firma");
    }





}