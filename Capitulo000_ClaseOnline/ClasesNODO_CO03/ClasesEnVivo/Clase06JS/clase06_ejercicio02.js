/* 

Un banco de plaza local, desea realizar
un simulador de plazos fijos, con la intención
de captar clientes y fomentar el ahorro,
para ello contratará un programador FULL STACK
que permita construir una aplicación web con 
el objetivo de simular las siguientes reglas de negocio

El gerente del Banco nos indica que la aplicación 
debería solicitar que ingrese

	1) El capital a Ingresar
	2) La cantidad de meses en los que realizará el plazo fijo

para Montos de Capital de:
 
 - 500.000 a 1.500.000 la rentabilidad será del 6% mensual
 - 1.500.000 hasta 5.000.000 la rentabilidad será del 7,5% mensual
 - 5.000.000 hasta 25.000.000 la rentabilidad será del 8,5% mensual
 - para valores que superen esa magnitud la tasa mensual será del 9,5%


    ANALISIS ....

        => capital = 32.000.000,00 ?. 
        => cantidad de meses = 4 ?.
        => rentabilidadMensual = 9,5% * 4
        => 38%
        => capital + (capital * 38)/100
        
*/
{
    let capital = 0;
    let cantidadMeses = 0;
    let rentabilidadTotal = 0;
    let capitalConRentabilidad = 0;

    capital = prompt(`Ingrese el Capital`);

    if(!isNaN(capital)) // lado verdadero entro cuando es un numero
    {
        capital = Number(capital);// convertirlo a numero
        console.log(capital); // mostrarlo

        if(capital >=500000)
        {
            // aqui voy a solicitar que ingrese la cantidad de meses.

            cantidadMeses = prompt(`Indique la cantidad de meses`);

            if(!isNaN(cantidadMeses))
            {
                // convertir a numero la cantidad de meses
                cantidadMeses = Number(cantidadMeses);

                if(cantidadMeses > 0) // si la cantidad es mayor a cero
                {
                    // por aqui dentro estaría todo el calculo //

                    /* por aqui vendría todo el calculo */

                    if((capital >= 500000) && (capital <= 1500000))
                    { // rentabilidad es de 6%
                        rentabilidadTotal = cantidadMeses * 6;
                    }

                    if((capital > 1500000) && (capital <= 5000000))
                    { // rentabilidad es de 7.5%
                        rentabilidadTotal = cantidadMeses * 7.5;
                    }

                    if((capital > 5000000) && (capital <= 25000000))
                    { // rentabilidad es de 8.5
                        rentabilidadTotal = cantidadMeses * 8.5;
                    }

                    if(capital > 25000000)
                    { // rentabilidad es de 9.5
                        rentabilidadTotal = cantidadMeses * 9.5;
                    }

                    /* el dinero que me devolverá el plazo fijo es.
                    el capital que pongo + la rentabilidad mensual

                    el % de devolución del plazo fijo

                    */

                    capitalConRentabilidad = capital + (capital * rentabilidadTotal)/100;

                   
                    console.log(`Capial: ${capital} Plazo:${cantidadMeses} Rendimiento:${capitalConRentabilidad.toFixed(2)}`);


                }
                else
                {
                    console.log(`Cantidad de meses aceptado mayor a cero`);
                }
            }
            else
            {
                console.log(`por favor ingrese una cantidad en formato numerico`);
            }
        }
        else
        {
            console.log(`El Banco trabaja con importes de capital menores 500.000,00`);
        }
    }
    else
    {
        console.log(`El capital no esta en formato numerico`);
    }
}

/* 

    1ro) Pedi el Capital
    

    2do) lo converti a numero

    3ro) Valide que este dentro del rango aceptado
    por el banco

    4to) Pedir que me ingrese la cantidad de meses ?.

    (01) => Pido las dos variables al principio
        Karen
        Carlos Eduardo


    (02) => Pido la cantidad de meses, cuando
    se que el capital es un numero valido y correcto ?.

        Gaston 
        Augusto
        Alexis
        Lorena




*/